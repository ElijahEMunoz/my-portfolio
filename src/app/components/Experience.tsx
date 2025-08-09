"use client";

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {/* Experience Card 1 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-1">Qualcomm CartOptics Software Engineer Student </h3>
            <p className="text-sm text-gray-400 mb-2">Qualcomm · 2024 – 2025</p>
            <p className="text-gray-300">
              Developing an AR-based smart shopping assistant using Qualcomm Snapdragon Spaces SDK, Unity, and 
              Lenovo ThinkReality A3 glasses.
              
              Delivered key UI features, including nutritional insights, Calorie Counter, and pricing information, 
              optimizing user interactions with advanced object recognition and tailored visual feedback. 
            </p>
          </div>

  
          {/* Experience Card 2 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-md"> 
            <h3 className="text-2xl font-semibold mb-1">Web-Developer </h3>
            <p className="text-sm text-gray-400 mb-2">elijah.dev · 2025 – Present</p>
            <p className="text-gray-300">
                Built and deployed a modern, high-performance personal portfolio site with Next.js, React, and Tailwind CSS, achieving fast load times and mobile responsiveness. Integrated a dynamic projects carousel, interactive animations, and downloadable resources to effectively present skills and work samples to potential employers.
            </p>
          </div>

          {/* Experience Card 3 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-1">Code Instructor</h3>
            <p className="text-sm text-gray-400 mb-2">Treobytes · 2021 – 2022</p>
            <p className="text-gray-300">
               Taught Python programming and game development to children, emphasizing Python's capabilities and 
               fostering an understanding of how hardware and software integrate to create functional systems.   
            </p>
          </div>





        </div>
      </div>
    </section>
  );
}
