import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileGate } from "@/components/providers/ProfileGate";
import { ProfileProvider } from "@/components/providers/ProfileProvider";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const condensed = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-condensed-face",
  display: "swap",
});

const sans = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

export const metadata = {
  metadataBase: new URL(`https://rian.pixinia.web.id${basePath}/`),
  title: {
    default: "Rian Anugrah — Fullstack Developer",
    template: "%s — Rian Anugrah",
  },
  description:
    "Rian Anugrah — Fullstack Developer building user-friendly, efficient web applications. A Metro-style personal dashboard of works, skills and shortcuts.",
  authors: [{ name: "Rian Anugrah" }],
  openGraph: {
    type: "website",
    title: "Rian Anugrah — Fullstack Developer",
    description:
      "A Metro-style personal dashboard of works, skills and shortcuts.",
    url: "./",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${condensed.variable} ${sans.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <ProfileProvider>
          <AppShell>
            <ProfileGate>{children}</ProfileGate>
          </AppShell>
        </ProfileProvider>

        <noscript>
          This dashboard needs JavaScript. Enable it to view the projects,
          skills and shortcut launcher.
        </noscript>
      </body>
    </html>
  );
}
