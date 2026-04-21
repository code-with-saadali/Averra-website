import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

/* ---------------- TYPES ---------------- */

type Project = {
  id: number;
  title: string;
  description: string;
  year: string;
  client: string;
  type: string;
  timeline: string;
  imagePosition: "left" | "right";
  image: string;
};

/* ---------------- DATA ---------------- */

const projects: Project[] = [
  {
    id: 1,
    title: "Nova Skincare.",
    description:
      "Crafted a refined digital identity and eCommerce experience for a luxury skincare brand, resulting in a 160% increase in online conversions.",
    year: "2025",
    client: "Nova Skincare",
    type: "Brand Identity",
    timeline: "3 Months",
    imagePosition: "right",
    image:
      "https://ik.imagekit.io/msmrd69gi/knos%20website/rfLNhHFuJhYpYHvFvLo4BBtc28.avif?updatedAt=1775552518777",
  },
  {
    id: 2,
    title: "Volt Mobility.",
    description:
      "Developed a high-performance website and multi-channel launch campaign for an electric mobility startup, driving a 3x growth in leads.",
    year: "2024",
    client: "Volt Mobility",
    type: "Marketing Campaign",
    timeline: "4 Months",
    imagePosition: "left",
    image:
      "https://ik.imagekit.io/msmrd69gi/knos%20website/pPk4LzlQQcnV8kGuwN1eECaNjU.avif?updatedAt=1775552518098",
  },
  {
    id: 3,
    title: "Maison.",
    description:
      "Produced a high-end brand campaign with visuals, storytelling, and paid media strategy that expanded audience reach by 200%.",
    year: "2022",
    client: "Maison & Co.",
    type: "Content Production",
    timeline: "4 Months",
    imagePosition: "right",
    image:
      "https://ik.imagekit.io/msmrd69gi/knos%20website/odKNp3OTJYMqGyFEXtwVCKxMt90.avif?updatedAt=1775548290330",
  },
  {
    id: 4,
    title: "Axis Tech.",
    description:
      "Redesigned the digital experience for a SaaS platform, improving usability and increasing user retention by 45%.",
    year: "2023",
    client: "Axis Tech",
    type: "UX/UI Design",
    timeline: "2.5 Months",
    imagePosition: "left",
    image:
      "https://ik.imagekit.io/msmrd69gi/knos%20website/yZoMvO0TESoI9cPhJlOtjaAmD4.avif?updatedAt=1775473758972",
  },
];

/* ---------------- META ROW ---------------- */

const MetaRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-2 py-1.5">
    <span className="text-sm text-gray-500 whitespace-nowrap">{label}</span>
    <div className="flex-1 border-b border-dashed border-gray-400" />
    <span className="text-sm text-black font-medium whitespace-nowrap">
      {value}
    </span>
  </div>
);

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({ project }: { project: Project }) => {
  const isLeft = project.imagePosition === "left";

  const image = (
    <div className="relative w-full md:flex-1 h-60 sm:h-80 md:min-h-137.5 overflow-hidden rounded-2xl cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );

  const text = (
    <div className="relative flex flex-col justify-between bg-white px-4 py-6 w-full md:w-[30%] rounded-2xl overflow-hidden">
      
      {/* animated dashed border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-dashed border-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="text-lg md:text-xl tracking-tighter font-semibold text-black mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-gray-500 leading-snug md:leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-5 relative z-10">
        <MetaRow label="Year" value={project.year} />
        <MetaRow label="Client" value={project.client} />
        <MetaRow label="Type" value={project.type} />
        <MetaRow label="Timeline" value={project.timeline} />
      </div>
    </div>
  );

  return (
    <div className="group flex flex-col md:flex-row gap-2 overflow-hidden">
      
      <div className="flex flex-col md:hidden gap-2">
        {image}
        {text}
      </div>

      {/* 💻 DESKTOP ORIGINAL LAYOUT */}
      <div className="hidden md:flex w-full gap-2">
        {isLeft ? (
          <>
            {image}
            {text}
          </>
        ) : (
          <>
            {text}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function FeaturedWork() {
  return (
    <div className="bg-[#EBEBEB]">
      <div className="min-h-screen py-20 md:py-28 min-[1920px]:max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-10 md:py-16 gap-6">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-medium">
              02 | <span className="text-black">Featured work</span>
            </p>
            <p className="text-sm text-gray-600 font-medium mt-1">
              50+ projects
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h1 className="text-center text-[34px] sm:text-[44px] md:text-[65px] font-semibold text-black tracking-tighter leading-[1.1]">
              Shaping timeless
              <br />
              visual identities.
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <button className="group flex items-center gap-2 font-semibold text-sm md:text-base border-b border-black">
              All projects
              <FaArrowRight className="transition-transform duration-500 -rotate-45 group-hover:rotate-0" />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="px-4 md:px-10 flex flex-col gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
