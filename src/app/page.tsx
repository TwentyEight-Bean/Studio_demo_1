import { AdminDashboard } from "./components/AdminDashboard";

export const revalidate = 3600;

export default function HomePage() {
  return <AdminDashboard />;
}
