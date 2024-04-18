import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Home title="Suleman Saeed" />
      <Services />
      <Projects />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
