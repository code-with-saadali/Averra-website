"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

/* ---------------- DATA ---------------- */

const features = [
  {
    id: 1,
    icon: "🎨",
    title: "Design with Depth",
    description:
      "Our work is visually striking and strategically built to connect deeply with audiences across every touchpoint.",
    image: null,
    row: 1,
  },
  {
    id: 2,
    icon: null,
    title: null,
    description: null,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop",
    row: 1,
  },
  {
    id: 3,
    icon: "📈",
    title: "Marketing with Meaning",
    description:
      "We create meaningful campaigns designed to engage audiences and build lasting emotional brand connections.",
    image: null,
    row: 1,
  },
  {
    id: 4,
    icon: null,
    title: null,
    description: null,
    image: null,
    isEmpty: true,
    row: 1,
  },

  {
    id: 5,
    icon: null,
    title: null,
    description: null,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80&fit=crop",
    row: 2,
  },
  {
    id: 6,
    icon: "🤝",
    title: "Partnership over Projects",
    description:
      "We act as a long-term creative partner focused on growth, consistency, and measurable brand success.",
    image: null,
    row: 2,
  },
  {
    id: 7,
    icon: null,
    title: null,
    description: null,
    image: null,
    isEmpty: true,
    row: 2,
  },
  {
    id: 8,
    icon: "⚙️",
    title: "Refined Processes",
    description:
      "Our transparent workflow ensures smooth collaboration, clarity, and efficiency at every stage of execution.",
    image: null,
    row: 2,
  },

  {
    id: 9,
    icon: "✨",
    title: "Innovation as Standard",
    description:
      "We continuously explore modern tools and ideas to keep your brand ahead in a fast-moving digital world.",
    image: null,
    row: 3,
  },
  {
    id: 10,
    icon: null,
    title: null,
    description: null,
    image: null,
    isEmpty: true,
    row: 3,
  },
  {
    id: 11,
    icon: "🌍",
    title: "Global Perspective",
    description:
      "We design scalable strategies that work across markets and adapt seamlessly to global audiences and trends.",
    image: null,
    row: 3,
  },
  {
    id: 12,
    icon: null,
    title: null,
    description: null,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop",
    row: 3,
  },
];

/* ---------------- ROW ---------------- */

function Row({
  items,
  move,
}: {
  items: typeof features;
  move: MotionValue<number>;
}) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <motion.div style={{ x: move }} className="flex gap-3 w-max">
        {loop.map((item, index) => {
          if (item.image) {
            return (
              <div
                key={index}
                className="w-44 md:w-65 h-32 md:h-45 rounded-2xl overflow-hidden shrink-0"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          }

          if (item.isEmpty) {
            return (
              <div
                key={index}
                className="w-44 md:w-65 h-32 md:h-45 rounded-2xl bg-[#f0efed] shrink-0"
              />
            );
          }

          return (
            <div
              key={index}
              className="w-72 md:w-105 h-32 md:h-45 rounded-2xl bg-[#f5f4f2] p-4 md:p-5 shrink-0 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-sm md:text-lg font-semibold text-black">
                  {item.title}
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-500 font-medium leading-[1.2]">
                {item.description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function WhyUs() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const moveRight = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const moveLeft = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const row1 = features.filter((f) => f.row === 1);
  const row2 = features.filter((f) => f.row === 2);
  const row3 = features.filter((f) => f.row === 3);

  return (
     <div ref={ref} className="min-h-screen bg-white">
      <div className="px-4 md:px-10 py-12 overflow-hidden min-[1920px]:max-w-7xl mx-auto">
        
        {/* HEADER */}
        <p className="text-sm md:text-base text-gray-500 mb-1 font-medium">
          <span className="text-gray-800">05</span> |{" "}
          <span className="font-semibold text-gray-900">Why us</span>
        </p>

        <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8">
          Averra®
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-[100px] tracking-tight md:tracking-tighter font-semibold leading-[1.1] md:leading-none mb-8 md:mb-12">
          <span className="text-black">
            At Averra, we approach every project with a blend of{" "}
          </span>
          <span className="text-[#9E9E9E]">
            bold creativity, sharp strategy, and uncompromising attention to detail.
          </span>
        </h1>

        {/* GRID */}
        <div className="flex flex-col gap-3">
          <Row items={row1} move={moveRight} />
          <Row items={row2} move={moveLeft} />
          <Row items={row3} move={moveRight} />
        </div>
      </div>
    </div>
  );
}
