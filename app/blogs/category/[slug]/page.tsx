import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getBlogsByCategory } from "@/lib/wordpress";
import type { Blog } from "@/components/blogs/BlogList";
import CategoryBlogList from "@/components/blogs/CategoryBlogList";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name} — Stoex Blog`,
    description: `Read all articles about ${cat.name} on Stoex.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === slug);

  if (!cat) {
    return (
      <section className="bg-[#f8f6f6] py-16 min-h-screen">
        <div className="container mx-auto px-6 text-center text-[#5B5B5B]">
          Category not found.{" "}
          <Link href="/blogs" className="text-[#00007F] underline">
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  let blogs: Blog[] = [];
  let hasMore = false;
  try {
    ({ blogs, hasMore } = await getBlogsByCategory(cat.id, 1, 12));
  } catch {
    // render with empty
  }

  return (
    <CategoryBlogList
      categoryId={cat.id}
      categoryName={cat.name}
      categorySlug={slug}
      blogs={blogs}
      initialHasMore={hasMore}
      categories={categories}
    />
  );
}
