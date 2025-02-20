import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pelak = localFont({
  src: '../public/fonts/Pelak.woff2',
  variable: '--font-prlak-bold',
})

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${pelak.className} antialiased bg-slate-50 dark:bg-slate-800 `}
      >
        {children}
      </body>
    </html>
  );
}