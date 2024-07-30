import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";

function Navbar() {
  const [theme, setTheme] = useState("dark-theme");

  const [active, setActive] = useState("Home");

  const handleActive = (e) => {
    // window.scrollTo({
    //   top: document.body.scrollHeight + 2000,
    //   behavior: "smooth",
    // });
  };

  const toggleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Anh Dev
        </motion.span>

        <ul className="nav__list gird">
          <li className="nav__item">
            <a
              href="#home"
              id="Home"
              className={active === "Home" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-estate nav__icon"></i>Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              id="About"
              className={active === "About" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-user nav__icon"></i>About
            </a>
          </li>{" "}
          <li className="nav__item">
            <a
              href="#skills"
              className={active === "Skills" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-file-alt nav__icon"></i>Skills
            </a>
          </li>{" "}
          <li className="nav__item">
            <a
              href="#services"
              id="Services"
              className={active === "Services" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-briefcase-alt nav__icon"></i>Services
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#portfolio"
              id="Portfolio"
              className={active === "Portfolio" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-scenery nav__icon"></i>Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#contact"
              id="Contact"
              className={active === "Contact" ? "active" : ""}
              onClick={handleActive}
            >
              <i className="uil uil-message nav__icon"></i>Contact
            </a>
          </li>
        </ul>

        {/* <div className="social">
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <a href="">
            <img src="./images/facebook.png" alt="Facebook" />
          </a>
          <a href="">
            <img src="./images/instagram.png" alt="Instagram" />
          </a>
          <a href="">
            <img src="./images/youtube.png" alt="YouTube" />
          </a>
          <a href="">
            <img src="./images/github.png" alt="GitHub" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
