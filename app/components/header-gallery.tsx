"use client";
import React from "react";
import { motion } from "framer-motion";
import LogoLight from "@/public/Project Cabinet_transparent-.png";
import Image from "next/image";
import LogoDark from "@/public/Project Cabinet_transparent-dark.png";

export default function HeaderGallery() {
  return (
    <header className="text-center col-span-3 -rotate-12 flex-row gap-10 items-center justify-center sm:mt-6 mt-1 transition-all hidden md:flex">
      {/* <div className="flex flex-col items-center justify-center transition-all">
        <Image
          alt="Dipit Portrait"
          src={profileImage}
          quality="95"
          priority={true}
          className="sm:h-32 sm:w-32 hidden sm:block rounded-full border-[0.35rem] object-cover border-white shadow-xl transition-all"
        />
        <motion.span
          className={`mt-3 dark:text-white text-[#583F29ff] text-4xl font-bold rotate-45 ${courier.className} hidden sm:block transition-all`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.5,
            duration: 0.7,
          }}
        >
          {"{"}Dipit's{"}"}
        </motion.span>
      </div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.2,
        }}
        className="flex-col items-center justify-center"
      >
        <Image
          src={LogoLight}
          alt="Project Cabinet"
          width={400}
          priority={true}
          className="dark:hidden -left-4 sm:-left-0"
        />
        <Image
          src={LogoDark}
          alt="Project Cabinet"
          width={400}
          priority={true}
          className="hidden dark:block"
        />
        <motion.span
          className={`dark:text-white text-[#583F29ff] text-lg font-bold rotate-45 transition-all text-center`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.5,
            duration: 0.7,
          }}
        >
          By Dipit
        </motion.span>
      </motion.div>
    </header>
  );
}
