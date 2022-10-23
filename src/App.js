import React from 'react'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Textmanip from "./Components/Textmanip";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>

        <Navbar
          home="TextManip"
          contact="Contact"
          about="About"
        />
        <Routes>
          <Route path="/" element={<Textmanip />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={
            <About
              about1="About this App"
              about2="About Developer"
            />}></Route>
        </Routes>
      </Router>

    </>

  )
}
