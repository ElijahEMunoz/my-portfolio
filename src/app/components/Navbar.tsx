// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold">
          elijah.dev
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex space-x-6">
            <Link href="#about" className="hover:text-blue-400 transition">About</Link>
            <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="#experience" className="hover:text-blue-400 transition">Experience</Link>
            <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* 🌗 Light/Dark Mode Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
