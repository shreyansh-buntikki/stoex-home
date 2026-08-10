import BlogList, { type Blog } from "./BlogList";
import { getBlogs, getCategories, type Category } from "@/lib/wordpress";

export default async function Blogs() {
  let blogs: Blog[] = [];
  let hasMore = false;
  let categories: Category[] = [];
  let error: string | null = null;

  try {
    ([{ blogs, hasMore }, categories] = await Promise.all([
      getBlogs(1, 13),
      getCategories(),
    ]));
  } catch {
    error = "Failed to load blogs. Please try again later.";
  }

  if (error) {
    return (
      <section className="bg-[#f8f6f6] py-8">
        <div className="container mx-auto px-6 text-center text-[#5B5B5B]">
          {error}
        </div>
      </section>
    );
  }

  return <BlogList blogs={blogs} initialHasMore={hasMore} categories={categories} />;
}