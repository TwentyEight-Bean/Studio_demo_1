import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientGallery } from "@/app/components/ClientGallery";
import { projects } from "@/app/data/projects";

interface GalleryPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Album không tồn tại",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.coupleNames} - Album cưới`,
    description: `Album cưới ${project.coupleNames} tại ${project.location}, tuyển chọn khoảnh khắc giàu cảm xúc bởi Ivy Bridal Studio.`,
    alternates: {
      canonical: `/gallery/${project.id}`,
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { id } = await params;
  const exists = projects.some((item) => item.id === id);

  if (!exists) {
    notFound();
  }

  return <ClientGallery projectId={id} />;
}
