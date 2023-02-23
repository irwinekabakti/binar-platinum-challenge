import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Tiket from '../components/Tiket/Tiket';

const ETiket = () => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main>
            <Tiket/>
        </main>
        <Footer/>
    </div>
  )
}

export default ETiket;
