"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Register() {
    // State cho ngày/tháng/năm
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState("1");
    const [year, setYear] = useState("2024");
    const [gender, setGender] = useState("female");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    // Tạo mảng ngày/tháng/năm
    const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
    const months = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];
    const years = Array.from({ length: 120 }, (_, i) => `${2024 - i}`);

    return (
        <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center font-sans">
            {/* Logo */}
            <div className="mt-8 mb-4">
        <span className="text-[#1877f2] font-bold text-5xl select-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          facebook
        </span>
            </div>
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 mb-2">
                <div className="text-center mb-2">
                    <h1 className="text-2xl font-bold">Tạo tài khoản mới</h1>
                    <div className="text-base text-[#606770]">Nhanh chóng và dễ dàng.</div>
                </div>
                <form className="flex flex-col gap-3 mt-2">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Họ"
                            className="border border-[#ccd0d5] rounded-md px-3 py-2 text-base w-1/2 focus:outline-none focus:border-[#1877f2]"
                        />
                        <input
                            type="text"
                            placeholder="Tên"
                            className="border border-[#ccd0d5] rounded-md px-3 py-2 text-base w-1/2 focus:outline-none focus:border-[#1877f2]"
                        />
                    </div>
                    {/* Ngày sinh */}
                    <div>
                        <label className="text-xs text-[#606770] font-semibold flex items-center gap-1 mb-1">
                            Ngày sinh
                            <span title="Nhấp để biết thêm thông tin" className="cursor-pointer text-[#606770]">?</span>
                        </label>
                        <div className="flex gap-2">
                            <select value={day} onChange={e => setDay(e.target.value)} className="border border-[#ccd0d5] rounded-md px-2 py-2 text-base w-1/3 focus:outline-none focus:border-[#1877f2]">
                                {days.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                            <select value={month} onChange={e => setMonth(e.target.value)} className="border border-[#ccd0d5] rounded-md px-2 py-2 text-base w-1/3 focus:outline-none focus:border-[#1877f2]">
                                {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                            </select>
                            <select value={year} onChange={e => setYear(e.target.value)} className="border border-[#ccd0d5] rounded-md px-2 py-2 text-base w-1/3 focus:outline-none focus:border-[#1877f2]">
                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>
                    </div>
                    {/* Giới tính */}
                    <div>
                        <label className="text-xs text-[#606770] font-semibold flex items-center gap-1 mb-1">
                            Giới tính
                            <span title="Nhấp để biết thêm thông tin" className="cursor-pointer text-[#606770]">?</span>
                        </label>
                        <div className="flex gap-2">
                            <label className="flex items-center border border-[#ccd0d5] rounded-md px-3 py-2 w-1/3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === "female"}
                                    onChange={() => setGender("female")}
                                    className="mr-2"
                                />
                                Nữ
                            </label>
                            <label className="flex items-center border border-[#ccd0d5] rounded-md px-3 py-2 w-1/3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === "male"}
                                    onChange={() => setGender("male")}
                                    className="mr-2"
                                />
                                Nam
                            </label>
                            <label className="flex items-center border border-[#ccd0d5] rounded-md px-3 py-2 w-1/3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="custom"
                                    checked={gender === "custom"}
                                    onChange={() => setGender("custom")}
                                    className="mr-2"
                                />
                                Tùy chỉnh
                            </label>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Số di động hoặc email"
                        className="border border-[#ccd0d5] rounded-md px-3 py-2 text-base focus:outline-none focus:border-[#1877f2]"
                    />
                    <div className="relative">
                      <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Mật khẩu mới"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="border border-[#ccd0d5] rounded-md px-3 py-2 text-base w-full focus:outline-none focus:border-[#1877f2]"
                      />
                      {password && (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#606770] hover:text-[#1877f2] cursor-pointer"
                        >
                          {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                    {/* Điều khoản */}
                    <div className="text-xs text-[#777] mt-1">
                        Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="#" className="text-[#385898] hover:underline">Tìm hiểu thêm.</a>
                    </div>
                    <div className="text-xs text-[#777]">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#" className="text-[#385898] hover:underline">Điều khoản</a>, <a href="#" className="text-[#385898] hover:underline">Chính sách quyền riêng tư</a> và <a href="#" className="text-[#385898] hover:underline">Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </div>
                    <button
                        type="submit"
                        className="bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-lg rounded-md py-2 mt-2 transition"
                    >
                        Đăng ký
                    </button>
                </form>
                <div className="text-center mt-4">
                    <Link href="/login" className="text-[#1877f2] text-base hover:underline font-medium">
                        Bạn đã có tài khoản ư?
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}