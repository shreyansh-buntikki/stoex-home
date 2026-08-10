import Link from "next/link";
import type { CSSProperties } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export default function BlogNotFound() {
  return (
    <section className="bg-[#f8f6f6] py-24 flex flex-col items-center justify-center text-center px-6">
      <h1
        className="text-[40px] sm:text-[56px] font-bold text-[#00007F]"
        style={sansation}
      >
        Blog Not Found
      </h1>
      <p
        className="mt-5 text-[16px] text-[#5B5B5B] max-w-md"
        style={mona}
      >
        This blog post does not exist or may have been removed.
      </p>
      <Link
        href="/blogs"
        className="mt-8 rounded-full bg-[#00007F] text-white font-semibold px-8 py-3 text-[14px] hover:bg-[#000066] transition"
        style={mona}
      >
        Back to Blogs
      </Link>
    </section>
  );
}
