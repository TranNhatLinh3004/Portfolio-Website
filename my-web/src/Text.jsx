import React, { useState } from "react";
import { motion } from "framer-motion";

function Text(props) {
  const [open, setOpen] = useState(false);

  const items = ["item1", "item2", "item3", "item4"];
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.5 },
    }),
  };

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible">
        {items.map((item, i) => (
          <motion.li key={item} variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Text;
