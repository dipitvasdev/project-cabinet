"use client";
import React from "react";
import { motion } from "framer-motion";
import TypeWritter from "./typewritter";
import ExploreButton from "./explore-button";
import LogoLight from "@/public/Project Cabinet_transparent-.png";
import Image from "next/image";
import LogoDark from "@/public/Project Cabinet_transparent-dark.png";

export default function HeaderMain() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
      className="flex flex-col items-center justify-center xl:justify-normal col-span-10 lg:col-span-7 h-full gap-24"
    >
      <Image
        src={LogoLight}
        alt="Project Cabinet"
        className="xl:w-[25rem] lg:w-[22rem] md:w-[15rem] w-fit mt-0 md:mt-20 dark:hidden"
      />
      <Image
        src={LogoDark} // Dark logo
        alt="Project Cabinet"
        className="xl:w-[25rem] lg:w-[22rem] md:w-[15rem] w-fit mt-0 md:mt-20 hidden dark:block"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <TypeWritter />
        <ExploreButton />
      </div>
    </motion.div>
  );
}
