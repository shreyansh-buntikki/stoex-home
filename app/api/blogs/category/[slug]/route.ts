import { NextRequest, NextResponse } from "next/server";
import { getCategories, getBlogsByCategory } from "@/lib/wordpress";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { searchParams } = req.nextUrl;
  const page = Math.max(1, Number(searchParams.get("page") ?? "2"));

  try {
    const categories = await getCategories();
    const cat = categories.find((c) => c.slug === slug);
    if (!cat) return NextResponse.json({ error: "Category not found" }, { status: 404 });

    const { blogs, hasMore } = await getBlogsByCategory(cat.id, page, 12);
    return NextResponse.json({ blogs, hasMore });
  } catch {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
