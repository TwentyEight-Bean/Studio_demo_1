export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: "service" | "location" | "guide";
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "chup-anh-cuoi-editorial-ha-noi",
    title: "Chụp ảnh cưới editorial tại Hà Nội: phong cách sang trọng, tự nhiên",
    description:
      "Gợi ý concept, timeline và checklist để có bộ ảnh cưới editorial nổi bật tại Hà Nội.",
    publishedAt: "2026-04-15",
    category: "service",
    content: [
      "Phong cách editorial tập trung vào đường nét, ánh sáng và cảm xúc chân thật của cặp đôi.",
      "Bạn nên chuẩn bị moodboard trước buổi chụp để ekip thống nhất concept trang phục và bối cảnh.",
      "Khung giờ vàng buổi chiều giúp ảnh có chiều sâu, tông da đẹp và giàu cảm xúc hơn.",
    ],
  },
  {
    slug: "dia-diem-prewedding-da-nang",
    title: "7 địa điểm prewedding đẹp tại Đà Nẵng cho cặp đôi hiện đại",
    description:
      "Danh sách địa điểm prewedding ở Đà Nẵng phù hợp nhiều phong cách từ classic đến cinematic.",
    publishedAt: "2026-04-16",
    category: "location",
    content: [
      "Bán đảo Sơn Trà phù hợp concept tự nhiên, nhiều mảng xanh và ánh sáng dịu.",
      "Các studio indoor tại trung tâm giúp kiểm soát ánh sáng khi thời tiết thay đổi.",
      "Nên phân bổ lịch chụp tối đa 2 địa điểm/ngày để giữ năng lượng và cảm xúc tự nhiên.",
    ],
  },
  {
    slug: "chi-phi-chup-anh-cuoi-cao-cap",
    title: "Chi phí chụp ảnh cưới cao cấp gồm những gì?",
    description:
      "Phân tích cấu phần chi phí để bạn lên ngân sách thông minh cho bộ ảnh cưới chất lượng cao.",
    publishedAt: "2026-04-17",
    category: "guide",
    content: [
      "Chi phí chính gồm concept, ekip, trang phục, makeup, di chuyển và hậu kỳ.",
      "Gói dịch vụ cao cấp thường tối ưu trải nghiệm cá nhân hóa và tiêu chuẩn màu sắc đồng nhất.",
      "Bạn nên yêu cầu portfolio cùng cam kết thời gian bàn giao để kiểm soát kỳ vọng.",
    ],
  },
];
