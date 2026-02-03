
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });
const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif"
});

export const metadata: Metadata = {
  title: "DepDok - Offline-First Markdown Editor for Developers",
  description: "The lightweight, offline-first editor for developers. Manage .md, .mermaid, and .todo files with ease. No cloud, no internet—just your files, your way.",
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "DepDok - Offline-First Markdown Editor for Developers",
    description: "The lightweight, offline-first editor for developers. Manage .md, .mermaid, and .todo files with ease.",
    images: ["/Screenshot 2026-02-02 at 22.08.01.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DepDok - Offline-First Markdown Editor for Developers",
    description: "The lightweight, offline-first editor for developers. Manage .md, .mermaid, and .todo files with ease.",
    images: ["/Screenshot 2026-02-02 at 22.08.01.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSerif.variable}`}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
