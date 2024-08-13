import Image from "next/image";
import TypeWritter from "./components/typewritter";
import ExploreButton from "./components/explore-button";
import HeaderMain from "./components/header-main";
import ProfileCard from "./components/profile-card";

export default function Home() {
  return (
    <main className="grid md:grid-flow-col items-center p-12 h-screen gap-10 grid-cols-12 grid-flow-col">
      <ProfileCard />
      <HeaderMain />
    </main>
  );
}
