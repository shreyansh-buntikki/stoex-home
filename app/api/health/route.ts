import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const startedAt = new Date();

const DIGIGOLD_URL = "https://apirate.digigold.com/rates/stoex";
const DEP_TIMEOUT_MS = 6000;

type CheckStatus = "ok" | "degraded" | "down";

interface DependencyCheck {
  name: string;
  status: CheckStatus;
  latencyMs: number;
  httpStatus?: number;
  message?: string;
}

async function checkDigigold(): Promise<DependencyCheck> {
  const start = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DEP_TIMEOUT_MS);

  try {
    const res = await fetch(DIGIGOLD_URL, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY ?? ""}`,
      },
      signal: controller.signal,
      cache: "no-store",
    });
    const latencyMs = Date.now() - start;
    const bodyText = await res.text();

    let parsed: unknown;
    try {
      parsed = JSON.parse(bodyText);
    } catch {
      parsed = undefined;
    }

    const msg =
      parsed && typeof parsed === "object" && "message" in parsed
        ? String((parsed as { message: unknown }).message ?? "")
        : "";

    if (res.ok) {
      return {
        name: "digigold",
        status: "ok",
        latencyMs,
        httpStatus: res.status,
      };
    }

    if (msg.toLowerCase() === "access denied") {
      return {
        name: "digigold",
        status: "degraded",
        latencyMs,
        httpStatus: res.status,
        message: "reachable but IP not whitelisted",
      };
    }

    return {
      name: "digigold",
      status: "down",
      latencyMs,
      httpStatus: res.status,
      message: msg || `unexpected status ${res.status}`,
    };
  } catch (err) {
    const latencyMs = Date.now() - start;
    const message =
      err instanceof Error
        ? err.name === "AbortError"
          ? `timeout after ${DEP_TIMEOUT_MS}ms`
          : err.message
        : "unknown error";
    return {
      name: "digigold",
      status: "down",
      latencyMs,
      message,
    };
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  const now = new Date();
  const uptimeSec = Math.floor((now.getTime() - startedAt.getTime()) / 1000);

  const dependencies: DependencyCheck[] = await Promise.all([checkDigigold()]);

  const anyDown = dependencies.some((d) => d.status === "down");
  const anyDegraded = dependencies.some((d) => d.status === "degraded");

  const overall: CheckStatus = anyDown
    ? "down"
    : anyDegraded
      ? "degraded"
      : "ok";

  // Per spec: 404 on failure triggers orchestrator restart.
  // "degraded" (reachable, IP not whitelisted) stays 200 — restart will not fix IP allowlist.
  const httpStatus = overall === "down" ? 404 : 200;

  return NextResponse.json({ status: overall }, { status: httpStatus });
}
