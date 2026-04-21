"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    id: "01",
    title: "Immersion",
    description:
      "We dive deep into your world, exploring your brand, your market, and your audience until we see what others dont",
  },
  {
    id: "02",
    title: "Vision Crafting",
    description:
      "Together, we define a clear creative and strategic direction that becomes the foundation for every design and campaign.",
  },
  {
    id: "03",
    title: "Creative Alchemy",
    description:
      "Ideas turn into experiences. We blend bold design, smart marketing, and innovative thinking to craft work that stands apart.",
  },
  {
    id: "04",
    title: "Launch with Impact",
    description:
      "Every detail matters. We roll out your brand or campaign with precision, ensuring maximum reach and resonance.",
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-[#EBEBEB]">
      <div className="px-4 md:px-10 py-28 min-[1920px]:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
        {/* ── LEFT PANEL ── */}
        <div className="w-full md:w-[45%] md:sticky md:top-24">
          <p className="text-base text-[#6B6B6B] font-medium tracking-tighter mb-5">
            <span className="text-[#A1A1A1]">04</span>
            <span className="text-[#A1A1A1] mx-1.5">|</span>
            <span className="text-[#111] font-semibold">Process</span>
          </p>

          <h1 className="text-2xl md:text-5xl font-medium leading-[1.1] tracking-tighter text-[#111] mb-5">
            Every step is collaborative <br /> and tailored to your <br />{" "}
            brand&apos;s goals.
          </h1>

          <p className="text-sm text-[#6B6B6B] font-medium leading-[1.1] mb-7 max-w-sm">
            Every brand has a story, our process is designed to uncover it,
            shape it, and share it with the world.
          </p>

          <button className="group flex items-center cursor-pointer gap-2 font-semibold text-base border-b border-black pb-1">
            Let&apos;s talk
            <FaArrowRight className="transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
          </button>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="flex-1 flex flex-col gap-3 w-full">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-3 items-stretch">
              {/* STEP INDICATOR */}
              <div className="flex flex-col items-center justify-between py-5 w-10 shrink-0 border-2 border-white bg-white/40 rounded-full">
                <span className="text-sm text-gray-600 font-medium">
                  {step.id}
                </span>

                <div className="flex flex-col gap-0.75">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="block w-3 h-0.5 bg-[#E05252] rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* CARD */}
              <div className="flex-1 bg-white rounded-2xl px-5 md:px-7 pt-6 pb-6 relative overflow-hidden min-h-45 md:min-h-62.5 flex flex-col justify-between border border-[#EAEAEA]">
                <span
                  className="absolute bottom-3 right-3 hidden md:block md:right-5 text-[60px] md:text-[80px] font-semibold text-[#F1F1F1] leading-none select-none pointer-events-none"
                  style={{ letterSpacing: "-4px" }}
                >
                  {step.id}
                </span>

                {/* TITLE */}
                <h2 className="text-lg md:text-2xl font-semibold text-[#111] tracking-tighter">
                  {step.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm font-medium text-[#6B6B6B] leading-[1.1] max-w-sm relative z-10 mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
