import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter" 
});

const vt323 = VT323({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-vt323" 
});

export const metadata: Metadata = {
  title: "Rian Anugrah | OS Portfolio",
  description: "Rian Anugrah - Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-black selection:bg-blue-500 selection:text-white overflow-hidden">
        <div className="relative z-10 w-full h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
