import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo.png";
import Link from "next/link";
import Image from "next/image";

const RegisterAuthPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Graphic Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative min-h-[400px]"
        style={{ backgroundImage: `url(/imgs/fade-login.png)` }}>    
        <div className="text-center text-white max-w-md">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">خوش اومدی!</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            اگر قبلا حساب کاربری ساختی میتونی وارد حساب شخصیت بشی!
          </p>
          
          <Link href="/auth/login">
            <Button
              text="ورود به حساب کاربری"
              variant="primary"
              className="w-full md:w-auto text-lg"
            />
          </Link>
        </div>
      </div>


      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-20 bg-white">
      <Link href="/" className="absolute top-4 right-4">
          <Image src={Logo} alt="Logo" className="w-20 md:w-28" />
        </Link>
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl text-[#1a604e] text-center">
            ثبت نام در خانه پارکینسون
          </h1>

          <div className="space-y-6 w-full">
            <Input title="نام کاربری" placeholder="نام کاربری خود را وارد کنید" />
            <Input title="رمز عبور" placeholder="رمز عبور خود را وارد کنید" type="password" />
            <Input title="شماره تماس" placeholder="شماره تماس خود را وارد کنید" type="tel" />

            <Button
              text="ثبت نام"
              variant="secondary"
              className="w-full text-lg"
              // shadow="[-6px_7px_21px_-6px_#1A604E]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuthPage;