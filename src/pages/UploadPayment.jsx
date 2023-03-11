import React from "react";
import Empty3 from "../components/Empty/Empty3";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CardUploadPayment from "../components/CardUploadPayment/CardUploadPayment";

const UploadPayment = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty3 />
      </header>
      <main>
        <CardUploadPayment />
      </main>
      <Footer />
    </div>
  );
};

export default UploadPayment;
