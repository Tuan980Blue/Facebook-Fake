"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Kiểm tra xem input là email hay số điện thoại
      const isEmail = emailOrPhone.includes('@');
      const data = isEmail 
        ? { email: emailOrPhone, password }
        : { phoneNumber: emailOrPhone, password };

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Đăng nhập thành công, chuyển hướng về trang chủ
        router.push('/');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Có lỗi xảy ra khi đăng nhập');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-[#f0f2f5] flex flex-col justify-center items-center font-sans">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mx-auto py-12">
          {/* Left: Logo & Slogan */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-12 flex flex-col items-center md:items-start">
            <Link href="/" className="text-[#1877f2] font-bold text-5xl md:text-6xl mb-4 select-none hover:opacity-90 transition" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              facebook
            </Link>
            <p className="text-2xl md:text-3xl text-[#1c1e21] font-normal max-w-md leading-snug">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
            </p>
          </div>
          {/* Right: Login Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {error && (
                <div className="text-red-500 text-sm text-center mb-2">
                  {error}
                </div>
              )}
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="border border-[#dddfe2] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[#1877f2]"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-[#dddfe2] rounded-md px-4 py-3 text-base w-full focus:outline-none focus:border-[#1877f2]"
                  required
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
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-lg rounded-md py-3 mt-1 transition ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
              <Link
                href="/forgot-password"
                className="text-[#1877f2] text-center text-sm mt-2 hover:underline"
              >
                Quên mật khẩu?
              </Link>
              <div className="border-t border-[#dadde1] my-3"></div>
              <Link
                href="/register"
                className="bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-base rounded-md py-3 w-2/3 mx-auto transition text-center"
              >
                Tạo tài khoản mới
              </Link>
            </form>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-[#1c1e21]">
          <b className="font-semibold">Tạo Trang</b> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
        </div>
      </div>
      <Footer/>
    </div>
  );
}