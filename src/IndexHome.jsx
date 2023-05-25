import React from "react";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function IndexHome() {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />

      <Footer />
    </div>
  );
}
