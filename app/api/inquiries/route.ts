import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function pruneRateLimitMap() {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetAt) rateLimitMap.delete(key);
  }
}

const ALLOWED_ORIGINS = new Set(
  [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.ALLOWED_ORIGIN,
    "https://www.stoex.in",
    "https://stoex.in",
    "https://dev-stoex-india-website.p2eppl.com",
    "http://localhost:3000"
  ].filter(Boolean) as string[],
);

type InquiryType = "contact" | "early_access" | "newsletter";

interface InquiryData {
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  type?: InquiryType;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  // if (origin && !ALLOWED_ORIGINS.has(origin)) {
  //   return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
  // }

  if (rateLimitMap.size > 10_000) pruneRateLimitMap();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  try {
    const body: InquiryData = await request.json();

    const isNewsletterOnly = body.type === "newsletter";
    if (!isNewsletterOnly && (!body.name || !body.phone)) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, and Phone)" },
        { status: 400 },
      );
    }
    if (!body.email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 },
      );
    }

    if (!isNewsletterOnly && (body.name?.length ?? 0) > 100)
      return NextResponse.json({ success: false, error: "Name must not exceed 100 characters" }, { status: 400 });
    if (body.email.length > 254)
      return NextResponse.json({ success: false, error: "Email must not exceed 254 characters" }, { status: 400 });
    if (!isNewsletterOnly && (body.phone?.length ?? 0) > 20)
      return NextResponse.json({ success: false, error: "Phone must not exceed 20 characters" }, { status: 400 });
    if (body.company && body.company.length > 200)
      return NextResponse.json({ success: false, error: "Company must not exceed 200 characters" }, { status: 400 });
    if (body.message && body.message.length > 2000)
      return NextResponse.json({ success: false, error: "Message must not exceed 2000 characters" }, { status: 400 });

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 });
    }

    if (!isNewsletterOnly) {
      const digitsOnly = (body.phone ?? "").replace(/[\s\-().+]/g, "");
      if (!/^\d{7,15}$/.test(digitsOnly)) {
        return NextResponse.json({ success: false, error: "Please enter a valid phone number" }, { status: 400 });
      }
    }

    const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
    console.log("[inquiries] BASE_URL:", process.env.BASE_URL, "NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL, "resolved:", baseUrl);
    if (!baseUrl) {
      return NextResponse.json({ success: false, error: "Backend URL not configured" }, { status: 500 });
    }

    const VALID_TYPES: InquiryType[] = ["contact", "early_access", "newsletter"];
    const sanitized: InquiryData = {
      ...(body.name?.trim() ? { name: escapeHtml(body.name.trim()) } : {}),
      email: body.email.trim().toLowerCase(),
      ...(body.phone?.trim() ? { phone: body.phone.trim() } : {}),
      ...(body.company ? { company: escapeHtml(body.company.trim()) } : {}),
      ...(body.message ? { message: escapeHtml(body.message.trim()) } : {}),
      type: body.type && VALID_TYPES.includes(body.type) ? body.type : "early_access",
    };

    const upstreamUrl = `${baseUrl}/api/inquiries`;
    console.log("[inquiries] upstream POST →", upstreamUrl, "payload:", JSON.stringify(sanitized));

    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitized),
      cache: "no-store",
    });

    console.log("[inquiries] upstream status:", upstream.status, upstream.statusText);

    if (upstream.ok) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    let upstreamBody: unknown;
    try {
      upstreamBody = await upstream.text();
    } catch {
      upstreamBody = "<unreadable>";
    }
    console.error("[inquiries] upstream error body:", upstreamBody);

    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry. Please try again." },
      { status: upstream.status >= 500 ? 502 : upstream.status },
    );
  } catch (error) {
    console.error("[inquiries] caught error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
