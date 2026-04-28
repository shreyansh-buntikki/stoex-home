import BlogList, { type Blog } from "./BlogList";

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const data = await res.json();
  console.log("blogs API response keys:", Object.keys(data));
  return Array.isArray(data) ? data : data.blogs ?? data.data ?? [];
}

export default async function Blogs() {
  let blogs: Blog[] = [];
  let error: string | null = null;

  try {
    blogs = await getBlogs();
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

  return <BlogList blogs={blogs} />;
}
