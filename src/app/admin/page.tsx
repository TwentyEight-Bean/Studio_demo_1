import type { Metadata } from "next";
import { AdminPanel } from "@/app/components/AdminPanel";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Quản lý mật khẩu truy cập album.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPanel />;
}
