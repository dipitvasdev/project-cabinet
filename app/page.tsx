import Image from "next/image";
import TypeWritter from "./components/typewritter";
import ExploreButton from "./components/explore-button";
import HeaderMain from "./components/header-main";
import ProfileCard from "./components/profile-card";

export default function Home() {
  return (
    <main className="grid justify-center items-center p-12 h-screen gap-0 lg:gap-10 grid-cols-10 grid-flow-col">
      <ProfileCard />
      <HeaderMain />
    </main>
  );
}
