import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Empty from "../components/Empty/Empty";
import Footer from "../components/Footer/Footer";
import InfoBar from "../components/SearchBar/InfoBar";
import CardPayment from "../components/CardPayment/CardPayment";

const Payment = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty />
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
