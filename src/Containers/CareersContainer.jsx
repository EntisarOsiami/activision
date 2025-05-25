import CareerCategories from "../Components/CareerPage/CareerCategories";
import CareersRibbon from "../Components/CareerPage/CareerRibbon";
import CareersHero from "../Components/CareerPage/CareersHero";
import AboutStudios from "../Components/AboutPage/AboutStudios";
import CareerWorld from "../Components/CareerPage/CareerWorld";
import CareerJobs from "../Components/CareerPage/CareerJobs";

function CareersContainer() {
  return (
    <>
      <CareersHero />;
      <CareerCategories/>;
      <CareerWorld />;
      <CareersRibbon />;
      <AboutStudios/>
      <CareerJobs />;
    </>
  );
}

export default CareersContainer;
