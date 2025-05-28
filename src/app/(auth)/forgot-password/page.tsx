"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/layout/Footer";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Nhập email, 2: Xác nhận, 3: Hoàn thành
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Giả lập API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStep(2);
    setIsLoading(false);
  };

  const handleSendCode = async () => {
    setIsLoading(true);
    // Giả lập API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStep(3);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center font-sans">
      {/* Header */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-[980px] mx-auto px-4 py-2">
          <Link href="/" className="text-[#1877f2] font-bold text-3xl select-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            facebook
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[980px] px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-[450px] mx-auto">
          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold text-center mb-4">Tìm tài khoản của bạn</h1>
              <div className="border-b border-[#dadde1] mb-4"></div>
              <p className="text-[#1c1e21] text-base mb-4">
                Nhập email hoặc số điện thoại di động của bạn để tìm tài khoản của bạn.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email hoặc số điện thoại"
                  className="border border-[#dddfe2] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[#1877f2]"
                  required
                />
                <div className="flex justify-end gap-3 mt-2">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-[#1877f2] font-semibold hover:bg-[#f0f2f5] rounded-md transition"
                  >
                    Hủy
                  </Link>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold rounded-md transition disabled:opacity-70"
                  >
                    {isLoading ? "Đang tìm kiếm..." : "Tìm kiếm"}
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold text-center mb-4">Xác nhận danh tính của bạn</h1>
              <div className="border-b border-[#dadde1] mb-4"></div>
              <p className="text-[#1c1e21] text-base mb-4">
                Chúng tôi đã gửi mã xác nhận đến {email}
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nhập mã xác nhận"
                  className="border border-[#dddfe2] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[#1877f2]"
                />
                <div className="flex justify-end gap-3 mt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-[#1877f2] font-semibold hover:bg-[#f0f2f5] rounded-md transition"
                  >
                    Quay lại
                  </button>
                  <button
                    onClick={handleSendCode}
                    disabled={isLoading}
                    className="px-4 py-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold rounded-md transition disabled:opacity-70"
                  >
                    {isLoading ? "Đang xác nhận..." : "Xác nhận"}
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-2xl font-bold text-center mb-4">Đặt lại mật khẩu</h1>
              <div className="border-b border-[#dadde1] mb-4"></div>
              <p className="text-[#1c1e21] text-base mb-4">
                Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="password"
                  placeholder="Mật khẩu mới"
                  className="border border-[#dddfe2] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[#1877f2]"
                />
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  className="border border-[#dddfe2] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[#1877f2]"
                />
                <div className="flex justify-end gap-3 mt-2">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-[#1877f2] font-semibold hover:bg-[#f0f2f5] rounded-md transition"
                  >
                    Hủy
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold rounded-md transition"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}