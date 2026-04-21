"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiInstagram, FiGlobe, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ SCROLL LOCK LOGIC
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
        <div className="w-[95%] backdrop-blur-md bg-white rounded-2xl px-6 py-2.5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-[19px] font-medium tracking-tighter z-50">
            Averra®
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-6">

            {!open && (
              <div className="md:flex items-center tracking-tight gap-4 text-sm font-semibold hidden">
                {["Studio", "Projects", "Blog", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="group relative overflow-hidden h-5"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {item}
                    </span>
                    <span className="block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* Hamburger */}
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 cursor-pointer z-50"
            >
              <span
                className={`w-7 h-0.5 bg-black transition-all duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-0.5 bg-black transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-between items-center
        transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110 pointer-events-none"
        }`}
      >
        {/* CENTER LINKS */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center tracking-[-0.02em] text-[70px] font-semibold leading-[1.05]">
            {["Home", "Studio", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group relative overflow-hidden h-20"
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {item}
                </span>
                <span className="block absolute left-0 text-red-700 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pb-10 flex flex-col items-center gap-1 text-center">
          <p className="text-lg font-semibold tracking-tight">hello@kanso.studio</p>
          <p className="text-sm font-medium">(123) 456-7890</p>

          <div className="flex gap-3 mt-5 text-lg">
            <FaXTwitter className="cursor-pointer hover:opacity-60 transition" />
            <FiInstagram className="cursor-pointer hover:opacity-60 transition" />
            <FiGlobe className="cursor-pointer hover:opacity-60 transition" />
            <FiLinkedin className="cursor-pointer hover:opacity-60 transition" />
          </div>
        </div>
      </div>
    </>
  );
}
