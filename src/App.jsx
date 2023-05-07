import { useState } from "react";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import VideoPlayer from "./components/VideoPlayer";
import Mission from "./components/Mission";
import Methods from "./components/Methods";
import Clients from "./components/Clients";
import TestimonialsSlider from "./components/TestimonialsSlider";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Consultation from "./components/Consultation";
import HowWeWork from "./components/HowWeWork";
import Price from "./components/Price";
import MethodsProcess from "./components/MethodsProcess";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Facts />
      <VideoPlayer />
      <Mission />
      <Methods />
      <MethodsProcess />
      <TestimonialsSlider />
      <Clients />
      <AboutUs />
      <Team />
      <HowWeWork />
      <Price />
      <FAQ />
      <Consultation />
      <Footer />
    </>
  );
}
export default App;

// Consultation, testimonial slider may cause problem
