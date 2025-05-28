import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-auto">
      <div className="max-w-[980px] mx-auto px-4 py-4">
        {/* Language Selector */}
        <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
          <Link href="#" className="hover:underline">Tiếng Việt</Link>
          <Link href="#" className="hover:underline">English (US)</Link>
          <Link href="#" className="hover:underline">中文(台灣)</Link>
          <Link href="#" className="hover:underline">한국어</Link>
          <Link href="#" className="hover:underline">日本語</Link>
          <Link href="#" className="hover:underline">Français (France)</Link>
          <Link href="#" className="hover:underline">ภาษาไทย</Link>
          <Link href="#" className="hover:underline">Español</Link>
          <Link href="#" className="hover:underline">Português (Brasil)</Link>
          <Link href="#" className="hover:underline">Deutsch</Link>
          <Link href="#" className="hover:underline">Italiano</Link>
        </div>

        {/* Divider */}
        <div className="border-t border-[#dddfe2] my-3"></div>

        {/* Meta Links */}
        <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
          <Link href="#" className="hover:underline">Đăng ký</Link>
          <Link href="#" className="hover:underline">Đăng nhập</Link>
          <Link href="#" className="hover:underline">Messenger</Link>
          <Link href="#" className="hover:underline">Facebook Lite</Link>
          <Link href="#" className="hover:underline">Watch</Link>
          <Link href="#" className="hover:underline">Địa điểm</Link>
          <Link href="#" className="hover:underline">Trò chơi</Link>
          <Link href="#" className="hover:underline">Marketplace</Link>
          <Link href="#" className="hover:underline">Meta Pay</Link>
          <Link href="#" className="hover:underline">Meta Store</Link>
          <Link href="#" className="hover:underline">Meta Quest</Link>
          <Link href="#" className="hover:underline">Instagram</Link>
          <Link href="#" className="hover:underline">Threads</Link>
          <Link href="#" className="hover:underline">Tải thông tin lên liên hệ & Người không phải người dùng</Link>
          <Link href="#" className="hover:underline">Tải lên</Link>
          <Link href="#" className="hover:underline">Tạo Trang</Link>
          <Link href="#" className="hover:underline">Nhà phát triển</Link>
          <Link href="#" className="hover:underline">Tuyển dụng</Link>
          <Link href="#" className="hover:underline">Quyền riêng tư</Link>
          <Link href="#" className="hover:underline">Cookie</Link>
          <Link href="#" className="hover:underline">Lựa chọn quảng cáo</Link>
          <Link href="#" className="hover:underline">Điều khoản</Link>
          <Link href="#" className="hover:underline">Trợ giúp</Link>
          <Link href="#" className="hover:underline">Tải thông tin liên hệ lên & Người không phải người dùng</Link>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs text-[#737373]">
          Meta © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
} 