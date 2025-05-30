import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Providers from "./providers";

const pelak = localFont({
  src: "../public/fonts/PelakFA-Medium.woff2",
  variable: "--font-pelak-bold",
});

export const metadata: Metadata = {
  title: {
    template: 'خانه پارکینسون | %s',
    default: 'خانه',
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${pelak.className} antialiased bg-slate-50 dark:bg-slate-800`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
