import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivybridal.vn"),
  title: {
    default: "Ivy Bridal Studio",
    template: "%s | Ivy Bridal Studio",
  },
  description:
    "Studio chụp ảnh cưới cao cấp với phong cách editorial, tinh tế và cảm xúc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ivy Bridal Studio",
    description:
      "Portfolio ảnh cưới cao cấp với phong cách cinematic và dịch vụ cá nhân hóa.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
