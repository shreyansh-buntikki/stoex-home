import { NextRequest, NextResponse } from "next/server";
import { getBlogs } from "@/lib/wordpress";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = Math.max(1, Number(searchParams.get("page") ?? "2"));

  try {
    const { blogs, hasMore } = await getBlogs(page, 12);
    return NextResponse.json({ blogs, hasMore });
  } catch {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
