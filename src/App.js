import React from 'react'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Textmanip from "./Components/Textmanip";


export default function App() {
  return (
    <>
      <Navbar
          home="TextManip"
          contact="Contact"
          about="About"
      />
      
      <Textmanip/>
      <Contact />
      <About
        about1="About this App"
      about2="About Developer"  

      />
      
    </>

  )
}
