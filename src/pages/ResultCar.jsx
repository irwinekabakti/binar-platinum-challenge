import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardCar from "../components/CardCar/CardCar";
import Footer from "../components/Footer/Footer";
import Empty from "../components/Empty/Empty";
import LockSearchBar from "../components/SearchBar/LockSearchBar";
import { useLocation } from "react-router";

const ResultCar = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <header>
        <Navbar />
        <Empty />
      </header>
      <main>
        <LockSearchBar />
        <CardCar {...state} />
      </main>
      <Footer />
    </div>
  );
};

export default ResultCar;
