import Image from "next/image";
import type { CSSProperties } from "react";
import type { Blog } from "./BlogList";
import { BlogCard } from "./BlogList";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogDetail({
  blog,
  otherBlogs,
}: {
  blog: Blog;
  otherBlogs: Blog[];
}) {
  return (
    <section className="bg-[#f8f6f6] py-8 lg:py-12">
      <article className="mx-auto max-w-[800px] px-6 flex flex-col gap-6">
        {blog.keyword && (
          <span
            className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1 text-[14px] font-medium text-white"
            style={mona}
          >
            {blog.keyword}
          </span>
        )}

        <h1
          className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#0A0A0A] leading-[1.2]"
          style={sansation}
        >
          {blog.title}
        </h1>

        <p className="text-[14px] text-[#696A75]" style={mona}>
          {formatDate(blog.publishedAt)}
        </p>

        {blog.featuredImageUrl && (
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={blog.featuredImageUrl}
              alt={blog.title}
              width={800}
              height={450}
              sizes="(min-width: 800px) 800px, 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        <div
          className="blog prose prose-lg max-w-none text-[#3B3C4A] leading-[1.8]"
          style={sansation}
          dangerouslySetInnerHTML={{ __html: blog.content || "" }}
        />
      </article>

      {otherBlogs.length > 0 && (
        <div className="container mx-auto px-6 mt-12 lg:mt-16">
          <h2
            className="text-[36px] font-bold text-[#0A0A0A] mb-8"
            style={sansation}
          >
            Other Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBlogs.map((other) => (
              <BlogCard key={other.id} blog={other} showDate />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
