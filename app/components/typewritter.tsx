"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function TypeWritter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className=""
    >
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "Dipit develops Data solutions...",
          1000,
          "Dipit develops Software projects...",
          1000,
          "Dipit develops ML solutions...",
          1000,
          "Dipit develops Generative AI projects...",
          1000,
          "Dipit can develop even more...",
          3000,
        ]}
        speed={50}
        style={{ fontWeight: "bold" }}
        repeat={Infinity}
        className="whitespace-pre-line text-3xl md:text-4xl lg:text-5xl transition-all text-black dark:text-white"
      />
    </motion.div>
  );
}
