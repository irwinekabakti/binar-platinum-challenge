import React from "react";
import Empty3 from "../components/Empty/Empty3";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CardConfirmPayment from "../components/CardConfirmPayment/CardConfirmPayment";

const ConfirmPayment = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty3 />
      </header>
      <main>
        <CardConfirmPayment />
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmPayment;
