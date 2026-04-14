"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Link2, Search, MoreHorizontal, Image, MapPin, X, Check } from "lucide-react";
import { projects } from "../data/projects";

export function AdminDashboard() {
  const router = useRouter();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    coupleNames: "",
    date: "",
    location: "",
  });

  const handleCopyLink = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/gallery/${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredProjects = projects.filter((p) =>
    p.coupleNames.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#2C3939", fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#1F2828", borderColor: "rgba(234,230,216,0.08)" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-4 md:py-5 flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 self-start">
            <div
              className="w-px h-8"
              style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }}
            />
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#EAE6D8",
                fontSize: "1.35rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
              }}
            >
              IVY BRIDAL
            </h1>
            <div
              className="w-px h-8"
              style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }}
            />
          </div>

          {/* Right side */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-6">
            <button
              onClick={() => router.push("/admin")}
              className="px-4 py-3 transition-all duration-300 hover:opacity-80"
              style={{
                border: "1px solid rgba(234,230,216,0.25)",
                color: "#EAE6D8",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              ADMIN DASHBOARD
            </button>

            {/* Search */}
            <div
              className="flex items-center gap-3 px-4 py-2 rounded-sm w-full md:w-auto"
              style={{ backgroundColor: "rgba(234,230,216,0.05)", border: "1px solid rgba(234,230,216,0.1)" }}
            >
              <Search size={14} style={{ color: "#EAE6D8", opacity: 0.4 }} />
              <input
                type="text"
                placeholder="TÌM KIẾM DỰ ÁN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#EAE6D8",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  width: "100%",
                  maxWidth: "180px",
                }}
              />
            </div>

            {/* Create button */}
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#EAE6D8",
                color: "#1F2828",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              <Plus size={14} />
              TẠO ALBUM MỚI
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 md:px-10 py-10 md:py-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p
              className="mb-3"
              style={{
                color: "#EAE6D8",
                opacity: 0.35,
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                fontWeight: 400,
              }}
            >
              STUDIO / WORKSPACE
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#EAE6D8",
                fontSize: "clamp(1.8rem, 6vw, 2.2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Album Dự Án
            </h2>
          </div>
          <div className="flex items-center gap-2" style={{ color: "#EAE6D8", opacity: 0.4 }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em" }}>
              {filteredProjects.length} DỰ ÁN
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }} />
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 md:mb-16"
          style={{ backgroundColor: "rgba(234,230,216,0.08)" }}
        >
          {[
            { label: "TỔNG DỰ ÁN", value: "06" },
            { label: "TỔNG ẢNH", value: "2,015" },
            { label: "NĂM HOẠT ĐỘNG", value: "2019" },
            { label: "KHÁCH HÀNG HÀI LÒNG", value: "100%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 md:px-8 py-6 md:py-8"
              style={{ backgroundColor: "#1F2828" }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#EAE6D8",
                  fontSize: "clamp(1.3rem, 4.5vw, 1.8rem)",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "#EAE6D8",
                  opacity: 0.35,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              copiedId={copiedId}
              onCopyLink={handleCopyLink}
              onClick={() => router.push(`/gallery/${project.id}`)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#EAE6D8",
                opacity: 0.3,
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              Không tìm thấy dự án nào
            </p>
          </div>
        )}
      </main>

      {/* Create Album Modal */}
      {showCreateModal && (
        <CreateAlbumModal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  copiedId: string | null;
  onCopyLink: (e: React.MouseEvent, id: string) => void;
  onClick: () => void;
}

function ProjectCard({ project, copiedId, onCopyLink, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      style={{ backgroundColor: "#1F2828" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={project.coverImage}
          alt={project.coupleNames}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,40,40,0) 40%, rgba(31,40,40,0.85) 100%)",
            opacity: hovered ? 1 : 0.7,
          }}
        />

        {/* Hover Actions */}
        <div
          className="absolute top-4 right-4 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full"
            style={{ backgroundColor: "rgba(31,40,40,0.8)", color: "#EAE6D8" }}
          >
            <MoreHorizontal size={14} />
          </button>
        </div>

        {/* Image count badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <Image size={11} style={{ color: "#EAE6D8", opacity: 0.7 }} />
          <span
            style={{
              color: "#EAE6D8",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            {project.imageCount} ẢNH
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="px-4 md:px-6 py-4 md:py-5 flex items-start justify-between gap-3">
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              fontSize: "1.2rem",
              fontWeight: 400,
              marginBottom: "0.35rem",
              lineHeight: 1.3,
            }}
          >
            {project.coupleNames}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <p
              style={{
                color: "#EAE6D8",
                opacity: 0.4,
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              {project.date}
            </p>
            <div className="flex items-center gap-1">
              <MapPin size={9} style={{ color: "#EAE6D8", opacity: 0.3 }} />
              <p
                style={{
                  color: "#EAE6D8",
                  opacity: 0.3,
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                }}
              >
                {project.location}
              </p>
            </div>
          </div>
        </div>

        {/* Copy Link */}
        <button
          onClick={(e) => onCopyLink(e, project.id)}
          className="p-2 transition-all duration-200 hover:opacity-100"
          style={{
            color: copiedId === project.id ? "#EAE6D8" : "#EAE6D8",
            opacity: copiedId === project.id ? 1 : 0.3,
          }}
          title="Sao chép liên kết"
        >
          {copiedId === project.id ? <Check size={14} /> : <Link2 size={14} />}
        </button>
      </div>

      {/* Bottom border accent */}
      <div
        className="h-px mx-4 md:mx-6 transition-all duration-500"
        style={{
          backgroundColor: "#EAE6D8",
          opacity: hovered ? 0.15 : 0,
        }}
      />
    </div>
  );
}

interface CreateAlbumModalProps {
  formData: { coupleNames: string; date: string; location: string };
  setFormData: React.Dispatch<React.SetStateAction<{ coupleNames: string; date: string; location: string }>>;
  onClose: () => void;
}

function CreateAlbumModal({ formData, setFormData, onClose }: CreateAlbumModalProps) {
  const [created, setCreated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCreated(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg mx-4 p-6 md:p-12"
        style={{ backgroundColor: "#1F2828", border: "1px solid rgba(234,230,216,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 transition-opacity duration-200 hover:opacity-60"
          style={{ color: "#EAE6D8", opacity: 0.4 }}
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="mb-10">
          <p
            className="mb-2"
            style={{
              color: "#EAE6D8",
              opacity: 0.35,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
            }}
          >
            STUDIO / TẠO MỚI
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              fontSize: "1.8rem",
              fontWeight: 400,
            }}
          >
            Album Mới
          </h2>
        </div>

        {created ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ border: "1px solid rgba(234,230,216,0.3)" }}
            >
              <Check size={20} style={{ color: "#EAE6D8" }} />
            </div>
            <p
              style={{
                color: "#EAE6D8",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                opacity: 0.7,
              }}
            >
              ALBUM ĐÃ ĐƯỢC TẠO
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            {[
              { label: "TÊN CẶP ĐÔI", key: "coupleNames", placeholder: "vd: Minh & Lan" },
              { label: "NGÀY CƯỚI", key: "date", placeholder: "vd: 15/06/2025" },
              { label: "ĐỊA ĐIỂM", key: "location", placeholder: "vd: Hà Nội" },
            ].map((field) => (
              <div key={field.key}>
                <label
                  style={{
                    display: "block",
                    color: "#EAE6D8",
                    opacity: 0.4,
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    marginBottom: "0.6rem",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(234,230,216,0.15)",
                    outline: "none",
                    color: "#EAE6D8",
                    fontSize: "0.9rem",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    padding: "0.5rem 0 0.8rem 0",
                    caretColor: "#EAE6D8",
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 py-4 transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#EAE6D8",
                color: "#1F2828",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              TẠO ALBUM
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
