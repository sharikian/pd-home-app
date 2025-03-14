"use client";
import { useState } from "react";
import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo.png";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import FadeLogin from "@/public/imgs/fade-login.png";
import { motion } from "framer-motion";

const RegisterAuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) {
      toast.error("لطفاً نام کاربری را وارد کنید");
      return;
    }

    if (!password.trim()) {
      toast.error("لطفاً رمز عبور را وارد کنید");
      return;
    }

    try {
      const baseUrl = window.location.origin;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, phone }),
      });
      if (response.ok) {
        toast.success("ثبت نام شما با موفقیت انجام شد");
        window.location.href = "/auth/login";
      } else {
        toast.error("ثبت نام ناموفق بود");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("خطایی رخ داد");
    }
  };

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const graphicVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      } 
    },
    exit: { 
      x: "-100%", 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      } 
    },
  };

  return (
    <motion.div 
      className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-slate-800"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Graphic Section */}
      <motion.div
        variants={graphicVariants}
        className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-cover bg-center relative min-h-[400px] dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900"
        style={{ backgroundImage: `url(${FadeLogin.src})` }}
      >
        <div className="text-center text-white dark:text-slate-100 max-w-md">
          <h2 className="mb-12 text-3xl md:text-5xl font-bold">!خوش اومدی</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            اگر قبلا حساب کاربری ساختی میتونی وارد حساب شخصیت بشی!
          </p>
          <Link href="/auth/login">
            <Button
              text="ورود به حساب کاربری"
              variant="primary"
              className="w-full md:w-auto text-lg dark:bg-emerald-700 dark:hover:bg-emerald-600"
            />
          </Link>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div 
        className="w-full lg:w-3/5 flex items-center justify-center p-4 md:p-8 lg:p-20 bg-white dark:bg-slate-900"
        variants={containerVariants}
      >
        <Link href="/" className="absolute top-4 right-4">
          <Image
            src={Logo}
            alt="Logo"
            className="w-20 md:w-28 dark:text-gray-200"
          />
        </Link>
        <div className="w-full max-w-md flex flex-col items-center">
          <h1 className="!mt-10 !mb-16 text-2xl md:text-3xl lg:text-5xl font-extrabold whitespace-nowrap text-[#1a604e] dark:text-emerald-400 text-center">
            ثبت نام در خانه پارکینسون
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 w-fit flex flex-col items-center"
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
            <Input
              title="شماره تماس"
              placeholder="شماره تماس خود را وارد کنید"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">
              <Button
                text="ثبت نام"
                variant="secondary"
                className="w-[10rem] text-lg dark:hover:bg-emerald-700"
              />
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterAuthPage;