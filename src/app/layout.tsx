"use client";

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 flex flex-col min-h-screen">
        {/* Layout component'i children'ı alacak */}
        <Sidebar>{children}</Sidebar>
        <Footer />
      </body>
    </html>
  );
}
