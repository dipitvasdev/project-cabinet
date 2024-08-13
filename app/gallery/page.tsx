import React from "react";
import HeaderGallery from "../components/header-gallery";
import FilterRow from "../components/filter-row";
import MainGallery from "../components/gallery";

export default function Gallery() {
  return (
    <main className="flex flex-col items-center px-3 gap-10">
      <div className="grid grid-flow-col grid-cols-12 gap-4 items-center justify-center">
        <HeaderGallery />
        <FilterRow />
      </div>

      <MainGallery />
    </main>
  );
}
