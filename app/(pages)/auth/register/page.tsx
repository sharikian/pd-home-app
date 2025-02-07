import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo.png";
import Link from "next/link";
import { JSX } from "react";
import Image from "next/image";

const RegisterAuthPage = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-row-reverse bg-gray-100">
      {/* Form Section */}
      <div className="relative flex w-1/2 items-center justify-center bg-white p-20">
        {/* Form Content */}
        <div className="mx-auto mt-24 flex max-w-md flex-col items-center">
          <h1
            className="mb-8 text-right text-4xl text-[#1a604e]"
            style={{ fontWeight: 300, width: "max-content" }}
          >
            ثبت نام در خانه پارکینسون
          </h1>

          <div className="flex flex-col items-center">
            <Input
              title="نام کاربری"
              placeholder="نام کاربری خود را وارد کنید"
              variant="primary"
              centerize={false}
            />

            <Input
              title="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              variant="primary"
              centerize={false}
            />

            <Input
              title="شماره تماس"
              placeholder="شماره تماس خود را وارد کنید"
              variant="primary"
              centerize={false}
            />

            <Button
              text="ثبت نام"
              variant="secondary"
              className="text-xl mt-6"
              style={{
                boxShadow: "-6px 7px 21px -6px #1A604E",
              }}
            />
          </div>
        </div>
      </div>

      {/* Graphic Section */}
      <div
        className="flex w-1/2 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/imgs/fade-login.png)` }}
      >
        <Link href='/'>
            <Image src={Logo} alt="Logo" className="absolute top-6 right-6 w-28" />
        </Link>
        <div className="max-w-md text-center text-white">
          <h2 className="mb-8 text-5xl font-bold">خوش اومدی!</h2>
          <p className="text-2xl leading-relaxed">
            اگر قبلا حساب کاربری ساختی میتونی وارد حساب شخصیت بشی!
          </p>

          <Link href="/auth/login">
            <Button
              text="ورود به حساب کاربری"
              variant="primary"
              className="mx-auto mt-12 text-lg"
              style={{
                boxShadow: "-6px 7px 21px -6px #1A604E",
                borderRadius: "0.9375rem",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuthPage;
