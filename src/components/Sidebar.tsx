"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-white text-gray-800 shadow-lg transform
          md:translate-x-0 md:static md:flex
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-20
        `}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">GateRole</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="hover:text-blue-500 transition"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-500 transition"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-0 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md z-0">
          <button
            className="text-2xl font-bold md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="flex-1 flex justify-end">
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold">
              Çıkış
            </button>
          </div>
        </header>

        {/* Content area */}
        <main className="p-6 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
