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
  title: "Rian Anugrah | Retro Synthwave CV",
  description: "Rian Anugrah - Software Engineer (Retro 80s UI Redesign)",
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
      <body className="font-sans antialiased text-white bg-[#100720] selection:bg-[#ff00ff] selection:text-white crt-flicker">
        
        {/* Retro Sunset */}
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-80" style={{ transform: "translateY(-15vh)" }}>
           <div className="retro-sun w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] rounded-full"></div>
        </div>

        {/* Moving Perspective Grid */}
        <div className="fixed bottom-0 left-0 w-full h-[50vh] pointer-events-none z-0 perspective-container">
           <div className="synthwave-grid"></div>
        </div>

        {/* CRT Scanlines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] scanlines opacity-30 mix-blend-overlay"></div>

        {/* Base Content wrapper */}
        <div className="relative z-10 pt-[calc(4rem_-_2px)] min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
