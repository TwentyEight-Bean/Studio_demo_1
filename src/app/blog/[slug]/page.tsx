import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen px-6 md:px-10 py-16" style={{ backgroundColor: "#2C3939", color: "#EAE6D8" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] opacity-50 mb-3">{post.publishedAt}</p>
        <h1 className="text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          {post.title}
        </h1>
        <p className="opacity-80 mb-10">{post.description}</p>
        <div className="space-y-6 opacity-90">
          {post.content.map((section) => (
            <p key={section}>{section}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
