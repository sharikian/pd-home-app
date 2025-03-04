'use client'
import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo.png";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import FadeLogin from '@/public/imgs/fade-login.png'

const RegisterAuthPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-slate-800">
      {/* Graphic Section */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-cover bg-center relative min-h-[400px]
                     dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900"
        style={{ backgroundImage: `url(${FadeLogin.src})` }}>    
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
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-4 md:p-8 lg:p-20 bg-white dark:bg-slate-900">
      <Link href="/" className="absolute top-4 right-4">
          <Image 
            src={Logo} 
            alt="Logo" 
            className="w-20 md:w-28 dark:invert-[.85]" 
          />
        </Link>
        <div className="w-full max-w-md flex flex-col items-center">
          <h1 className="!mt-18 !mb-16 text-2xl md:text-3xl lg:text-5xl font-extrabold whitespace-nowrap text-[#1a604e] dark:text-emerald-400 text-center">
            ثبت نام در خانه پارکینسون
          </h1>

          <div className="space-y-6 w-fit flex flex-col items-center">
            <Input 
              title="نام کاربری" 
              placeholder="نام کاربری خود را وارد کنید" 
            />
            <Input 
              title="رمز عبور" 
              placeholder="رمز عبور خود را وارد کنید" 
              type="password" 
            />
            <Input 
              title="شماره تماس" 
              placeholder="شماره تماس خود را وارد کنید" 
              type="tel" 
            />

            <Button
              text="ثبت نام"
              variant="secondary"
              className="w-[10rem] text-lg dark:hover:bg-emerald-700"
              onClick={() => {toast.success('ثبت نام شما با موفقیت انجام شد.')}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuthPage;