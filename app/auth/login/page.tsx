"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo-layer.png";
import Link from "next/link";
import Image from "next/image";
import FadeLogin from "@/public/imgs/fade-login.png";
import { toast } from "react-toastify";

const LoginAuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if username is empty
    if (!username.trim()) {
      toast.error("لطفاً نام کاربری را وارد کنید");
      return;
    }

    // Check if password is empty
    if (!password.trim()) {
      toast.error("لطفاً رمز عبور را وارد کنید");
      return;
    }
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (result?.error) {
      toast.error("نام کاربری یا رمز عبور اشتباه است");
    } else {
      toast.success("ورود با موفقیت انجام شد");
      window.location.href = "/"; // Redirect to home
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#EAEEF1] dark:bg-slate-800">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-20 bg-white dark:bg-slate-900 mt-8 md:mt-0">
        <div className="w-full max-w-md">
          <h1 className="mb-8 md:mb-12 text-3xl md:text-5xl text-[#1a604e] dark:text-emerald-400 text-center font-bold">
            ورود به حساب کاربری
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-center"
          >
            <Input
              title="نام کاربری"
              placeholder="نام کاربری خود را وارد کنید"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              title="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              <Button
                text="ورود"
                variant="secondary"
                className="w-[10rem] text-lg dark:hover:bg-emerald-700 shadow-slate-500"
              />
            </button>
          </form>
        </div>
      </div>

      {/* Graphic Section */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative min-h-[400px] dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900"
        style={{ backgroundImage: `url(${FadeLogin.src})` }}
      >
        <Link href="/" className="absolute top-6 right-6">
          <Image
            src={Logo}
            alt="Logo"
            className="w-24 md:w-32 dark:text-gray-200"
          />
        </Link>

        <div className="text-center text-white dark:text-slate-100 max-w-md">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold mt-20 md:mt-0">سلام دوست من!</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            اگر تو هم دوست داری به خانه پارکینسون ملحق شی میتونی حساب خودتو
            ایجاد کنی!
          </p>
          <Link href="/auth/register">
            <Button
              text="ثبت نام"
              variant="primary"
              className="!w-[10rem] md:w-auto text-lg dark:bg-emerald-700 dark:hover:bg-emerald-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAuthPage;
