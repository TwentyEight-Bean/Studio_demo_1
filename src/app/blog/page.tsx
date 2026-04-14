import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog cưới & kinh nghiệm chụp ảnh",
  description:
    "Kiến thức chụp ảnh cưới cao cấp: concept, địa điểm, ngân sách và kinh nghiệm chuẩn bị.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 3600;

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-16" style={{ backgroundColor: "#2C3939", color: "#EAE6D8" }}>
      <div className="max-w-4xl mx-auto">
        <p className="mb-2 text-xs tracking-[0.35em] opacity-50">SEO CONTENT HUB</p>
        <h1 className="text-4xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Bài viết nổi bật
        </h1>
        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border transition-opacity hover:opacity-90"
              style={{ borderColor: "rgba(234,230,216,0.2)", backgroundColor: "#1F2828" }}
            >
              <p className="text-xs tracking-[0.2em] opacity-50 mb-2">{post.publishedAt}</p>
              <h2 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {post.title}
              </h2>
              <p className="opacity-80">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
