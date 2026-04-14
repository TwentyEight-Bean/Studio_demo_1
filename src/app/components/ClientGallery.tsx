"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Download, X, ChevronLeft, ChevronRight, ArrowLeft, ZoomIn } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projects, galleryImages } from "../data/projects";
import { DEFAULT_ADMIN_PASSWORD, loadAlbumAccessConfig } from "@/lib/albumAccess";

interface ClientGalleryProps {
  projectId: string;
}

export function ClientGallery({ projectId }: ClientGalleryProps) {
  const router = useRouter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const project = projects.find((p) => p.id === projectId) ?? projects[0];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const checkPassword = () => {
    const config = loadAlbumAccessConfig();
    const expectedPassword =
      config.albumPasswords[project.id]?.trim() || config.adminPassword || DEFAULT_ADMIN_PASSWORD;

    if (passwordInput === expectedPassword) {
      setAccessGranted(true);
      setPasswordError("");
      return;
    }

    setPasswordError("Mật khẩu không chính xác. Vui lòng thử lại.");
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#2C3939", color: "#EAE6D8" }}>
        <div
          className="w-full max-w-md p-6 md:p-8"
          style={{ backgroundColor: "#1F2828", border: "1px solid rgba(234,230,216,0.15)" }}
        >
          <p className="mb-2 opacity-45" style={{ fontSize: "0.62rem", letterSpacing: "0.24em" }}>
            ALBUM PROTECTION
          </p>
          <h1 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", fontWeight: 400 }}>
            {project.coupleNames}
          </h1>
          <p className="mb-4 opacity-75" style={{ fontSize: "0.78rem", letterSpacing: "0.08em" }}>
            Album này yêu cầu mật khẩu do ADMIN thiết lập.
          </p>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkPassword();
            }}
            placeholder="Nhập mật khẩu album"
            className="w-full px-4 py-3 mb-3"
            style={{
              backgroundColor: "rgba(234,230,216,0.05)",
              border: "1px solid rgba(234,230,216,0.2)",
              outline: "none",
            }}
          />
          {passwordError && <p className="mb-3 text-sm" style={{ color: "#fda4af" }}>{passwordError}</p>}
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/")}
              className="px-4 py-3"
              style={{
                border: "1px solid rgba(234,230,216,0.25)",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
              }}
            >
              QUAY LẠI
            </button>
            <button
              onClick={checkPassword}
              className="px-5 py-3"
              style={{
                backgroundColor: "#EAE6D8",
                color: "#1F2828",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                fontWeight: 500,
              }}
            >
              TRUY CẬP ALBUM
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#2C3939", fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden h-[70vh] md:h-[80vh]">
        {/* Background Image */}
        <img
          src={project.coverImage}
          alt={project.coupleNames}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: heroLoaded ? 1 : 0 }}
          onLoad={() => setHeroLoaded(true)}
        />

        {/* Deep Cinematic Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,40,40,0.3) 0%, rgba(31,40,40,0.1) 35%, rgba(31,40,40,0.55) 75%, rgba(44,57,57,1) 100%)",
          }}
        />

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-5 left-4 md:top-8 md:left-8 flex items-center gap-2 md:gap-3 transition-opacity duration-200 hover:opacity-60 z-10"
          style={{ color: "#EAE6D8" }}
        >
          <ArrowLeft size={16} />
          <span
            className="hidden sm:inline"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
            }}
          >
            QUAY LẠI
          </span>
        </button>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <p
            className="mb-4"
            style={{
              color: "#EAE6D8",
              opacity: 0.5,
              fontSize: "0.62rem",
              letterSpacing: "0.4em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            IVY BRIDAL STUDIO
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              fontSize: "clamp(2.1rem, 9vw, 7rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              marginBottom: "1.5rem",
            }}
          >
            {project.coupleNames}
          </h1>

          <div
            className="flex items-center gap-2 md:gap-4"
            style={{ color: "#EAE6D8", opacity: 0.55 }}
          >
            <div className="h-px w-8 md:w-12" style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }} />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
              }}
            >
              {project.date}
            </span>
            <div className="h-px w-8 md:w-12" style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }} />
          </div>

          <p
            className="mt-4"
            style={{
              color: "#EAE6D8",
              opacity: 0.35,
              fontSize: "0.62rem",
              letterSpacing: "0.25em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            {project.location} &nbsp;·&nbsp; {project.imageCount} ẢNH
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            style={{
              color: "#EAE6D8",
              opacity: 0.3,
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            CUỘN ĐỂ XEM
          </span>
          <div
            className="w-px"
            style={{
              height: "40px",
              background: "linear-gradient(to bottom, rgba(234,230,216,0.4), rgba(234,230,216,0))",
            }}
          />
        </div>
      </section>

      {/* STICKY ACTION BAR */}
      <div
        className="sticky top-0 z-30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 md:px-10 py-3 md:py-4"
        style={{
          backgroundColor: "rgba(31,40,40,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(234,230,216,0.07)",
        }}
      >
        <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto overflow-hidden">
          <div className="w-px h-5" style={{ backgroundColor: "#EAE6D8", opacity: 0.3 }} />
          <span
            className="truncate"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              fontSize: "0.95rem",
              fontWeight: 400,
              letterSpacing: "0.08em",
            }}
          >
            IVY BRIDAL
          </span>
          <div className="w-px h-5" style={{ backgroundColor: "#EAE6D8", opacity: 0.3 }} />
          <span
            style={{
              color: "#EAE6D8",
              opacity: 0.35,
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            {project.coupleNames}
          </span>
        </div>

        <button
          className="flex items-center justify-center gap-3 px-4 md:px-6 py-2.5 transition-all duration-300 hover:opacity-80 w-full sm:w-auto"
          style={{
            border: "1px solid rgba(234,230,216,0.3)",
            color: "#EAE6D8",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
          }}
        >
          <Download size={12} />
          TẢI XUỐNG TẤT CẢ
        </button>
      </div>

      {/* GALLERY SECTION */}
      <section className="px-4 md:px-10 py-12 md:py-20">
        <div className="mb-8 md:mb-14">
          <p
            style={{
              color: "#EAE6D8",
              opacity: 0.25,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              marginBottom: "0.6rem",
            }}
          >
            BỘ SƯU TẬP ẢNH
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              fontSize: "1.6rem",
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            Khoảnh Khắc Vĩnh Cửu
          </h2>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
          <Masonry gutter="20px">
            {galleryImages.map((image, index) => (
              <GalleryTile
                key={image.id}
                image={image}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center px-4 py-12 md:py-16"
        style={{ borderTop: "1px solid rgba(234,230,216,0.07)" }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#EAE6D8",
            opacity: 0.2,
            fontSize: "1.1rem",
            fontWeight: 400,
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          "Tình yêu là bất tử trong từng khoảnh khắc."
        </p>
        <p
          style={{
            color: "#EAE6D8",
            opacity: 0.15,
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          © 2025 IVY BRIDAL STUDIO — TẤT CẢ QUYỀN ĐỀU ĐƯỢC BẢO LƯU
        </p>
        <button
          onClick={() => router.push("/admin")}
          className="mt-5 px-4 py-2 transition-opacity hover:opacity-70"
          style={{
            border: "1px solid rgba(234,230,216,0.2)",
            color: "#EAE6D8",
            opacity: 0.45,
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          ADMIN DASHBOARD
        </button>
      </footer>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
          onSelect={setLightboxIndex}
        />
      )}
    </div>
  );
}

function GalleryTile({
  image,
  onClick,
}: {
  image: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ display: "block" }}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full block transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
        style={{
          backgroundColor: "rgba(31,40,40,0.35)",
          opacity: hovered ? 1 : 0,
        }}
      >
        <div
          className="flex items-center gap-2 px-5 py-2.5"
          style={{
            border: "1px solid rgba(234,230,216,0.35)",
            color: "#EAE6D8",
          }}
        >
          <ZoomIn size={13} />
          <span
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            XEM
          </span>
        </div>
      </div>
    </div>
  );
}

interface LightboxProps {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev, onSelect }: LightboxProps) {
  const currentImage = images[currentIndex];
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 z-10"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#EAE6D8",
              opacity: 0.6,
              fontSize: "0.95rem",
              fontWeight: 400,
              letterSpacing: "0.08em",
            }}
          >
            IVY BRIDAL
          </span>
          <span
            style={{
              color: "#EAE6D8",
              opacity: 0.25,
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="transition-opacity duration-200 hover:opacity-60"
          style={{ color: "#EAE6D8", opacity: 0.7 }}
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Image */}
      <div
        className="relative flex items-center justify-center w-full h-full px-4 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain transition-opacity duration-500"
          style={{
            maxHeight: "82vh",
            opacity: imgLoaded ? 1 : 0,
          }}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Loading pulse */}
        {!imgLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: "#EAE6D8", opacity: 0.4 }}
            />
          </div>
        )}
      </div>

      {/* Nav Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 transition-opacity duration-200 hover:opacity-60"
        style={{ color: "#EAE6D8", opacity: 0.5 }}
      >
        <ChevronLeft size={28} strokeWidth={1} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 transition-opacity duration-200 hover:opacity-60"
        style={{ color: "#EAE6D8", opacity: 0.5 }}
      >
        <ChevronRight size={28} strokeWidth={1} />
      </button>

      {/* Bottom Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 px-4 md:px-8 py-4 md:py-6"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="truncate"
          style={{
            color: "#EAE6D8",
            opacity: 0.3,
            fontSize: "0.58rem",
            letterSpacing: "0.15em",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          {currentImage.alt}
        </p>

        <button
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 transition-all duration-200 hover:opacity-80"
          style={{
            border: "1px solid rgba(234,230,216,0.2)",
            color: "#EAE6D8",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          <Download size={12} strokeWidth={1.5} />
          TẢI ẢNH GỐC
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="transition-all duration-300"
            style={{
              width: i === currentIndex ? "24px" : "4px",
              height: "2px",
              backgroundColor: "#EAE6D8",
              opacity: i === currentIndex ? 0.8 : 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}