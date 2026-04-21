"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

/* ---------------- TYPES ---------------- */

type GridItem =
  | { type: "empty" }
  | { type: "stat"; value: string; symbol: string; label: string }
  | { type: "image"; src: string };

type RowProps = {
  items: GridItem[];
  move: MotionValue<number>;
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const moveRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const moveLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const gridItems: GridItem[] = [
    { type: "empty" },
    { type: "stat", value: "12", symbol: "+", label: "Years of experience" },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    { type: "empty" },
    { type: "stat", value: "95", symbol: "+", label: "Brands Elevated" },

    { type: "empty" },
    { type: "stat", value: "200", symbol: "%", label: "Average Growth" },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    { type: "empty" },
    { type: "stat", value: "1M", symbol: "+", label: "Campaign Impressions" },
  ];

  return (
    <section ref={ref} className="bg-[#EBEBEB]">
      <div className="py-20 px-4 md:px-10 overflow-hidden min-[1920px]:max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-base font-medium text-[#A8A8A8] mb-4">
                01 | <span className="text-black">About us</span>
              </p>
              <p className="text-[#919191] text-sm">© 2025</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.1] mb-6 max-w-2xl mt-5">
              Averra is a digital agency that help brands stand out and scale
              with bold design and smart marketing.
            </h1>

            <p className="text-[#747474] max-w-md font-semibold mb-8">
              We blend bold creativity with strategic <br /> insight to help
              brands lead in the digital age.
            </p>

            <button className="group flex items-center cursor-pointer gap-2 font-semibold text-base border-b border-black pb-1">
              More about us
              <FaArrowRight className="transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden">
            {/* fade left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-[#EBEBEB] to-transparent z-10" />

            {/* fade right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-[#EBEBEB] to-transparent z-10" />

            <div className="flex flex-col gap-4">
              <Row items={gridItems.slice(0, 3)} move={moveRight} />
              <Row items={gridItems.slice(3, 6)} move={moveLeft} />
              <Row items={gridItems.slice(6, 9)} move={moveRight} />
              <Row items={gridItems.slice(9, 12)} move={moveLeft} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ROW ---------------- */

function Row({ items, move }: RowProps) {
  return (
    <div className="overflow-hidden">
      <motion.div style={{ x: move }} className="flex gap-4 w-max mx-auto">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="w-28 shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- RENDER ITEM ---------------- */

function renderItem(item: GridItem) {
  if (item.type === "empty") {
    return <div className="h-28 w-full bg-white rounded-xl" />;
  }

  if (item.type === "stat") {
    return (
      <div className="h-28 w-full bg-white rounded-xl p-4 flex flex-col justify-center">
        <h2 className="text-xl font-semibold">
          {item.value}
          <span className="text-red-500">{item.symbol}</span>
        </h2>
        <p className="text-xs text-gray-500">{item.label}</p>
      </div>
    );
  }

  if (item.type === "image") {
    return (
      <div className="relative h-28 w-full rounded-xl overflow-hidden">
        <Image src={item.src} alt="about image" fill className="object-cover" />
      </div>
    );
  }

  return null;
}
