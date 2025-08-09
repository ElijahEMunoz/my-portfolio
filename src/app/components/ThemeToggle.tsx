"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="text-xl p-2 rounded hover:bg-gray-800 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon
        icon={theme === "dark" ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition" : "line-md:sunny-filled-loop-to-moon-alt-filled-transition"}
        className="text-2xl"
      />
    </button>
  );
}
