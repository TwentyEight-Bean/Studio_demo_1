export interface Project {
  id: string;
  coupleNames: string;
  date: string;
  imageCount: number;
  coverImage: string;
  clientKey: string;
  location: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  height: "short" | "medium" | "tall";
}

export const projects: Project[] = [
  {
    id: "1",
    coupleNames: "Minh & Lan",
    date: "15 Tháng 6, 2024",
    imageCount: 342,
    coverImage:
      "https://images.unsplash.com/photo-1625272633260-b9492122e9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZWxlZ2FudCUyMHBvcnRyYWl0JTIwY2luZW1hdGljfGVufDF8fHx8MTc3NjE4Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "minhan-2024",
    location: "Hà Nội",
  },
  {
    id: "2",
    coupleNames: "Hoàng & Mai",
    date: "22 Tháng 9, 2024",
    imageCount: 289,
    coverImage:
      "https://images.unsplash.com/photo-1768488292627-7471f9881677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjB2ZW51ZSUyMGx1eHVyeSUyMGZsb3dlcnN8ZW58MXx8fHwxNzc2MTgyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "hoangmai-2024",
    location: "TP. Hồ Chí Minh",
  },
  {
    id: "3",
    coupleNames: "Tuấn & Ngọc",
    date: "08 Tháng 12, 2024",
    imageCount: 415,
    coverImage:
      "https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdoaXRlJTIwZHJlc3MlMjBlZGl0b3JpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzYxODI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "tuanngoc-2024",
    location: "Đà Nẵng",
  },
  {
    id: "4",
    coupleNames: "Dũng & Hương",
    date: "14 Tháng 2, 2025",
    imageCount: 378,
    coverImage:
      "https://images.unsplash.com/photo-1712314947774-9d4d9c4e9a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwcm9tYW50aWMlMjBnb2xkZW4lMjBsaWdodHxlbnwxfHx8fDE3NzYxODI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "dunghuong-2025",
    location: "Hội An",
  },
  {
    id: "5",
    coupleNames: "Khoa & Thy",
    date: "30 Tháng 3, 2025",
    imageCount: 261,
    coverImage:
      "https://images.unsplash.com/photo-1770301312385-7a4ba2f12147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb3V0ZG9vciUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMHJvbWFudGljJTIwc3Vuc2V0fGVufDF8fHx8MTc3NjE4Mjc1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "khoathy-2025",
    location: "Nha Trang",
  },
  {
    id: "6",
    coupleNames: "Nam & Linh",
    date: "20 Tháng 4, 2025",
    imageCount: 330,
    coverImage:
      "https://images.unsplash.com/photo-1766104806962-d0051471efb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwa2lzcyUyMGNlcmVtb255JTIwcm9tYW50aWMlMjBtb21lbnR8ZW58MXx8fHwxNzc2MTgyNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    clientKey: "namlinh-2025",
    location: "Phú Quốc",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1625272633260-b9492122e9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZWxlZ2FudCUyMHBvcnRyYWl0JTIwY2luZW1hdGljfGVufDF8fHx8MTc3NjE4Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Chân dung cặp đôi thanh lịch",
    height: "tall",
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1768488292627-7471f9881677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjB2ZW51ZSUyMGx1eHVyeSUyMGZsb3dlcnN8ZW58MXx8fHwxNzc2MTgyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Không gian lễ cưới sang trọng",
    height: "medium",
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdoaXRlJTIwZHJlc3MlMjBlZGl0b3JpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzYxODI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cô dâu trong váy cưới trắng",
    height: "tall",
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1712314947774-9d4d9c4e9a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwcm9tYW50aWMlMjBnb2xkZW4lMjBsaWdodHxlbnwxfHx8fDE3NzYxODI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tiệc cưới ánh sáng vàng lãng mạn",
    height: "short",
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1761717410058-5a2c296d0893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZyUyMGRldGFpbCUyMG1hY3JvJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzYxODI3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Chi tiết nhẫn cưới",
    height: "short",
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1600879227354-f2809c06f145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBmaXJzdCUyMGRhbmNlJTIwd2VkZGluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NjE4Mjc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Điệu nhảy đầu tiên của cặp đôi",
    height: "medium",
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1579035234222-1af9dc733cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnMlMjBicmlkYWx8ZW58MXx8fHwxNzc2MTgyNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Bó hoa cô dâu",
    height: "medium",
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1770301312385-7a4ba2f12147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb3V0ZG9vciUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMHJvbWFudGljJTIwc3Vuc2V0fGVufDF8fHx8MTc3NjE4Mjc1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cảnh hoàng hôn lãng mạn ngoài trời",
    height: "short",
  },
  {
    id: "g9",
    url: "https://images.unsplash.com/photo-1774814305936-e187d3778adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHN1aXQlMjBlbGVnYW50JTIwcG9ydHJhaXQlMjB3ZWRkaW5nJTIwZGF5fGVufDF8fHx8MTc3NjE4Mjc1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Chú rể trong bộ vest thanh lịch",
    height: "tall",
  },
  {
    id: "g10",
    url: "https://images.unsplash.com/photo-1738669469820-259d9c7189bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBkZWNvciUyMGNhbmRsZXMlMjBlbGVnYW50JTIwZGlubmVyfGVufDF8fHx8MTc3NjE4Mjc1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Trang trí bàn tiệc nến thanh lịch",
    height: "short",
  },
  {
    id: "g11",
    url: "https://images.unsplash.com/photo-1766104806962-d0051471efb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwa2lzcyUyMGNlcmVtb255JTIwcm9tYW50aWMlMjBtb21lbnR8ZW58MXx8fHwxNzc2MTgyNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Nụ hôn cưới lãng mạn",
    height: "medium",
  },
  {
    id: "g12",
    url: "https://images.unsplash.com/photo-1722093265122-4e35000e8afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwd2FsayUyMGFpc2xlJTIwY2h1cmNoJTIwY2F0aGVkcmFsfGVufDF8fHx8MTc3NjE4Mjc2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Đi vào lễ đường nhà thờ",
    height: "tall",
  },
  {
    id: "g13",
    url: "https://images.unsplash.com/photo-1773688199646-247f0119da1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdldHRpbmclMjByZWFkeSUyMG1pcnJvciUyMHJlZmxlY3Rpb24lMjBtb3JuaW5nfGVufDF8fHx8MTc3NjE4Mjc2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cô dâu chuẩn bị buổi sáng",
    height: "medium",
  },
];
