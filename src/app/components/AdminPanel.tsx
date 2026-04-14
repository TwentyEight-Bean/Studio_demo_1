"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { projects } from "../data/projects";
import {
  DEFAULT_ADMIN_PASSWORD,
  loadAlbumAccessConfig,
  saveAlbumAccessConfig,
  type AlbumAccessConfig,
} from "@/lib/albumAccess";

export function AdminPanel() {
  const router = useRouter();
  const [config, setConfig] = useState<AlbumAccessConfig>({
    adminPassword: DEFAULT_ADMIN_PASSWORD,
    albumPasswords: {},
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setConfig(loadAlbumAccessConfig());
  }, []);

  const allConfigured = useMemo(
    () => projects.filter((project) => config.albumPasswords[project.id]?.trim()).length,
    [config.albumPasswords],
  );

  const updateAlbumPassword = (projectId: string, value: string) => {
    setConfig((prev) => ({
      ...prev,
      albumPasswords: {
        ...prev.albumPasswords,
        [projectId]: value,
      },
    }));
  };

  const handleSave = () => {
    saveAlbumAccessConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="min-h-screen px-4 md:px-10 py-8 md:py-12" style={{ backgroundColor: "#2C3939", color: "#EAE6D8" }}>
      <div className="max-w-screen-xl mx-auto">
        <button
          onClick={() => router.push("/")}
          className="mb-6 flex items-center gap-2 transition-opacity hover:opacity-70"
          style={{ fontSize: "0.68rem", letterSpacing: "0.18em" }}
        >
          <ArrowLeft size={14} />
          QUAY VỀ HOME USER
        </button>

        <div className="mb-8 md:mb-10">
          <p className="mb-2 opacity-40" style={{ fontSize: "0.62rem", letterSpacing: "0.25em" }}>
            ADMIN / ACCESS CONTROL
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 400 }}>
            AdminDashboard - Quản lý mật khẩu album
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-6">
          <section className="p-5 md:p-7" style={{ backgroundColor: "#1F2828", border: "1px solid rgba(234,230,216,0.12)" }}>
            <p className="mb-3 opacity-45" style={{ fontSize: "0.62rem", letterSpacing: "0.22em" }}>
              MASTER PASSWORD
            </p>
            <label className="block mb-2 opacity-70" style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}>
              MẬT KHẨU ADMIN DÙNG CHUNG
            </label>
            <input
              type="text"
              value={config.adminPassword}
              onChange={(e) => setConfig((prev) => ({ ...prev, adminPassword: e.target.value }))}
              className="w-full px-4 py-3"
              style={{
                backgroundColor: "rgba(234,230,216,0.04)",
                border: "1px solid rgba(234,230,216,0.14)",
                outline: "none",
              }}
            />
            <p className="mt-3 opacity-45" style={{ fontSize: "0.62rem", letterSpacing: "0.08em" }}>
              Đã cài mật khẩu riêng cho {allConfigured}/{projects.length} album
            </p>
          </section>

          <section className="p-5 md:p-7" style={{ backgroundColor: "#1F2828", border: "1px solid rgba(234,230,216,0.12)" }}>
            <p className="mb-4 opacity-45" style={{ fontSize: "0.62rem", letterSpacing: "0.22em" }}>
              ALBUM PASSWORDS
            </p>
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3 items-center p-3"
                  style={{ backgroundColor: "rgba(44,57,57,0.6)" }}
                >
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}>{project.coupleNames}</p>
                    <p className="opacity-45" style={{ fontSize: "0.62rem", letterSpacing: "0.12em" }}>
                      {project.location}
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Để trống = dùng mật khẩu admin"
                    value={config.albumPasswords[project.id] ?? ""}
                    onChange={(e) => updateAlbumPassword(project.id, e.target.value)}
                    className="w-full px-4 py-2.5"
                    style={{
                      backgroundColor: "rgba(234,230,216,0.05)",
                      border: "1px solid rgba(234,230,216,0.15)",
                      outline: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 md:mt-8 flex items-center gap-2 px-6 py-3 transition-all hover:opacity-90"
          style={{ backgroundColor: "#EAE6D8", color: "#1F2828", fontSize: "0.68rem", letterSpacing: "0.15em", fontWeight: 500 }}
        >
          <Save size={14} />
          LƯU CẤU HÌNH
        </button>

        {saved && (
          <p className="mt-3" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", opacity: 0.75 }}>
            ĐÃ LƯU MẬT KHẨU THÀNH CÔNG.
          </p>
        )}
      </div>
    </div>
  );
}
