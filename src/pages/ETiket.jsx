import React from "react";
import Empty4 from "../components/Empty/Empty4";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Tiket from "../components/Tiket/Tiket";

const ETiket = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty4 />
      </header>
      <main>
        <Tiket />
      </main>
      <Footer />
    </div>
  );
};

export default ETiket;
