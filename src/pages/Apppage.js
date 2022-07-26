import React from 'react'
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Services from '../components/Services';
import Works from '../components/Works';


function Apppage() {
  return (
    <>
        <Header/>
        <About/>
        <Services/>
        <Works/>
        <Clients/>
        <Contact/>
    </>
  )
}

export default Apppage