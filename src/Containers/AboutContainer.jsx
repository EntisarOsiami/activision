import React from "react";
import AboutHero from "../Components/AboutPage/AboutHero";
import AboutStory from "../Components/AboutPage/AboutStory";
import AboutLeadership from "../Components/AboutPage/AboutLeadership";
import AboutGames from "../Components/AboutPage/AboutGames";
import SecondBanner from "../Components/HomePage/SecondBanner";
import AboutStudios from "../Components/AboutPage/AboutStudios";

function AboutContainer() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutLeadership />
      <AboutGames />
      <AboutStudios />
      <SecondBanner/>
    </>
  );
}

export default AboutContainer;
