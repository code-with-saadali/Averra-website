"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiInstagram, FiGlobe, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  /* ---------------- SCROLL SHOW/HIDE ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(
        currentScrollY < lastScrollY.current || currentScrollY < 10
      );

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------- SCROLL LOCK ---------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-4 left-0 w-full z-50 flex justify-center"
      >
        <div className="backdrop-blur-md bg-white rounded-2xl px-6 py-2.5 flex items-center justify-between w-full mx-4 md:mx-10 min-[1920px]:max-w-7xl min-[1920px]:mx-auto">

          {/* LOGO */}
          <Link
            href="/"
            className="text-[19px] font-medium tracking-tighter z-50"
          >
            Averra®
          </Link>

          {/* LINKS */}
          <div className="flex items-center gap-6">

            {!open && (
              <div className="hidden md:flex items-center gap-4 text-sm font-semibold tracking-tight">
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

            {/* HAMBURGER */}
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 cursor-pointer z-50"
            >
              <span
                className={`w-7 h-0.5 bg-black transition-all duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-7 h-0.5 bg-black transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110 pointer-events-none"
        }`}
      >
        {/* CENTER LINKS */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center text-[60px] md:text-[70px] font-semibold leading-[1.05] tracking-[-0.02em]">

            {["Home", "Studio", "Projects", "Blog", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="group relative overflow-hidden"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {item}
                  </span>
                  <span className="block absolute left-0 top-0 translate-y-full text-red-700 transition-transform duration-300 group-hover:translate-y-0">
                    {item}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pb-10 flex flex-col items-center gap-1 text-center">
          <p className="text-lg font-semibold tracking-tight">
            hello@kanso.studio
          </p>
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
