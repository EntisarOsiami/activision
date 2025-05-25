import React from "react";
import HeroCarousel from "../Components/HomePage/HeroCarousel";
import SecondBanner from "../Components/HomePage/SecondBanner";
import FirstBanner from "../Components/HomePage/FirstBanner";
import BlogSection from "../Components/HomePage/BlogSection";
function HomeContainer() {
  return (
    <div>
      <HeroCarousel />
      <BlogSection />
      <FirstBanner />
      <SecondBanner />
    
    </div>
  );
}

export default HomeContainer;
