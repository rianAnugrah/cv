import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { CiHome } from "react-icons/ci";
import { SlBriefcase, SlHome, SlSettings } from "react-icons/sl";
import {
  RiAccountCircleLine,
  RiAwardLine,
  RiBloggerLine,
  RiBriefcase2Line,
  RiHome2Fill,
  RiHome2Line,
  RiSettings2Line,
  RiShoppingBag2Line,
} from "react-icons/ri";
import Link from "next/link";
import NavItem from "@/app/(shared)/components/nav-item";
import Image from "next/image";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rian Anugrah",
  description: "Rian Anugrah - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inconsolata.className}`}>
        <div className="bg-[#f7f7f7] pt-[calc(4rem_-_2px)]">
        {/* <div className="bg-slate-950 pt-[calc(4rem_-_2px)]"> */}
          
          {children}
        </div>
      </body>
    </html>
  );
}
