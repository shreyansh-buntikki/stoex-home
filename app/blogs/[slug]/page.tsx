import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/blogs/BlogDetail";
import type { Blog } from "@/components/blogs/BlogList";

interface BlogResponse {
  blog: Blog;
  otherBlogs: Blog[];
}

async function getBlogBySlug(slug: string): Promise<BlogResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.data?.blog) return null;
    return {
      blog: json.data.blog,
      otherBlogs: json.data.otherBlogs ?? [],
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);
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
  const result = await getBlogBySlug(slug);
  if (!result) notFound();

  return <BlogDetail blog={result.blog} otherBlogs={result.otherBlogs} />;
}
