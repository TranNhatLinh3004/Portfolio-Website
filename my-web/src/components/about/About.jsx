import React from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
function About() {
  return (
    <motion.div className="about" id="about">
      <motion.div
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1 className="title">
          About <span className="highlight">Me</span>
        </motion.h1>
        <motion.div className="seperator"></motion.div>

        <motion.div className="about-me-container">
          <motion.div className="left-col">
            <motion.img
              src="../../../public/images/avatar.jpg"
              className="about-image"
            />
          </motion.div>
          <motion.div className="right-col">
            <motion.p className="about__text">
              I am a Frontend Developer with one year of experience. I have a
              strong passion for creating user-friendly and visually appealing
              websites. I am always looking for new challenges and opportunities
              to learn. I love to explore new technologies and stay up-to-date
              with the latest trends in the field.
            </motion.p>
            <button className="button">Download CV</button>

            <div className="technical">
              <h1>Technologies Used</h1>

              <div className="wrapper1">
                <div className="box-one">
                  <div className="skills__content">
                    <h3 className="skills__title">Frontend </h3>

                    <div className="skills__box">
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">HTML</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group ">
                        <div className="skills__data css">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">CSS</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">Javascript</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">React</h3>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">Nextjs</h3>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">Bootstrap</h3>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">SASS</h3>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="box-one">
                  <div className="skills__content">
                    <h3 className="skills__title">Backend</h3>

                    <div className="skills__box">
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">Nodejs</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group ">
                        <div className="skills__data css">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">MongoDB</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">MySQL</h3>
                          </div>
                        </div>
                      </div>
                      <div className="skills__group">
                        <div className="skills__data">
                          <i className="bx bx-badge-check"></i>

                          <div>
                            <h3 className="skills__name">Cloudinary</h3>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
