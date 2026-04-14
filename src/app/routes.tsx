import { AdminDashboard } from "./components/AdminDashboard";
import { ClientGallery } from "./components/ClientGallery";

export const legacyRoutes = [
  {
    path: "/",
    Component: AdminDashboard,
  },
  {
    path: "/gallery/:id",
    Component: ClientGallery,
  },
];