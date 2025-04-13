import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import PricingSection from "../Components/PricingSection";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="~$ ls ./projects"
        text="A curated gallery of code, creativity, and clean commits — from passion builds to polished products."
      />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Projects;
