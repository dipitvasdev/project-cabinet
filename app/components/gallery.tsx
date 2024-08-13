"use client";
import { projectsData } from "@/lib/data";
import React from "react";
import ProjectCard from "./project-card";
import clsx from "clsx";
import { useActivePageContext } from "@/context/active-page-context";
import { useActiveFiltersContext } from "@/context/active-filters-context";

type ProjectProps = (typeof projectsData)[number];

export default function MainGallery() {
  const { activePage, setActivePage } = useActivePageContext();
  const { activeFilters, setActiveFilters } = useActiveFiltersContext();

  const filteredProjects = projectsData
    .filter((project) =>
      activeFilters.length === 0
        ? false
        : activeFilters.some((filter) => project.tags.includes(filter))
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (activePage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  if (displayedProjects.length === 0) {
    return (
      <div className="text-center text-sm sm:text-base md:text-xl font-semibold">
        No projects found matching the current filters.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <nav className="mb-8">
        <ul className="flex items-center -space-x-px h-8 text-sm gap-2">
          {displayedProjects.length !== 0 ? (
            <li>
              <button
                onClick={handlePrevPage}
                className={clsx(
                  "justify-center bg-white text-gray-700 p-4 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "cursor-not-allowed opacity-50": activePage === 1,
                  }
                )}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
          ) : (
            <></>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1}>
              <button
                onClick={() => handlePageChange(i + 1)}
                className={clsx(
                  "justify-center bg-white text-gray-700 px-4 py-3 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "text-gray-950 dark:text-gray-200 dark:bg-white/20 dark:font-base font-bold":
                      activePage === i + 1,
                  }
                )}
              >
                {i + 1}
              </button>
            </li>
          ))}
          {displayedProjects.length !== 0 ? (
            <li>
              <button
                onClick={handleNextPage}
                className={clsx(
                  "justify-center bg-white text-gray-700 p-4 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "cursor-not-allowed opacity-50": activePage === totalPages,
                  }
                )}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
      <div className="grid gap-8 grid-flow-row xl:grid-cols-2 grid-cols-1">
        {displayedProjects.map((project: ProjectProps, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <nav className="mt-8 mb-8">
        <ul className="flex items-center -space-x-px h-8 text-sm gap-2">
          {displayedProjects.length !== 0 ? (
            <li>
              <button
                onClick={handlePrevPage}
                className={clsx(
                  "justify-center bg-white text-gray-700 p-4 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "cursor-not-allowed opacity-50": activePage === 1,
                  }
                )}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
          ) : (
            <></>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1}>
              <button
                onClick={() => handlePageChange(i + 1)}
                className={clsx(
                  "justify-center bg-white text-gray-700 px-4 py-3 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "text-gray-950 dark:text-gray-200 dark:bg-white/20 dark:font-base font-bold":
                      activePage === i + 1,
                  }
                )}
              >
                {i + 1}
              </button>
            </li>
          ))}

          {displayedProjects.length !== 0 ? (
            <li>
              <button
                onClick={handleNextPage}
                className={clsx(
                  "justify-center bg-white text-gray-700 p-4 flex items-center gap-2 rounded-xl active:scale-110 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white scale-100",
                  {
                    "cursor-not-allowed opacity-50": activePage === totalPages,
                  }
                )}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </div>
  );
}
