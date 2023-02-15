import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardCar from "../components/CardCar/CardCar";
import Footer from "../components/Footer/Footer";
import Empty from "../components/Empty/Empty";
import SearchBar from "../components/SearchBar/SearchBar";

const ResultCar = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty />
      </header>
      <main>
        <SearchBar />
        <CardCar />
      </main>
      <Footer />
    </div>
  );
};

export default ResultCar;
