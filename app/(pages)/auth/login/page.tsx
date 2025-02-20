import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo-layer.png";
import Link from "next/link";
import Image from "next/image";

const LoginAuthPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-slate-800">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-20 bg-white dark:bg-slate-900">
        <div className="w-full max-w-md">
          <h1 className="mb-8 md:mb-12 text-3xl md:text-4xl text-[#1a604e] dark:text-emerald-400 text-center font-bold">
            ورود به حساب کاربری
          </h1>

          <div className="space-y-6">
            <Input 
              title="نام کاربری" 
              placeholder="نام کاربری خود را وارد کنید" 
            />
            <Input 
              title="رمز عبور" 
              placeholder="رمز عبور خود را وارد کنید" 
              type="password" 
            />

            <Button
              text="ورود"
              variant="secondary"
              className="w-full text-lg dark:hover:bg-emerald-700"
            />
          </div>
        </div>
      </div>

      {/* Graphic Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative min-h-[400px]
                     dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900"
        style={{ backgroundImage: `url(/imgs/fade-login.png)` }}>
        <Link href="/" className="absolute top-6 right-6">
          <Image 
            src={Logo} 
            alt="Logo" 
            className="w-24 md:w-32 dark:invert-[.85]" 
          />
        </Link>
        
        <div className="text-center text-white dark:text-slate-100 max-w-md">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">سلام دوست من!</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            اگر تو هم دوست داری به خانه پارکینسون ملحق شی میتونی حساب خودتو ایجاد کنی!
          </p>
          
          <Link href="/auth/register">
            <Button
              text="ثبت نام"
              variant="primary"
              className="w-full md:w-auto text-lg dark:bg-emerald-700 dark:hover:bg-emerald-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAuthPage;