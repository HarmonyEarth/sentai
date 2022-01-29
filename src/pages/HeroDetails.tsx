import React from "react";
import { useParams } from "react-router-dom";
import SenshiCarouselSection from "../components/HeroDetails/SenshiCarouselSection";
import SenshiFactSection from "../components/HeroDetails/SenshiFactSection";
import SenshiGallery from "../components/HeroDetails/SenshiGallery";

const HeroDetails = () => {
  const { heroId } = useParams();

  return (
    <>
      <SenshiGallery />
      <SenshiFactSection />
      <SenshiCarouselSection />
    </>
  );
};

export default HeroDetails;
