import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import OurService from "../components/OurService/OurService";
import WhyUs from "../components/WhyUs/WhyUs";
import Testimonial from "../components/Testimonial/Testimonial";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import Video from "../components/Video/Video";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero isButtonShow={true} />
        <OurService />
        <WhyUs />
        <Testimonial />
        <Gallery />
        <CtaBanner />
        <FAQ />
        <Video />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
