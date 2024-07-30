// AnimatedBackground.js
import React from "react";
import { motion } from "framer-motion";
import "./animatedBackground.scss";

const AnimatedBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  const generateRandomPosition = () => {
    return {
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
    };
  };

  return (
    <div className="background">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          initial={generateRandomPosition()}
          animate={{
            x: generateRandomPosition().x,
            y: generateRandomPosition().y,
            transition: {
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
