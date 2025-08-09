"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contact(){
const [copied, setCopied] = useState(false);


const copyEmail = async() => {
  await navigator.clipboard.writeText("elijahesmunoz@gmail.com");
  setCopied(true); 
  setTimeout(() => setCopied(false), 1800);
}; //End of Const CopyFunction 

return (
   <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind or want to collaborate? I’m all ears—let’s build something great.
        </p>

        {/* Highlighted card */}
        <div className="relative mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/40 to-fuchsia-500/40">
          <div className="rounded-2xl bg-zinc-900/80 backdrop-blur px-6 py-8">
            {/* Primary email row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="mailto:elijahesmunoz@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-medium glow"
              >
                <Icon icon="mdi:email" className="text-xl" />
                Email me
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-zinc-600 hover:border-zinc-400 transition text-white"
              >
                <Icon icon="mdi:content-copy" className="text-xl" />
                {copied ? "Copied!" : "Copy address"}
              </button>
            </div>

            {/* Socials */}
            <div className="flex justify-center flex-wrap gap-3">
              <a
                href="https://github.com/ElijahEMunoz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition text-white"
              >
                <Icon icon="mdi:github" className="text-2xl" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/elijah-munoz-466640281"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#0a66c2] hover:bg-[#0a57a8] transition text-white"
              >
                <Icon icon="mdi:linkedin" className="text-2xl" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Or reach me directly at <span className="text-gray-300">elijahesmunoz@gmail.com</span>
        </p>
      </div>
    </section>
  );
}

