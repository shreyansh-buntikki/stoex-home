"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCard, type Blog } from "./BlogList";
import type { Category } from "@/lib/wordpress";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function CategoryBlogList({
  categoryId,
  categoryName,
  categorySlug,
  blogs: initialBlogs,
  initialHasMore,
  categories = [],
}: {
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  blogs: Blog[];
  initialHasMore: boolean;
  categories?: Category[];
}) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/category/${categorySlug}?page=${page}`);
      const data = await res.json();
      setBlogs((prev) => [...prev, ...data.blogs]);
      setHasMore(data.hasMore);
      setPage((p) => p + 1);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#f8f6f6] py-6 lg:py-8 min-h-screen">
      <div className="container mx-auto px-6 flex flex-col gap-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#696A75]" style={mona}>
          <Link href="/" className="hover:text-[#00007F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-[#00007F] transition-colors">Blogs</Link>
          <span>/</span>
          <span className="text-[#00007F] font-medium">{categoryName}</span>
        </nav>

        {categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <Link
              href="/blogs"
              className="flex-shrink-0 flex items-center gap-1.5 rounded-full bg-white border border-[#E5E5E5] text-[#333] hover:border-[#00007F] hover:text-[#00007F] px-4 py-2 text-[12px] font-semibold transition-colors"
              style={mona}
            >
              All
            </Link>
            {categories.map((cat) => {
              const isActive = cat.slug === categorySlug;
              return (
                <Link
                  key={cat.id}
                  href={`/blogs/category/${cat.slug}`}
                  className={`flex-shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-semibold transition-colors ${
                    isActive
                      ? "bg-[#00007F] text-white"
                      : "bg-white border border-[#E5E5E5] text-[#333] hover:border-[#00007F] hover:text-[#00007F]"
                  }`}
                  style={mona}
                >
                  {cat.name}
                  <span className={`rounded-full text-[10px] font-bold px-1.5 py-0.5 leading-none min-w-[18px] text-center ${
                    isActive ? "bg-white/20 text-white" : "bg-[#F0F0F0] text-[#666]"
                  }`}>
                    {cat.count}
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-[#00007F] text-[32px] sm:text-[48px] font-bold"
            style={sansation}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {categoryName}
          </motion.h1>
          <p className="text-[14px] text-[#696A75]" style={mona}>
            {blogs.length > 0
              ? `${blogs.length} article${blogs.length !== 1 ? "s" : ""} in this category`
              : "No articles in this category yet."}
          </p>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} showDate />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#5B5B5B] py-16" style={mona}>
            No posts found.{" "}
            <Link href="/blogs" className="text-[#00007F] underline">
              Back to Blogs
            </Link>
          </div>
        )}

        {hasMore && (
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={loadMore}
              disabled={loading}
              className="rounded-full border border-[#00007F] px-8 py-3 text-[14px] font-semibold text-[#00007F] hover:bg-[#00007F] hover:text-white transition disabled:opacity-50"
              style={mona}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
