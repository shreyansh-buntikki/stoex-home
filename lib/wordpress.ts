// lib/wordpress.ts

import { Blog } from "@/components/blogs/BlogList";

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// const WP_API =
//   process.env.WORDPRESS_API_URL ??
//   "https://public-api.wordpress.com/wp/v2/sites/secretlymaker70795c8c6f-fuspi.wordpress.com";

const WP_API =
  process.env.WORDPRESS_API_URL ||
  "https://public-api.wordpress.com/wp/v2/sites/secretlymaker70795c8c6f-fuspi.wordpress.com";
console.log({ WP_API });

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(str: string): string {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8230;/g, "…")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;/gi, " ");
}

function cleanExcerpt(html: string): string {
  // Remove WordPress "[…]" / "[&#8230;]" read-more truncation
  return html
    .replace(/\[&[^;]+;?\]/g, "")
    .replace(/\[…\]/g, "")
    .replace(/\[\.\.\.\]/g, "");
}

function proxyContentImages(html: string): string {
  return html
    .replace(
      /\bsrc="(https?:\/\/stoex\.in\/wp-content\/[^"]+)"/g,
      (_m, url) =>
        `src="/_next/image?url=${encodeURIComponent(url)}&w=828&q=75"`,
    )
    .replace(
      /\bsrcset="([^"]*)"/g,
      (_m, srcset: string) =>
        `srcset="${srcset.replace(
          /https?:\/\/stoex\.in\/wp-content\/[^\s,]+/g,
          (u) => `/_next/image?url=${encodeURIComponent(u)}&w=828&q=75`,
        )}"`,
    );
}

function mapWpPostToBlog(post: any): Blog {
  const categories: { id: number; name: string; slug: string }[] =
    post._embedded?.["wp:term"]?.[0] ?? [];
  const primaryCategory =
    categories.find((c) => c.slug !== "uncategorized") ?? null;

  const rawExcerpt = post.excerpt?.rendered
    ? cleanExcerpt(post.excerpt.rendered)
    : null;

  return {
    id: String(post.id),
    title: decodeEntities(post.title?.rendered ?? ""),
    slug: post.slug,
    categoryId: primaryCategory?.id ?? null,
    categorySlug: primaryCategory?.slug ?? null,
    content: post.content?.rendered
      ? proxyContentImages(post.content.rendered)
      : "",
    excerpt: rawExcerpt ? proxyContentImages(rawExcerpt) : null,
    status: post.status,
    publishedAt: post.date,
    readingTime:
      post.reading_time_minutes ??
      Math.max(
        1,
        Math.round(
          (post.content?.rendered ?? "")
            .replace(/<[^>]*>/g, "")
            .trim()
            .split(/\s+/)
            .filter(Boolean).length / 200,
        ),
      ),
    keyword: post.seo?.focus_keyword ?? primaryCategory?.name ?? null,
    sticky: post.sticky ?? false,
    order: 0,
    featuredImageId: null,
    featuredImageUrl:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    metaTitle: post.seo?.title ?? null,
    metaDescription:
      post.seo?.description ?? (rawExcerpt ? stripHtml(rawExcerpt) : null),
    keywords: post.seo?.focus_keyword
      ? post.seo.focus_keyword.split(",").map((k: string) => k.trim())
      : primaryCategory
        ? [primaryCategory.name]
        : [],
    ogImageId: null,
    ogImageUrl: post.seo?.og_image ?? null,
    createdAt: post.date,
    updatedAt: post.modified,
    authorId: String(post.author),
    author: {
      id: String(post.author),
      name: post._embedded?.author?.[0]?.name ?? "Unknown",
      avatarUrl: post._embedded?.author?.[0]?.avatar_urls?.["96"] ?? null,
      bio: post._embedded?.author?.[0]?.description ?? null,
      url: post._embedded?.author?.[0]?.url || null,
      twitter: post._embedded?.author?.[0]?.meta?.twitter || post._embedded?.author?.[0]?.twitter || null,
      linkedin: post._embedded?.author?.[0]?.meta?.linkedin || post._embedded?.author?.[0]?.linkedin || null,
      facebook: post._embedded?.author?.[0]?.meta?.facebook || post._embedded?.author?.[0]?.facebook || null,
      instagram: post._embedded?.author?.[0]?.meta?.instagram || post._embedded?.author?.[0]?.instagram || null,
      youtube: post._embedded?.author?.[0]?.meta?.youtube || post._embedded?.author?.[0]?.youtube || null,
    },
  };
}

export async function getBlogs(
  page = 1,
  perPage = 12,
): Promise<{ blogs: Blog[]; hasMore: boolean }> {
  if (page === 1) {
    const [postsRes, stickyRes] = await Promise.all([
      fetch(
        `${WP_API}/posts?_embed&status=publish&per_page=${perPage}&page=1`,
        {
          next: { revalidate: 60 },
        },
      ),
      fetch(`${WP_API}/posts?_embed&status=publish&sticky=true&per_page=1`, {
        next: { revalidate: 60 },
      }),
    ]);
    if (!postsRes.ok) throw new Error("Failed to fetch blogs from WordPress");
    const totalPages = Number(postsRes.headers.get("X-WP-TotalPages") ?? "1");
    const posts: any[] = await postsRes.json();
    const stickyPosts: any[] = stickyRes.ok ? await stickyRes.json() : [];
    const stickyPost = stickyPosts[0] ?? null;

    let merged = posts;
    if (stickyPost && !posts.some((p) => p.id === stickyPost.id)) {
      merged = [stickyPost, ...posts];
    }

    return { blogs: merged.map(mapWpPostToBlog), hasMore: 1 < totalPages };
  }

  const res = await fetch(
    `${WP_API}/posts?_embed&status=publish&per_page=${perPage}&page=${page}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch blogs from WordPress");
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
  const posts = await res.json();
  return { blogs: posts.map(mapWpPostToBlog), hasMore: page < totalPages };
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const res = await fetch(
    `${WP_API}/posts?slug=${slug}&_embed&status=publish`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) return null;
  const posts = await res.json();
  if (!posts.length) return null;
  return mapWpPostToBlog(posts[0]);
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${WP_API}/categories?per_page=100&hide_empty=true`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const cats: any[] = await res.json();
  return cats
    .filter((c) => c.slug !== "uncategorized")
    .map((c) => ({ id: c.id, name: c.name, slug: c.slug, count: c.count }));
}

export async function getBlogsByCategory(
  categoryId: number,
  page = 1,
  perPage = 12,
): Promise<{ blogs: Blog[]; hasMore: boolean }> {
  const res = await fetch(
    `${WP_API}/posts?_embed&status=publish&categories=${categoryId}&per_page=${perPage}&page=${page}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch blogs by category");
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
  const posts = await res.json();
  return { blogs: posts.map(mapWpPostToBlog), hasMore: page < totalPages };
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_fields=slug&status=publish`,
    { cache: "no-store" },
  );
  console.log({ res });
  if (!res.ok) return [];
  const posts = await res.json();
  return posts.map((p: any) => p.slug);
}

export async function getBlogBySlugWithOthers(
  slug: string,
): Promise<{ blog: Blog; otherBlogs: Blog[] } | null> {
  try {
    const postRes = await fetch(
      `${WP_API}/posts?slug=${slug}&_embed&status=publish`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!postRes.ok) return null;
    const posts = await postRes.json();
    if (!posts.length) return null;

    const blog = mapWpPostToBlog(posts[0]);
    const categoryId = blog.categoryId;

    const [sameCatRes, latestRes] = await Promise.all([
      categoryId
        ? fetch(
            `${WP_API}/posts?_embed&status=publish&categories=${categoryId}&per_page=4`,
            {
              next: { revalidate: 60 },
            },
          )
        : Promise.resolve(null),
      fetch(`${WP_API}/posts?_embed&status=publish&per_page=4`, {
        next: { revalidate: 60 },
      }),
    ]);

    const sameCatPosts: Blog[] = sameCatRes?.ok
      ? (await sameCatRes.json())
          .map(mapWpPostToBlog)
          .filter((b: Blog) => b.slug !== slug)
      : [];

    const latestPosts: Blog[] = latestRes.ok
      ? (await latestRes.json())
          .map(mapWpPostToBlog)
          .filter((b: Blog) => b.slug !== slug)
      : [];

    const seen = new Set<string>();
    const otherBlogs: Blog[] = [];
    for (const b of [...sameCatPosts, ...latestPosts]) {
      if (seen.has(b.slug)) continue;
      seen.add(b.slug);
      otherBlogs.push(b);
      if (otherBlogs.length === 3) break;
    }

    return { blog, otherBlogs };
  } catch {
    return null;
  }
}
