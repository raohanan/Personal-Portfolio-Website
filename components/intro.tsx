"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setactiveState, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem]
    text-center sm:mb-0 scroll-mt-96"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Abdul,s Profile Picture"
              width={192}
              height={192}
              quality={100}
              priority
              className="h-36 w-36 rounded-full
        object-cover border-[0.35rem]
        border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0
          text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Hanan Rao.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row
      items-center justify-center gap-4 px-4 first-letter:text-lf 
      font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7
        py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110
        hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setactiveState("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7
        py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110
        hactive:scale-105 transition 
        cursor-pointer "
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/abdul-hanan-17b69623a"
          target="_blank"
          className="bg-white p-4 text-gray-700
        flex items-center gap-2 rounded-full text-[1.15rem]
        outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
        active:scale-105 transition"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/raohanan"
          target="_blank"
          className="bg-white p-4 text-gray-700
        flex items-center gap-2 rounded-full text-[1.35rem]
        outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]
        active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
