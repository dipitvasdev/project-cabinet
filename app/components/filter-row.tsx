"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { tagColors, tags } from "@/lib/tagColors";
import clsx from "clsx";
import { hexToRgba } from "@/utils/hexToRgba";
import { useActiveFiltersContext } from "@/context/active-filters-context";

type TagType =
  | "Data Science"
  | "Machine Learning"
  | "Web Development"
  | "Sofware Development"
  | "Data Analytics"
  | "Generative AI"
  | "Artificial Intelligence";

export default function FilterRow() {
  const { activeFilters, setActiveFilters } = useActiveFiltersContext();

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

  const handleFilterClick = (tag: TagType) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="col-span-12 md:col-span-9 sm:mt-8 mt-3 flex items-center justify-center">
      <motion.div
        className="lg:h-[6rem] md:h-[9rem] h-[12rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] xl:h-[4rem] md:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 flex justify-center items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex h-12 py-2 sm:h-[initial] sm:py-0 justify-center items-center ml-3 mr-3">
          <ul className="flex w-full flex-wrap text-center items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] lg:flex-nowrap md:gap-2 lg:gap-5">
            {tags.map((element: any, index) => {
              const tag = element as
                | "Data Science"
                | "Machine Learning"
                | "Web Development"
                | "Sofware Development"
                | "Data Analytics";
              const isActive = activeFilters.includes(tag);
              const lightColor = tagColors[tag]
                ? hexToRgba(tagColors[tag].light, isActive ? 0.7 : 0.1)
                : "rgba(0, 0, 0, 0.1)";
              const darkColor = tagColors[tag]
                ? hexToRgba(tagColors[tag].dark, isActive ? 0.7 : 0.1)
                : "rgba(0, 0, 0, 0.1)";
              return (
                <motion.li
                  style={{
                    backgroundColor: theme === "dark" ? darkColor : lightColor,
                  }}
                  className="h-3/4 flex items-center justify-center relative rounded-full"
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={() => handleFilterClick(tag)}
                >
                  <Link
                    href="#"
                    className={clsx(
                      "flex w-full items-center p-2 justify-center hover:text-gray-950 transition  dark:hover:text-gray-50",
                      {
                        "text-black dark:text-gray-50": isActive,
                      }
                    )}
                  >
                    {element}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
