import React from "react";
import HeroSection from "./section/HeroSection";
import TitleSection from "./section/TitleSection";
import CardSection from "./section/CardSection";
export default function Swap() {
    
  return (
    <div className="bg-white h-screen text-black">
        <HeroSection/>
        <TitleSection/>
        <CardSection/>
    </div>
  );
}
