"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { tagColors } from "@/lib/tagColors";
import { hexToRgba } from "@/utils/hexToRgba";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tools,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1.2"],
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: any) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-0 last:mb-3"
    >
      <section className="group flex flex-col bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[27rem] hover:bg-gray-200 transition-all rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3
            className="text-xl
                    md:text-xl font-semibold transition-all"
          >
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            Tech Stack:
            {tools.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute h-[25rem] object-cover object-left top-8 -right-40 w-[28.25rem] sm:w-[24.25rem] md:w-[28.25rem] rounded-t-lg shadow-2xl transition-all group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
            translate-x-3 hidden sm:block "
        />
        <ul className="flex flex-wrap mb-4 gap-2 justify-start ms-5 w-[20rem]">
          {tags.map((tag, index) => {
            const lightColor = tagColors[tag]
              ? hexToRgba(tagColors[tag].light, 0.7)
              : "rgba(0, 0, 0, 0.7)";
            const darkColor = tagColors[tag]
              ? hexToRgba(tagColors[tag].dark, 0.7)
              : "rgba(0, 0, 0, 0.7)";
            return (
              <li
                style={{
                  backgroundColor: theme === "dark" ? darkColor : lightColor,
                }}
                className="
                px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white"
                key={index}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </section>
    </motion.div>
  );
}
