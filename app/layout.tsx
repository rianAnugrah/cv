import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Rian Anugrah | Persona 3 Reload CV",
  description: "Rian Anugrah - Software Engineer (Persona 3 Reload UI Redesign)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased text-white bg-[#030816] selection:bg-[#00f0ff] selection:text-black">
        {/* Deep ocean background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 p3r-bg-grid opacity-60"></div>
        <div className="fixed inset-0 pointer-events-none z-0 bg-radial-gradient-overlay opacity-30"></div>
        
        {/* Floating Bubble background particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="p3r-bubble w-8 h-8 left-[10%]" style={{ animation: "bubbleFloat 18s infinite linear", animationDelay: "0s" }}></div>
          <div className="p3r-bubble w-12 h-12 left-[30%]" style={{ animation: "bubbleFloat 22s infinite linear", animationDelay: "3s" }}></div>
          <div className="p3r-bubble w-6 h-6 left-[55%]" style={{ animation: "bubbleFloat 15s infinite linear", animationDelay: "1s" }}></div>
          <div className="p3r-bubble w-16 h-16 left-[75%]" style={{ animation: "bubbleFloat 26s infinite linear", animationDelay: "5s" }}></div>
          <div className="p3r-bubble w-10 h-10 left-[85%]" style={{ animation: "bubbleFloat 20s infinite linear", animationDelay: "2s" }}></div>
        </div>

        {/* Base Content wrapper */}
        <div className="relative z-10 pt-[calc(4rem_-_2px)] min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
