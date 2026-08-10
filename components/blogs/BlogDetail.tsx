"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Blog } from "./BlogList";
import { useEarlyAccess } from "@/components/layout/GoldLayout";
import { Plus } from "lucide-react";

type FaqItem = { question: string; answer: string };

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(Number(c)));
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function removeWpAccordionBlocks(html: string): string {
  let result = html;
  const marker = "wp-block-accordion";
  while (result.includes(marker)) {
    const markerIdx = result.indexOf(marker);
    // Find the opening <div that contains wp-block-accordion
    const divBefore = result.lastIndexOf("<div", markerIdx);
    if (divBefore === -1) break;
    // Walk forward counting div depth to find matching close
    let depth = 0;
    let i = divBefore;
    let end = -1;
    while (i < result.length) {
      if (result[i] === "<") {
        if (
          result.slice(i, i + 5) === "<div " ||
          result.slice(i, i + 4) === "<div>"
        ) {
          depth++;
          i += 4;
        } else if (result.slice(i, i + 6) === "</div>") {
          depth--;
          if (depth === 0) {
            end = i + 6;
            break;
          }
          i += 6;
        } else {
          i++;
        }
      } else {
        i++;
      }
    }
    if (end === -1) break;
    result = result.slice(0, divBefore) + result.slice(end);
  }
  return result;
}

function extractFaqs(html: string): { faqs: FaqItem[]; strippedHtml: string } {
  const faqs: FaqItem[] = [];
  let strippedHtml = html;

  // Parse wp-block-accordion-item blocks (question = toggle title, answer = panel)
  const itemRegex =
    /class="wp-block-accordion-item[^"]*"[\s\S]*?toggle-title">([\s\S]*?)<\/span>[\s\S]*?wp-block-accordion-panel[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  while ((m = itemRegex.exec(html)) !== null) {
    const question = decodeHtmlEntities(stripTags(m[1])).trim();
    const answer = decodeHtmlEntities(stripTags(m[2])).trim();
    if (question && answer && question.toLowerCase() !== "faq") {
      faqs.push({ question, answer });
    }
  }

  // Strip wp-block-accordion from rendered content
  strippedHtml = removeWpAccordionBlocks(strippedHtml).trim();

  return { faqs, strippedHtml };
}

function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  return (
    <div className="px-0 pt-2 pb-2">
      <span
        className="block text-[12px] lg:text-[18px] font-semibold text-[#00007F] uppercase tracking-widest mb-4"
        style={mona}
      >
        Frequently Asked Questions
      </span>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-[#ffecbf] last:border-b-0">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className="text-[15px] leading-[24px]"
                style={{
                  ...mona,
                  color: isOpen ? "#00007F" : "#111111",
                  fontWeight: isOpen ? 600 : 500,
                }}
              >
                {faq.question}
              </span>
              <Plus
                className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
                strokeWidth={2.2}
                style={{ color: "#B8922A" }}
              />
            </button>
            {isOpen && (
              <p
                className="text-[14px] leading-[1.75] text-[#3D3D3D] pb-5"
                style={mona}
              >
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    function measure() {
      const header = document.querySelector("header");
      if (header) setHeaderHeight(header.getBoundingClientRect().height);
    }
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[200] h-[3px] bg-transparent"
      style={{ top: headerHeight }}
    >
      <div className="h-full bg-[#00007F]" style={{ width: `${progress}%` }} />
    </div>
  );
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(`https://stoex.in/blogs/${slug}`);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className="text-[12px] font-semibold text-[#696A75] uppercase tracking-widest"
        style={mona}
      >
        Share
      </span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E0E0E0] hover:border-[#00007F] hover:bg-[#00007F] hover:text-white text-[#444] transition-all"
        aria-label="Share on Twitter"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E0E0E0] hover:border-[#00007F] hover:bg-[#00007F] hover:text-white text-[#444] transition-all"
        aria-label="Share on LinkedIn"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E0E0E0] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#444] transition-all"
        aria-label="Share on WhatsApp"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <button
        onClick={copyLink}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E0E0E0] hover:border-[#00007F] hover:bg-[#00007F] hover:text-white text-[#444] transition-all"
        aria-label="Copy link"
      >
        {copied ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
    </div>
  );
}

type TocItem = { id: string; text: string; level: 2 | 3 };

function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1]
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#\d+;/g, "")
      .trim();
    if (!text) continue;
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    items.push({ id, text, level: 2 });
  }
  return items;
}

function injectHeadingIds(html: string): string {
  return html.replace(
    /<h([23])([^>]*)>(.*?)<\/h[23]>/gi,
    (_m, level, attrs, inner) => {
      const text = inner
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&#\d+;/g, "")
        .trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
    },
  );
}

function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const { openModal } = useEarlyAccess();

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis.length > 0) setActiveId(vis[0].target.id);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="flex flex-col gap-1">
      <span
        className="block text-[12px] font-semibold text-[#00007F] uppercase tracking-widest mb-3 sticky top-0 py-1 z-10 bg-white"
        style={mona}
      >
        On this page
      </span>
      <nav className="flex flex-col">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(item.id);
              if (el) {
                const header = document.querySelector("header");
                const offset =
                  (header?.getBoundingClientRect().height ?? 64) + 12;
                const top =
                  el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className={[
              "text-[13px] leading-[1.65] py-1 transition-colors border-l-2 pl-3",
              activeId === item.id
                ? "border-[#00007F] text-[#00007F] font-semibold"
                : "border-[#E5E5E5] text-[#666] hover:text-[#111] hover:border-[#999]",
            ].join(" ")}
            style={mona}
          >
            {item.text}
          </a>
        ))}
      </nav>
      <button
        onClick={() =>
          openModal(
            undefined,
            "newsletter",
            "Join thousands of readers receiving the latest STOEX insights every week.",
            "Subscribe Now",
            "Subscribe to our Newsletter!",
            ["name", "phone", "company", "message"],
            "Thank you for Subscribing!",
          )
        }
        className="inline-block bg-[#00007F] text-[#fff] font-bold px-7 mt-4 py-3 rounded-full text-[14px] hover:bg-[#000066] transition-colors cursor-pointer"
      >
        Subscribe
      </button>
    </aside>
  );
}

function AuthorAvatar({
  author,
  size = 40,
}: {
  author: Blog["author"];
  size?: number;
}) {
  if (author.avatarUrl) {
    return (
      <Image
        src={author.avatarUrl}
        alt={author.name}
        width={size}
        height={size}
        className="rounded-full flex-shrink-0"
      />
    );
  }
  const initials = author.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div
      className="rounded-full bg-[#00007F] flex items-center justify-center text-white font-bold flex-shrink-0"
      style={{ ...sansation, width: size, height: size, fontSize: size * 0.35 }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function AuthorBlock({
  author,
  publishedAt,
  readingTime,
}: {
  author: Blog["author"];
  publishedAt: string;
  readingTime: number;
}) {
  function scrollToAuthor(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById("author-section");
    if (!el) return;
    const header = document.querySelector("header");
    const offset = (header?.getBoundingClientRect().height ?? 64) + 12;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={scrollToAuthor}
        className="flex-shrink-0 cursor-pointer"
        aria-label="Go to author"
      >
        <AuthorAvatar author={author} size={40} />
      </button>
      <div className="flex flex-col gap-0.5">
        <button
          onClick={scrollToAuthor}
          className="text-[14px] font-semibold text-[#0A0A0A] hover:text-[#00007F] transition-colors text-left cursor-pointer"
          style={mona}
        >
          {author.name}
        </button>
        <div
          className="flex items-center gap-2 text-[12px] text-[#696A75]"
          style={mona}
        >
          <span>{formatDate(publishedAt)}</span>
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetail({
  blog,
  otherBlogs,
}: {
  blog: Blog;
  otherBlogs: Blog[];
}) {
  const { openModal } = useEarlyAccess();
  const { faqs, strippedHtml } = extractFaqs(blog.content || "");
  const contentWithIds = injectHeadingIds(strippedHtml);
  const tocItems = extractToc(strippedHtml);
  const excerptRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  const featuredImageRef = useRef<HTMLDivElement>(null);
  const [sidebarOffset, setSidebarOffset] = useState(0);

  useEffect(() => {
    function measure() {
      if (!excerptRef.current || !articleRef.current) return;
      const articleTop =
        articleRef.current.getBoundingClientRect().top + window.scrollY;
      const excerptTop =
        excerptRef.current.getBoundingClientRect().top + window.scrollY;
      setSidebarOffset(excerptTop - articleTop);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [blog.slug]);

  return (
    <div className="max-w-[1400px] mx-auto">
      <ReadingProgressBar />
      <section className="py-8 lg:py-12">
        <div className="blog-layout w-full">
          {/* Left sidebar — TOC */}
          <div
            className="hidden min-[1100px]:block scrollbar-none"
            style={{
              position: "sticky",
              top: 125,
              maxHeight: "calc(100vh - 141px)",
              overflowY: "auto",
              alignSelf: "start",
              zIndex: 10,
              marginTop: sidebarOffset,
            }}
          >
            <div className="flex flex-col gap-1">
              <TableOfContents items={tocItems} />
            </div>
          </div>

          {/* Article */}
          <div className="min-w-0 px-2">
            <article
              id="blog-article"
              ref={articleRef}
              className="flex flex-col gap-6"
            >
              {/* Breadcrumb */}
              <nav
                className="flex items-center gap-2 text-[12px] text-[#696A75] min-w-0"
                style={mona}
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[#00007F] transition-colors flex-shrink-0"
                >
                  Home
                </Link>
                <span className="flex-shrink-0">/</span>
                <Link
                  href="/blogs"
                  className="hover:text-[#00007F] transition-colors flex-shrink-0"
                >
                  Blogs
                </Link>
                {blog.keyword && blog.categorySlug && (
                  <>
                    <span className="flex-shrink-0">/</span>
                    <Link
                      href={`/blogs/category/${blog.categorySlug}`}
                      className="text-[#00007F] font-medium hover:underline transition-colors flex-shrink-0"
                    >
                      {blog.keyword}
                    </Link>
                  </>
                )}
                {blog.keyword && !blog.categorySlug && (
                  <>
                    <span className="flex-shrink-0">/</span>
                    <span className="text-[#00007F] font-medium flex-shrink-0">
                      {blog.keyword}
                    </span>
                  </>
                )}
                <span className="flex-shrink-0">/</span>
                <span
                  className="text-[#00007F] font-medium truncate"
                  style={{ maxWidth: "220px" }}
                  title={blog.title}
                >
                  {blog.title}
                </span>
              </nav>

              {/* Category badge */}
              {blog.keyword && (
                <span
                  className="w-fit rounded-md bg-[#00007F] px-3 py-1 text-[12px] font-semibold text-white tracking-wide"
                  style={mona}
                >
                  {blog.keyword}
                </span>
              )}

              {/* Title */}
              <h1
                className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0A0A0A] leading-[1.2]"
                style={sansation}
              >
                {blog.title}
              </h1>

              {/* Author + date + reading time */}
              <AuthorBlock
                author={blog.author}
                publishedAt={blog.publishedAt}
                readingTime={blog.readingTime}
              />

              {/* Divider */}
              <div className="border-t border-[#E5E5E5]" />

              {/* Featured image + share */}
              {blog.featuredImageUrl && (
                <div
                  ref={featuredImageRef}
                  className="blog-featured-image rounded-xl overflow-hidden shadow-sm"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={blog.featuredImageUrl}
                    alt={blog.title}
                    width={750}
                    height={422}
                    sizes="(min-width: 1100px) 80vw, 100vw"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              )}
              <div className="blog-share-row flex justify-end">
                <ShareButtons title={blog.title} slug={blog.slug} />
              </div>

              {/* Excerpt */}
              {blog.excerpt && (
                <div
                  ref={excerptRef}
                  className="text-[16px] lg:text-[18px] text-[#444] leading-[1.7] border-l-4 border-[#C3A661] pl-4 bg-white rounded-r-lg py-3 pr-4"
                  style={mona}
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
              )}

              {/* Main content */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0A0A0A] prose-h2:text-[24px] prose-a:text-[#00007F] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0A0A0A] prose-img:rounded-xl prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* FAQ Accordion */}
              {faqs.length > 0 && <FaqAccordion faqs={faqs} />}

              {/* Bottom author */}
              <div
                id="author-section"
                className="border-t border-[#E5E5E5] pt-6 flex flex-col gap-6"
              >
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border border-[#F0F0F0]">
                  <AuthorAvatar author={blog.author} size={56} />
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[11px] font-semibold text-[#696A75] uppercase tracking-widest"
                      style={mona}
                    >
                      Written by
                    </span>
                    <span
                      className="text-[16px] font-bold text-[#0A0A0A]"
                      style={sansation}
                    >
                      {blog.author.name}
                    </span>
                    {blog.author.bio && (
                      <span
                        className="text-[13px] text-[#696A75] leading-[1.5]"
                        style={mona}
                      >
                        {blog.author.bio}
                      </span>
                    )}
                    {(blog.author.url ||
                      blog.author.twitter ||
                      blog.author.linkedin ||
                      blog.author.facebook ||
                      blog.author.instagram ||
                      blog.author.youtube) && (
                      <div className="mt-2 flex items-center gap-2 flex-wrap">
                        {/* {blog.author.url && (
                          <a href={blog.author.url} target="_blank" rel="noopener noreferrer" aria-label="Website"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#00007F] hover:text-[#00007F] transition-all">
                            <Globe size={13} />
                          </a>
                        )} */}
                        {blog.author.twitter && (
                          <a
                            href={blog.author.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X / Twitter"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#000] hover:text-[#000] transition-all"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                        )}
                        {blog.author.linkedin && (
                          <a
                            href={blog.author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {blog.author.facebook && (
                          <a
                            href={blog.author.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#1877F2] hover:text-[#1877F2] transition-all"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                        )}
                        {blog.author.instagram && (
                          <a
                            href={blog.author.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#E1306C] hover:text-[#E1306C] transition-all"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                          </a>
                        )}
                        {blog.author.youtube && (
                          <a
                            href={blog.author.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="flex items-center justify-center w-7 h-7 rounded-full border border-[#E0E0E0] text-[#555] hover:border-[#FF0000] hover:text-[#FF0000] transition-all"
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#00007F] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 items-center text-center">
                <h3
                  className="text-[20px] sm:text-[24px] font-bold text-white"
                  style={sansation}
                >
                  Stay Updated with STOEX Insights
                </h3>
                <p className="text-[14px] text-white/70 max-w-lg" style={mona}>
                  Get the latest insights on digital gold, trusteeship,
                  tokenization, and wealth infrastructure directly in your
                  inbox.
                </p>
                <button
                  onClick={() =>
                    openModal(
                      undefined,
                      "newsletter",
                      "Join thousands of readers receiving the latest STOEX insights every week.",
                      "Subscribe Now",
                      "Subscribe to our Newsletter!",
                      ["name", "phone", "company", "message"],
                      "Thank you for Subscribing!",
                    )
                  }
                  className="inline-block bg-white text-[#00007F] font-bold px-7 py-3 rounded-full text-[14px] hover:bg-[#f0f0ff] transition-colors cursor-pointer"
                  style={mona}
                >
                  Subscribe Now
                </button>
              </div>

              {/* Mobile/tablet related articles — only below xl */}
              <div className="min-[1100px]:hidden border-t border-[#E5E5E5] pt-6">
                <RelatedArticlesSidebar otherBlogs={otherBlogs} />
              </div>
            </article>
          </div>

          {/* Right sidebar — Related Articles */}
          <div
            className="hidden min-[1100px]:block scrollbar-none"
            style={{
              position: "sticky",
              top: 125,
              maxHeight: "calc(100vh - 141px)",
              overflowY: "auto",
              alignSelf: "start",
              zIndex: 10,
              marginTop: sidebarOffset,
            }}
          >
            <RelatedArticlesSidebar otherBlogs={otherBlogs} />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedArticlesSidebar({
  otherBlogs,
}: {
  otherBlogs: import("./BlogList").Blog[];
}) {
  if (!otherBlogs.length) return null;

  return (
    <aside className="flex flex-col gap-1">
      <span
        className="text-[12px] font-semibold text-[#00007F] uppercase tracking-widest mb-3 block sticky top-0 py-1 z-10 bg-white"
        style={mona}
      >
        Related Articles
      </span>
      <div className="flex flex-col">
        {otherBlogs.map((other, i) => (
          <Link
            key={other.id}
            href={`/blogs/${other.slug}`}
            className={`flex flex-col gap-3 py-3 hover:bg-[#f5f5f5] rounded-lg px-1 transition-colors ${i !== 0 ? "border-t border-[#EBEBEB]" : ""}`}
          >
            <div className="relative flex-shrink-0 w-full aspect-[16/9] rounded-md overflow-hidden">
              {other.featuredImageUrl ? (
                <Image
                  src={other.featuredImageUrl}
                  alt={other.title}
                  fill
                  sizes="(min-width: 1100px) 20vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1A4E] to-[#1a1a7f]" />
              )}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <p
                className="text-[15px] font-semibold text-[#0A0A0A] leading-[1.4] line-clamp-2"
                style={sansation}
              >
                {other.title}
              </p>
              <p className="text-[11px] text-[#888]" style={mona}>
                {other.readingTime} min Read ·{" "}
                {new Date(other.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/blogs"
        className="mt-3 block text-center text-[12px] font-semibold text-[#00007F] hover:underline"
        style={mona}
      >
        View all articles →
      </Link>
    </aside>
  );
}
