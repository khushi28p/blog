import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import FeaturesSection from "../components/FeaturesSection";
import Testimony from "../components/Testimony";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Testimony />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default Home;
