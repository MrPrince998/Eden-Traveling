import React from "react";
import HeroSection from "../components/HeroSection";
import Adventure from "../components/Adventure";
import Destination from "../components/Destination";
import News from "../components/News";
import Deals from "../components/Deals";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Adventure />
      <Destination />
      <News />
      <Deals />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
