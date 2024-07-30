import React from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import AnimatedBackground from "./components/animationBg/AnimatedBackground";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Cursor />
      {/* <Text /> */}
      <section className="section section__home">
        <Navbar />
        <Home />
      </section>
      <section className="section section__about">
        <About />
      </section>

      <section
        className="section section__qualification"
        style={{
          position: "relative",
        }}
      >
        <AnimatedBackground />
        <Qualification />
      </section>

      <section className="section section__services">
        <Services />
      </section>

      <section className="section section__portfolio">
        <Portfolio />
      </section>
      <section className="section section__contact">
        <Contact />
      </section>
      <ScrollUp />
    </>
  );
};

export default App;
