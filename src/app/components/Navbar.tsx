// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Brand with soft glow */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          elijah.dev
        </Link>

        <div className="flex items-center gap-6">
          {/* Nav links: clean, with hover glow */}
          <div className="hidden sm:flex space-x-6">
            <Link
              href="#about"
              className="hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] transition"
            >
              Contact
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}