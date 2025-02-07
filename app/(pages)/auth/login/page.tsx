import { Input, Button } from "@/app/components";
import Logo from "@/public/imgs/logo-layer.png";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginAuthPage = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Form Section */}
      <div className="relative flex w-1/2 items-center justify-center bg-white p-20">
        {/* Form Content */}
        <div className="mx-auto mt-24 flex max-w-md flex-col items-center">
          <h1
            className="mb-16 text-right text-6xl text-[#1a604e]"
            style={{ fontWeight: 600, width: "max-content" }}
          >
            ورود به حساب کاربری
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

            <Button
              text="ورود"
              variant="secondary"
              className="text-xl w-40 mt-6"
              style={{
                boxShadow: "-6px 7px 21px -6px #1A604E",
                borderRadius: "0.9375rem",
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
            <Image src={Logo} alt="Logo" className="absolute top-8 right-8 w-32" />
        </Link>
        <div className="max-w-md text-center text-white">
          <h2 className="mb-8 text-5xl font-bold">سلام دوست من!</h2>
          <p className="text-2xl leading-relaxed">
            اگر تو هم دوست داری به خانه پارکینسون ملحق شی میتونی حساب خودتو
            ایجاد کنی!
          </p>

          <Link href="/auth/register">
            <Button
              text="ثبت نام"
              variant="primary"
              className="mx-auto mt-12 w-48 text-lg"
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

export default LoginAuthPage;
