"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Hero() {
  const [showPlay, setShowPlay] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section className="bg-[#EBEBEB]">
      <div className="pt-34 pb-6 flex flex-col md:flex-row overflow-hidden px-4 md:px-10 gap-5 min-[1920px]:max-w-7xl mx-auto min-h-screen">
        {/* LEFT */}
        <div className="flex flex-col gap-6 w-full md:w-[78%]">
          <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[7rem] font-semibold tracking-tighter leading-none shrink-0">
            Averra — Studio®
          </h1>

          {/* IMAGE */}
          <div
            className="relative w-full h-70 sm:h-90 md:flex-1 md:min-h-0 rounded-2xl overflow-hidden cursor-none group"
            onMouseMove={(e) => {
              setPos({
                x: e.nativeEvent.offsetX,
                y: e.nativeEvent.offsetY,
              });
            }}
            onMouseEnter={() => setShowPlay(true)}
            onMouseLeave={() => setShowPlay(false)}
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&fit=crop&crop=top"
              alt="Studio"
              fill
              className="object-bottom object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              priority
            />

            {showPlay && (
              <div
                className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 pointer-events-none transition-transform duration-100"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <FiPlay className="text-white text-2xl ml-1" />
              </div>
            )}

            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap z-10">
              Play Showreel
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between w-full md:w-[22%] gap-6 md:gap-0">
          <div className="leading-[1.1] font-medium text-lg md:pt-12">
            <p>We create timeless design</p>
            <p>
              and strategic marketing that{" "}
              <span className="text-[#6E6E6E]">make</span>
            </p>
            <p className="text-[#6E6E6E]">brands impossible to ignore.</p>
          </div>

          <hr className="border-dashed border-[#6E6E6E]" />

          <ul>
            {[
              "Branding",
              "Digital design",
              "Marketing strategy",
              "Creative production",
            ].map((s) => (
              <li
                key={s}
                className="flex justify-between items-center text-sm text-black font-medium border-b border-gray-200 hover:text-red-600 transition"
              >
                {s} <span className="text-[#6E6E6E] text-xs">—</span>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-xs text-[#6E6E6E]">© 2017 - 25</p>
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Based in Germany
            </p>

            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#E03F2F" }}>
                  ★
                </span>
              ))}
              <span className="text-sm font-bold text-gray-800 ml-1">
                4.9/5
              </span>
            </div>

            <p className="text-xs text-gray-500">
              We&apos;ve helped{" "}
              <strong className="text-gray-700">95+ brands</strong>
              <br />
              elevate their businesses
            </p>

            <hr className="border-dashed border-[#6E6E6E] my-4" />

            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Sep.
            </div>

            {/* BUTTON */}
            <button className="group relative w-full overflow-hidden flex items-center justify-between font-semibold text-sm pl-5 pr-1 py-1 rounded-[18px] cursor-pointer transition-all duration-500 bg-[#E03F2F] hover:bg-white border border-transparent hover:border-dashed hover:border-red-500">
              <span className="relative block h-6 overflow-hidden">
                <span className="block text-white text-lg tracking-tight transition-all duration-500 group-hover:-translate-y-full group-hover:text-black">
                  Start a Project
                </span>
                <span className="absolute left-0 top-0 translate-y-full text-lg tracking-tight text-white transition-all duration-500 group-hover:translate-y-0 group-hover:text-black">
                  Start a Project
                </span>
              </span>

              <span className="w-11 h-11 flex items-center justify-center text-lg text-[#E03F2F] rounded-[13px] bg-white transition-all duration-500">
                <FiArrowRight className="transition-transform duration-500 -rotate-45 group-hover:rotate-0" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
