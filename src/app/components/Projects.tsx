"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";

// Animation for card entrance
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        {/* 🔁 Carousel Showcase (enabled) */}
        <div className="mb-24">
          <ProjectsCarousel />
        </div>

        {/*
        🔒 Grid Layout (temporarily hidden)

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-2">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-xl hover:shadow-blue-500/40 transition w-full max-w-3xl mx-auto"
          >
            <Image
              src="/diff.png"
              alt="CartOptics Project"
              width={900}
              height={450}
              className="rounded-lg mb-6 object-cover h-64 w-full"
            />
            <h3 className="text-3xl font-bold mb-3">CartOptics (Capstone)</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Qualcomm-sponsored AR+AI app using Snapdragon Spaces and Gemini API to recognize grocery items and enhance shopping with real-time product insights.
            </p>
            <div className="flex flex-wrap gap-4 text-3xl text-gray-300 mb-6">
              <Icon icon="logos:unity" />
              <Icon icon="devicon:csharp" />
              <Icon icon="logos:snapdragon" />
              <Icon icon="logos:onnx" />
              <Icon icon="devicon:googlecloud" />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-white font-medium text-sm"
              >
                View Code
              </a>
              <a
                href="#"
                className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black text-sm"
              >
                Presentation
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-xl hover:shadow-blue-500/40 transition w-full max-w-3xl mx-auto"
          >
            <Image
              src="/miaminight.png"
              alt="Miami Night Collectors"
              width={800}
              height={400}
              className="rounded-lg mb-6 object-cover h-64 w-full"
            />
            <h3 className="text-3xl font-bold mb-3">Miami Night Collectors</h3>
            <p className="text-gray-400 mb-6 text-lg">
              A fast-paced mobile platformer built in Unity + C#, inspired by Geometry Dash. Navigate obstacles and collect coins through vibrant retro levels.
            </p>
            <div className="flex flex-wrap gap-4 text-3xl text-gray-300 mb-6">
              <Icon icon="logos:unity" />
              <Icon icon="devicon:csharp" />
              <Icon icon="logos:android-icon" />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-white font-medium text-sm"
              >
                View Code
              </a>
              <a
                href="#"
                className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black text-sm"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-xl hover:shadow-blue-500/40 transition w-full max-w-3xl mx-auto"
          >
            <Image
              // src="/dndcreator.png"
              alt="DND Character Creator"
              width={800}
              height={400}
              className="rounded-lg mb-6 object-cover h-64 w-full"
            />
            <h3 className="text-3xl font-bold mb-3">DND Character Creator</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Desktop software for Dungeons & Dragons players. Built with JavaFX, offering full customization of race, class, stats, and exportable character sheets.
            </p>
            <div className="flex flex-wrap gap-4 text-3xl text-gray-300 mb-6">
              <Icon icon="devicon:java" />
              <Icon icon="logos:javafx" />
              <Icon icon="material-symbols:desktop-windows" />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-white font-medium text-sm"
              >
                View Code
              </a>
              <a
                href="#"
                className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black text-sm"
              >
                Demo Video
              </a>
            </div>
          </motion.div>
        </div>
        */}
      </div>
    </section>
  );
}
