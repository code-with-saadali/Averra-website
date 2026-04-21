"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaAngleDown } from "react-icons/fa6";

/* ---------------- DATA ---------------- */

const services = [
  {
    id: "01",
    title: "Branding",
    description:
      "We build bold, refined identities and visuals that embody your brand's essence and resonate with your audience.",
    tags: [
      "Brand Identity Design",
      "Logo & Visual Systems",
      "Brand Guidelines & Collateral",
      "Digital Asset Creation",
    ],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80&fit=crop",
  },
  {
    id: "02",
    title: "Digital Design",
    description:
      "We craft seamless digital experiences — from websites to apps — that combine aesthetics with performance.",
    tags: ["UI/UX Design", "Web Design", "Interaction Design", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&fit=crop",
  },
  {
    id: "03",
    title: "Marketing Strategy",
    description:
      "Data-driven campaigns and creative strategies that grow your audience and convert attention into results.",
    tags: [
      "Campaign Strategy",
      "Paid Media",
      "SEO & Content",
      "Growth Marketing",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&fit=crop",
  },
  {
    id: "04",
    title: "Creative Production",
    description:
      "High-end photo, video, and motion content that tells your brand story with impact and authenticity.",
    tags: ["Photography", "Video Production", "Motion Design", "Copywriting"],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80&fit=crop",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const active = services[openIndex];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="px-4 md:px-10 py-16 min-[1920px]:max-w-7xl mx-auto">
        {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-sm text-white/70 font-medium">
            02 | <span className="text-white">Services</span>
          </p>
          <p className="text-sm text-white/70 font-medium mt-1">Averra®</p>
        </div>

        {/* CENTER */}
        <div>
          <h1 className=" text-xl font-semibold text-white tracking-tight leading-[1.1]">
            <span className="pl-16">We combine creativity and</span> <br />{" "}
            strategy to deliver{" "}
            <span className="text-white/60">
              digital experiences <br /> that elevate brands.
            </span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <button className="group flex items-center gap-2 font-semibold cursor-pointer text-sm md:text-base border-b border-white">
            See Pricing
            <FaArrowRight className="transition-transform duration-500 rotate-45 group-hover:rotate-0" />
          </button>
        </div>
      </div>

        {/* BODY */}
        <div className="flex flex-col md:flex-row gap-10 pt-12 md:pt-20">
          {/* LEFT SIDE */}
          <div className="w-full md:w-[35%]">
            <motion.p
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl md:text-[32px] mb-3"
            >
              ({active.id})
            </motion.p>

            <motion.p
              key={active.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white/70 mb-4 md:mt-77.5"
            >
              {active.title}
            </motion.p>

            <motion.img
              key={active.image}
              src={active.image}
              className="w-full h-64 md:h-80 object-cover rounded-2xl grayscale"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col gap-3">
            {services.map((service, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setOpenIndex(i)}
                  className="rounded-xl border border-dashed cursor-pointer overflow-hidden"
                  animate={{
                    backgroundColor: isOpen ? "#f2f0eb" : "#121212",
                    borderColor: isOpen ? "#f2f0eb" : "#2a2a2a",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* TITLE */}
                  <div className="flex items-center justify-between px-5 md:px-8 py-6 md:py-10">
                    <motion.h2
                      className="text-2xl md:text-[38px] font-bold"
                      animate={{ color: isOpen ? "#111" : "#555" }}
                    >
                      {service.title}
                    </motion.h2>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaAngleDown
                        className="text-lg md:text-xl"
                        style={{ color: isOpen ? "#e05252" : "#555" }}
                      />
                    </motion.div>
                  </div>

                  {/* BODY */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-8 pb-6 md:pb-8">
                          <div className="border-t border-dashed border-gray-400 mb-6 md:mb-10" />

                          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                            <p className="text-sm text-gray-600 max-w-sm">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] md:text-[12px] bg-white/80 text-gray-700 px-3 py-1.5 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
