import React from "react";
import "./dist/style.css"; import "./App.css";

// import AOS from "aos"; import "aos/dist/aos.css";

// Importing Components
import MainHeader from "./components/main_header"; import HeroSection from "./components/hero-section";
import AboutSsection from "./components/about-section"; import ServiceSection from "./components/service-section";
import ProjectSection from "./components/project-section"; import ContactSection from "./components/contact-section";
import Footer from "./components/footer";

function App(){
  // useEffect(() => {AOS.init({duration: 1000, once: true, easing: "ease-in-out",});}, []);
  return(
    <>
      <MainHeader /> <HeroSection /><AboutSsection />
      <ServiceSection /><ProjectSection /> <ContactSection /> <Footer />
    </>
  )
}

export default App;