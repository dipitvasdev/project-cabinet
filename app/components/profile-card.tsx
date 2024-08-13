"use client";
import React from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className="bg-white px-7 pt-3 lg:flex items-center justify-center rounded-2xl outline-none hover:scale-105 active:scale-105 transition border border-black/10 dark:bg-white/10 shadow-lg col-span-4 hidden lg:h-full xl:h-[40rem]"
    >
      <div className="flex flex-col items-center pb-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
          }}
          className="font-bold text-2xl md:text-3xl mb-4 mt-4"
        >
          Dipit Vasdev
        </motion.h1>
        <motion.img
          className="rounded-3xl object-cover shadow-lg w-64 h-64 bg-transparent"
          src="dipit-nyu.jpeg"
          alt="Dipit Image"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-sm sm:text-base md:text-gl leading-relaxed mt-3 px-3 w-full text-center"
        >
          M.Sc. @ New York University
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-sm sm:text-base md:text-gl leading-relaxed mt-2 px-3 w-full text-center"
        >
          United States
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-sm sm:text-base md:text-gl leading-relaxed mt-2 mb-3 px-3 w-full text-center font-light"
        >
          Check out my profiles below:-
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="flex flex-row gap-4 mb-4"
        >
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            href="https://dipitvasdev.vercel.app/"
            target="_black"
          >
            <CgProfile />
          </a>
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            href="https://www.linkedin.com/in/dipit-vasdev/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            href="https://github.com/dipitvasdev"
            target="_black"
          >
            <BsGithub />
          </a>
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            href="https://leetcode.com/dipitvasdev"
            target="_black"
          >
            <SiLeetcode />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full"
        >
          <Link
            href="https://dipitvasdev.vercel.app/#contact"
            className="group w-full dark:bg-gradient-to-r dark:from-[#dbd7fb] dark:to-[#fbe2e3] dark:text-black px-3 py-3 flex items-center justify-center gap-2 rounded-2xl outline-none hover:active:scale-105 transition-all bg-gradient-to-r from-[#676394] to-[#946263] text-white"
          >
            Get in touch with me...{" "}
            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
