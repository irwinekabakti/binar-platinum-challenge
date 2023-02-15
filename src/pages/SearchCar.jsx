import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
// import CardCar from "../components/CardCar/CardCar";
import Footer from "../components/Footer/Footer";

const SearchCar = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero isButtonShow={false} />
        <SearchBar />
        {/* <CardCar /> */}
      </main>
      <Footer />
    </div>
  );
};

export default SearchCar;
