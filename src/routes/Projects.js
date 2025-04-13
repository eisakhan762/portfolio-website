import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="~$ ls ./projects"
        text="A curated gallery of code, creativity, and clean commits — from passion builds to polished products."
      />
      <Footer />
    </div>
  );
};

export default Projects;
