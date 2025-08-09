"use client";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-black text-white py-20 px-6 max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold">
            Elijah Munoz <span className="inline-block animate-bounce">🚀</span>
          </h1>
          <h2 className="text-2xl text-blue-400 font-semibold">
            Software Engineer | Full Stack Developer | AR + AI Enthusiast
          </h2>
          <p className="text-gray-300">
            I build blazing-fast and elegant web apps using React, Next.js, and Tailwind CSS — powered by curiosity and creativity.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="/Elijah_Munoz_Resume.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <img
            src="/eli.png"
            alt="Elijah Munoz"
            className="rounded-full border-4 border-blue-500 shadow-lg w-64 h-64 object-cover object-top mx-auto"
          />
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
