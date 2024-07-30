import React, { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Booking Website",
    img: [
      "../images/booking.png",
      "../images/booking1.png",
      "../images/booking2.png",
    ],
    desc: "This hotel booking website, built with React, Node.js, and MongoDB, offers a seamless experience for booking accommodations. Users can search for hotels, view room details, make reservations in real-time, and process payments securely with VNPAY.",
    demo: "https://github.com/TranNhatLinh3004/BookingWeb",
  },
  {
    id: 2,
    title: "Chat App",
    img: ["../images/chat.png", "../images/chat1.png"],
    desc: "This chat app, built with React and Socket.io, offers real-time messaging, group chats, and file sharing. It features a user-friendly interface and ensures continuous connectivity for fast information exchange.",
    demo: "https://github.com/TranNhatLinh3004/Chat-App",
  },
  {
    id: 3,
    title: " E-commerce Website",
    img: ["../images/shop.png", "../images/shop1.png"],
    desc: "This furniture e-commerce website, built with React, Node.js, and MongoDB, offers a seamless shopping experience. Users can browse and purchase furniture, with features like user authentication, product search, shopping cart, and secure payment processing with VNPAY.",
    demo: "https://github.com/TranNhatLinh3004/FurnitureWeb",
  },
  {
    id: 4,
    title: "Blog App",
    img: ["../images/chat.png", "../images/chat1.png"],
    desc: "This blog application, built with Next.js and MongoDB, provides a seamless platform for creating and managing blog posts. Users can write, edit, and delete posts in real-time, with a clean and responsive interface. MongoDB ensures efficient data management and retrieval, while Next.js enables fast server-side rendering and SEO optimization.",
    demo: "https://github.com/TranNhatLinh3004/BookingWeb",
  },

  // Add more items as needed
];

const Single = ({ item }) => {
  const ref = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === item.img.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [item.img.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handleDemoClick = () => {
    window.open(item.demo, "_blank");
  };
  return (
    <section id="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img[currentImageIndex]} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>Link Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio(props) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
