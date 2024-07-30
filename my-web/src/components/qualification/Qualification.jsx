import React, { useState } from "react";
import "./qualification.scss";
import AnimatedBackground from "../animationBg/AnimatedBackground";
function Qualification(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="qualification" id="skills">
      <h1>Qualification</h1>
      <span className="section__subtitle">My personnel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Institution</h3>
                <span className="qualification__subtitle">
                  Dong A University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2024
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div
                className=""
                style={{
                  width: "155px",
                }}
              ></div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Specialization</h3>
                <span className="qualification__subtitle">
                  Software Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Language</h3>
                <span className="qualification__subtitle">Toeic 570</span>
                <div className="qualification__calendar">
                  {/* <i className="uil uil-calendar-alt"></i> */}
                  {/* 2021 - Present */}
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>

                {/* <span className="qualification__line"></span> */}
              </div>

              {/* <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">HI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div> */}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer Intern </h3>
                <span className="qualification__subtitle">
                  VNPT - IT Center Region 3 (VNPT IT Company)
                  <br />- Built website according to design, created basic
                  functionalities for website.
                  <br />- Understanding how a large projects works.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  February 2024 - April 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              {/* <div className=""></div> */}

              <div>
                <h3 className="qualification__title">Skills</h3>
                <span className="qualification__subtitle">
                  - Proficiency in HTML, CSS, and JavaScript..
                  <br />- Familiarity with Next.js for building server-side
                  rendered React applications.
                  <br />- Familiarity with Next.js for building server-side
                  rendered React applications.
                </span>
                {/* <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div> */}
              </div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">HI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div> */}

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                {/* <h3 className="qualification__title">Skills</h3> */}
                <span className="qualification__subtitle">
                  - Knowledge of frontend frameworks/libraries such as React.
                  <br /> - Ability to work with APIs and fetch data.
                  <br /> - Basic knowledge of backend development with Node.js
                  and MongoDB.
                </span>
                {/* <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div> */}
              </div>
            </div>

            <div className="">
              <span className="qualification__rounder"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
