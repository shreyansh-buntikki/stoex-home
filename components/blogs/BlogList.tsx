"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content?: string;
  excerpt: string | null;
  status: string;
  publishedAt: string;
  readingTime: number;
  keyword: string | null;
  order: number;
  featuredImageId: string | null;
  featuredImageUrl: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  keywords: string[];
  ogImageId: string | null;
  ogImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: {
    id: string;
    name: string;
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const BLOGS_PER_PAGE = 10;

function FeaturedBlog({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block">
      <div className="relative w-full rounded-xl overflow-hidden">
        {blog.featuredImageUrl ? (
          <Image
            src={blog.featuredImageUrl}
            alt={blog.title}
            width={1200}
            height={450}
            sizes="100vw"
            className="w-full h-auto object-cover object-center"
            priority
          />
        ) : (
          <div className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] bg-gradient-to-br from-[#0B1A4E] to-[#1a1a7f]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 p-6 sm:p-8 lg:p-10 flex flex-col gap-3 max-w-[1000px]">
          {blog.keyword && (
            <span
              className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1 text-[14px] font-medium text-white"
              style={mona}
            >
              {blog.keyword}
            </span>
          )}
          <h2
            className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white leading-[1.2]"
            style={sansation}
          >
            {blog.title}
          </h2>
          <p className="text-[14px] text-white/70" style={mona}>
            {formatDate(blog.publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function BlogCard({ blog, showDate = false }: { blog: Blog; showDate?: boolean }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block h-full">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow h-[380px] w-full mx-auto flex flex-col p-4 overflow-hidden">
        <div className="relative w-full h-[240px] rounded-xl overflow-hidden flex-shrink-0">
          {blog.featuredImageUrl ? (
            <Image
              src={blog.featuredImageUrl}
              alt={blog.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A4E] to-[#1a1a7f]" />
          )}
        </div>
        <div className="pt-5 flex-1 min-h-0 overflow-hidden">
          <h3
            className="text-[24px] font-bold text-[#0A0A0A] leading-[1.3] overflow-hidden text-ellipsis"
            style={{ ...sansation, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
          >
            {blog.title}
          </h3>
          {showDate && (
            <p className="mt-2 text-[14px] text-[#696A75]" style={mona}>
              {formatDate(blog.publishedAt)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  if (blogs.length === 0) {
    return (
      <section className="bg-[#f8f6f6] py-8">
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-[#00007F] text-[40px] sm:text-[56px] font-bold"
            style={sansation}
          >
            Blogs
          </h1>
          <p className="mt-6 text-[16px] text-[#5B5B5B]" style={mona}>
            No blogs published yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = blogs;
  const visibleBlogs = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  return (
    <section className="bg-[#f8f6f6] py-6 lg:py-8">
      <div className="container mx-auto px-6 flex flex-col gap-8 lg:gap-8">
        <h1
          className="text-[#00007F] text-[40px] sm:text-[56px] font-bold text-center"
          style={sansation}
        >
          Blogs
        </h1>

        <FeaturedBlog blog={featured} />

        {visibleBlogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + BLOGS_PER_PAGE)}
              className="rounded-full border border-[#00007F] px-8 py-3 text-[14px] font-semibold text-[#00007F] hover:bg-[#00007F] hover:text-white transition"
              style={mona}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
