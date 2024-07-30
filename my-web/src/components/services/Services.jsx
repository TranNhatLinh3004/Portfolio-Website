import React, { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

function Services(props) {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      id="services"
      animate={shouldAnimate ? "animate" : "initial"}
    >
      <div
        className="star"
        style={{ top: "10%", left: "20%", animationDelay: "0s" }}
      ></div>
      <div
        className="star"
        style={{ top: "15%", left: "60%", animationDelay: "1s" }}
      ></div>
      <div
        className="star"
        style={{ top: "20%", left: "40%", animationDelay: "2s" }}
      ></div>
      <div
        className="star"
        style={{ top: "25%", left: "80%", animationDelay: "3s" }}
      ></div>
      <div
        className="star"
        style={{ top: "30%", left: "10%", animationDelay: "4s" }}
      ></div>
      <motion.div className="textContainer">
        <motion.p>
          We focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People"
          />
          <h1>
            <motion.b whileHover={{ color: "rgb(36 163 189)" }}>
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(36 163 189)" }}>
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <motion.button
            whileHover={{ background: "rgb(36 163 189)", color: "white" }}
          >
            WHAT WE DO ?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            We offer professional branding services to help your brand stand out
            in the market.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marketing Strategy</h2>
          <p>
            Innovative and effective marketing strategies to attract customers
            and enhance your online presence.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Design</h2>
          <p>
            Modern, user-friendly, and SEO-optimized website design to enhance
            your customers' experience.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Product Development</h2>
          <p>
            Helping you develop new products with advanced technology solutions,
            from concept to implementation.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
