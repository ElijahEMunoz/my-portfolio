// src/app/layout.tsx
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar"; // ✅ Correct import

export const metadata = {
  title: "Elijah Munoz | Software Engineer",
  description: "Portfolio of Elijah Munoz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* ✅ Use the Navbar component here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
