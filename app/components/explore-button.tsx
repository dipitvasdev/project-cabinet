"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function ExploreButton() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-light text-base md:text-lg lg:text-xl transition-all"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Link
        href="/gallery"
        className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
      >
        Explore <TbPlayerTrackNextFilled />
      </Link>
    </motion.div>
  );
}
