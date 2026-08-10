import type { Metadata } from "next";
import BlogDetail from "@/components/blogs/BlogDetail";
import BlogNotFound from "@/components/blogs/BlogNotFound";
import type { Blog } from "@/components/blogs/BlogList";
import { getBlogBySlugWithOthers } from "@/lib/wordpress";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBlogBySlugWithOthers(slug);
  if (!result) return { title: "Blog Not Found" };

  const { blog } = result;
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt || undefined,
    keywords: blog.keywords?.length ? blog.keywords : undefined,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt || undefined,
      images: blog.ogImageUrl
        ? [{ url: blog.ogImageUrl }]
        : blog.featuredImageUrl
          ? [{ url: blog.featuredImageUrl }]
          : undefined,
      type: "article",
      publishedTime: blog.publishedAt,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getBlogBySlugWithOthers(slug);
  if (!result) return <BlogNotFound />;

  return (
    <div className="w-full" style={{ background: "linear-gradient(to bottom, #FFEFCF 0px, #FFF8EC 250px, #FFFAF2 380px, #FFFFFF 550px)" }}>
      <BlogDetail blog={result.blog} otherBlogs={result.otherBlogs} />;
    </div>
  );
}
