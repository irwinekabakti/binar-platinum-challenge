import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import InfoBar from "../components/SearchBar/InfoBar";
import CardPayment from "../components/CardPayment/CardPayment";
import Empty2 from "../components/Empty/Empty2";

const Payment = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty2 />
      </header>
      <main>
        <InfoBar />
        <CardPayment />
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
