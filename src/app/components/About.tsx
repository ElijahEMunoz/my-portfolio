"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I’m Elijah Munoz, a driven Software Engineer based in California. I'm passionate about building intuitive applications  from full stack web apps to cutting-edge AR+AI experiences. With experience in React, Next.js, Unity, and machine learning, I thrive on solving problems and learning fast.
          </p>
          <p className="text-lg text-gray-400">
            My goal is to become a top-tier engineer, build innovative tools, and create impact through tech  while constantly leveling up and helping others along the way.
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/webpf.png" // update with your actual filename inside /public
            alt="Elijah Munoz"
            width={300}
            height={300}
            className="rounded-xl border-4 border-blue-600 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
