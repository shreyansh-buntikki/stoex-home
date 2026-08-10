import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DIGIGOLD_URL = "https://apirate.digigold.com/rates/stoex";

export async function GET() {
  try {
    const res = await fetch(DIGIGOLD_URL, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY ?? ""}`,
      },
      cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "upstream fetch failed";
    return NextResponse.json({ message }, { status: 502 });
  }
}
