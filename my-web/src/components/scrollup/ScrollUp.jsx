import React, { useEffect } from "react";
import "./scrollup.scss";

function ScrollUp() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY > 260) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollup" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </div>
  );
}

export default ScrollUp;
