"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";
import type { Category } from "@/lib/wordpress";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

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
  categoryId: number | null;
  categorySlug: string | null;
  sticky: boolean;
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
    avatarUrl: string | null;
    bio: string | null;
    url: string | null;
    twitter: string | null;
    linkedin: string | null;
    facebook: string | null;
    instagram: string | null;
    youtube: string | null;
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function decodeEntities(str: string): string {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;/gi, " ");
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function FeaturedBlog({ blog }: { blog: Blog }) {
  const [copied, setCopied] = useState(false);
  const excerpt = blog.excerpt ? decodeEntities(stripHtml(blog.excerpt)) : blog.metaDescription ?? "";
  const shortExcerpt = excerpt;
  const pageUrl = `https://stoex.in/blogs/${blog.slug}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(pageUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(blog.title + " " + pageUrl)}`;

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex flex-col sm:flex-row sm:items-center gap-0 rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white"
    >
      {/* Image — left */}
      <Link href={`/blogs/${blog.slug}`} className="sm:w-[45%] flex-shrink-0 block overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          {blog.featuredImageUrl ? (
            <Image
              src={blog.featuredImageUrl}
              alt={blog.title}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="p-3 rounded-3xl object-cover object-center"
              priority
            />
          ) : (
            <div className="absolute inset-0 m-3 rounded-3xl bg-gradient-to-br from-[#0B1A4E] to-[#1a1a7f]" />
          )}
        </div>
      </Link>

      {/* Right — meta + title + excerpt + share */}
      <div className="flex-1 flex flex-col justify-center gap-5 p-6 sm:p-8">
        {/* Category · read time · date */}
        <div className="flex items-center gap-2 flex-wrap text-[12px] text-[#696A75]" style={mona}>
          {blog.keyword && (
            <span className="rounded-full bg-[#FFF0EB] text-[#E05C2A] font-semibold px-3 py-0.5 text-[12px]">
              {blog.keyword}
            </span>
          )}
          <span className="rounded-full bg-[#EBF0FF] text-[#00007F] font-semibold px-3 py-0.5 text-[12px] flex items-center gap-1">
            <Clock size={11} strokeWidth={2.5} />
            {blog.readingTime} min Read
          </span>
          <span className="rounded-full bg-[#EBF0FF] text-[#00007F] font-semibold px-3 py-0.5 text-[12px] flex items-center gap-1">
            <CalendarDays size={11} strokeWidth={2.5} />
            {formatDate(blog.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blogs/${blog.slug}`}>
          <h2
            className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold text-[#0A0A0A] leading-[1.25] hover:text-[#00007F] transition-colors"
            style={sansation}
          >
            {blog.title}
          </h2>
        </Link>

        {/* Excerpt */}
        {shortExcerpt && (
          <p className="text-[13px] sm:text-[14px] text-[#555] leading-[1.65] line-clamp-2" style={mona}>
            {shortExcerpt}
          </p>
        )}

        {/* Social share */}
        <div className="flex items-center gap-3 mt-1">
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"
            className="text-[#888] hover:text-[#0A0A0A] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"
            className="text-[#888] hover:text-[#25D366] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
            className="text-[#888] hover:text-[#0077B5] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <button onClick={copyLink} aria-label="Copy link"
            className="text-[#888] hover:text-[#0A0A0A] transition-colors">
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogCard({
  blog,
  showDate = false,
  index = 0,
}: {
  blog: Blog;
  showDate?: boolean;
  index?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link href={`/blogs/${blog.slug}`} className="block h-full">
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full mx-auto flex flex-col p-4 overflow-hidden h-full">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden flex-shrink-0">
            {blog.featuredImageUrl ? (
              <Image
                src={blog.featuredImageUrl}
                alt={blog.title}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 65vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A4E] to-[#1a1a7f]" />
            )}
          </div>
          <div className="pt-3 flex flex-col gap-1 flex-1">
            {blog.keyword && (
              <span
                className="w-fit text-[10px] font-semibold text-[#00007F] uppercase tracking-wider"
                style={mona}
              >
                {blog.keyword}
              </span>
            )}
            <h3
              className="text-[15px] lg:text-[20px] font-bold text-[#0A0A0A] leading-[1.3]"
              style={{
                ...sansation,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordBreak: "break-word",
              }}
            >
              {blog.title}
            </h3>
            {blog.excerpt && (
              <p
                className="text-[11px] lg:text-[13px] text-[#696A75] leading-[1.4]"
                style={{
                  ...mona,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {decodeEntities(stripHtml(blog.excerpt))}
              </p>
            )}
            <div className="mt-auto pt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {blog.author.avatarUrl ? (
                  <Image
                    src={blog.author.avatarUrl}
                    alt={blog.author.name}
                    width={24}
                    height={24}
                    className="rounded-full flex-shrink-0"
                  />
                ) : (
                  <div
                    className="w-6 h-6 rounded-full bg-[#00007F] flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                    style={sansation}
                    aria-hidden="true"
                  >
                    {blog.author.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                )}
                <span className="text-[11px] text-[#696A75]" style={mona}>
                  {blog.author.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#696A75]" style={mona}>
                {showDate && <span>{formatDate(blog.publishedAt)}</span>}
                {showDate && <span>·</span>}
                <span>{blog.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function pickFeatured(blogs: Blog[]): { featured: Blog; rest: Blog[] } {
  if (blogs.length === 0) return { featured: blogs[0], rest: [] };
  const idx = blogs.findIndex((b) => b.sticky);
  const featuredIdx = idx >= 0 ? idx : 0;
  return {
    featured: blogs[featuredIdx],
    rest: blogs.filter((_, i) => i !== featuredIdx),
  };
}

export default function BlogList({
  blogs: initialBlogs,
  initialHasMore,
  categories = [],
}: {
  blogs: Blog[];
  initialHasMore: boolean;
  categories?: Category[];
}) {
  const { featured, rest: initialRest } = pickFeatured(initialBlogs);
  const [rest, setRest] = useState<Blog[]>(initialRest);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  if (initialBlogs.length === 0) {
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

  async function loadMore() {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?page=${page}`);
      const data = await res.json();
      setRest((prev: Blog[]) => [...prev, ...data.blogs]);
      setHasMore(data.hasMore);
      setPage((p) => p + 1);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#f8f6f6] py-6 lg:py-8">
      <div className="container mx-auto px-6 flex flex-col gap-8 lg:gap-8">
        <motion.h1
          className="text-[#00007F] text-[36px] sm:text-[56px] font-bold text-center"
          style={sansation}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Blogs
        </motion.h1>

        {categories.length > 0 && (
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <Link
                href="/blogs"
                className="flex-shrink-0 flex items-center gap-1.5 rounded-full bg-[#00007F] text-white px-4 py-2 text-[12px] font-semibold transition-colors"
                style={mona}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blogs/category/${cat.slug}`}
                  className="flex-shrink-0 flex items-center gap-1.5 rounded-full bg-white border border-[#E5E5E5] text-[#333] hover:border-[#00007F] hover:text-[#00007F] px-4 py-2 text-[12px] font-semibold transition-colors"
                  style={mona}
                >
                  {cat.name}
                  <span className="rounded-full bg-[#F0F0F0] text-[#666] text-[10px] font-bold px-1.5 py-0.5 leading-none min-w-[18px] text-center">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <FeaturedBlog blog={featured} />

        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
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
