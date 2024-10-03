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
      <body className={`${inconsolata.className}`}>
        {/* <div className="relative  top-0 left-0 bg-gradient-to-tl from-[#0f2027] via-[#203A43] to-[#2C5364] text-amber-50 h-screen w-full flex flex-col lg:flex-row"> */}
        <div className="bg-[url('/img/peakpx.jpg')] backdrop-opacity-25 text-amber-50  w-full flex flex-col lg:flex-row">
          
          {children}
        </div>
      </body>
    </html>
  );
}
