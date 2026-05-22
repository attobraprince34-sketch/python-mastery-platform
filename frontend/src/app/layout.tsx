import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Python Mastery Platform",
  description:
    "Ultra-advanced personal e-learning platform for mastering Python and all its professional ecosystems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="font-sans antialiased bg-[#0a0a0b] text-white min-h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-[260px] min-h-screen transition-all duration-300">
            <Header />
            <main className="relative">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
