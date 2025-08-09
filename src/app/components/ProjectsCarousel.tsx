"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const clear = () => clearTimeout(timeout);
        const next = () => {
          clear();
          timeout = setTimeout(() => slider.next(), 7000);
        };
        slider.on("created", next);
        slider.on("dragStarted", clear);
        slider.on("animationEnded", next);
        slider.on("updated", next);
      },
    ]
  );

  const techGlowMap: { [key: string]: string } = {
    "logos:unity": "ring-purple-500",
    "devicon:csharp": "ring-indigo-500",
    "logos:snapdragon": "ring-red-500",
    "logos:onnx": "ring-cyan-500",
    "devicon:googlecloud": "ring-yellow-400",
    "logos:android-icon": "ring-green-500",
    "devicon:java": "ring-orange-500",
    "logos:javafx": "ring-blue-400",
    "material-symbols:desktop-windows": "ring-slate-400",
  };

  const projects = [
    {
      title: "CartOptics (Capstone)",
      description:
        "Qualcomm-sponsored AR+AI app using Snapdragon Spaces and Gemini API to recognize grocery items and enhance shopping with real-time product insights.",
      image: "/diff.png",
      tech: ["logos:unity", "devicon:csharp", "logos:snapdragon", "logos:onnx", "devicon:googlecloud"],
      codeLink: "https://github.com/kbeck473/CartOptics",
      demoLabel: "Video Demo",
      demoLink: "/vids/CO.mp4",
      year: 2025,
    },
    {
      title: "Miami Night Collectors",
      description:
        "Geometry Dash-style mobile platformer built in Unity + C#. Fast-paced, retro-inspired level design with collectible mechanics.",
      image: "/NM.png",
      tech: ["logos:unity", "devicon:csharp", "logos:android-icon"],
      codeLink: "#",
      demoLabel: "Live Demo",
      demoLink: "#",
      year: 2024,
    },
    {
      title: "DND Character Creator",
      description:
        "Desktop JavaFX app that lets users generate full D&D characters. Highly customizable and exportable builds.",
      image: "/dnd.png",
      tech: ["devicon:java", "logos:javafx", "material-symbols:desktop-windows"],
      codeLink: "https://github.com/edgarf25/SE370-2023-Team1-DND_CC?tab=readme-ov-file",
      demoLabel: "Demo Video",
      demoLink: "/vids/ProjectShowcaseVideo.mp4",
      year: 2023,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="text-white text-2xl hover:text-blue-400 transition"
        >
          ←
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="text-white text-2xl hover:text-blue-400 transition"
        >
          →
        </button>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, index) => {
          const glowClass = techGlowMap[project.tech[0]] || "ring-blue-500";
          return (
            <div key={index} className="keen-slider__slide perspective h-[38rem] max-w-3xl mx-auto">
              <div className="relative w-full h-full card-hover">
                <div
                  className={`card-flip w-full h-full relative transition-transform duration-1000 transform-style preserve-3d bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg ring-2 ring-offset-2 ring-offset-zinc-900 ${glowClass}`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden p-6 flex flex-col justify-between">
                    <div className="overflow-hidden rounded-lg mb-4 h-64 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={700}
                        className="rounded-lg w-full h-full object-contain"
                      />
                    </div>

                    <h3 className="text-4xl font-bold text-white text-center mb-0">
                      {project.title}
                    </h3>
                    <div className = "mt-1">
                      <p className="text-gray-400 text-base text-center mb-0">Tools Used:</p>
                      <div className="flex justify-center gap-3 text-6xl text-gray-300 mt-1">
                        {project.tech.map((icon, i) => (
                          <Icon
                            key={i}
                            icon={icon}
                            className="transition-transform duration-300 hover:scale-125 hover:text-white"
                          />
                        ))}
                      </div>
                    </div>


                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden p-6 flex flex-col justify-between text-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                      <p className="text-gray-400 mb-4">📅 Built in {project.year}</p>
                      <p className="text-gray-400 text-sm mb-1">Tools Used:</p>
                      <div className="flex justify-center gap-4 text-5xl text-gray-300">
                        {project.tech.map((icon, i) => (
                          <Icon
                            key={i}
                            icon={icon}
                            className="transition-transform duration-300 hover:scale-125 hover:text-white"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center mt-4">
                      <a
                        href={project.codeLink}
                        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white text-sm"
                      >
                        View Code
                      </a>
                      <a
                        href={project.demoLink}
                        target ="_blank"
                        rel="noopener noreferrer"
                        className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black text-sm"
                      >
                        {project.demoLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-blue-500 scale-110" : "bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
