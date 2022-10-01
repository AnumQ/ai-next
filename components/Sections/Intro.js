import useData from "components/hooks/useData";
import React from "react";

export const Intro = () => {
  const { introData: data, constants } = useData();

  const ArrowSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        style={{
          fill: "rgba(0, 0, 0, 1)",
          transform: "rotate(180deg)",
          msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
        }}
      >
        <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z" />
      </svg>
    );
  };

  return (
    <section id="intro" className="s-intro target-section">
      <div className="row">
        <div className="s-intro-background"></div>
        <div className="column">
          <div className="s-intro__top-block">
            {/* <span className="s-intro__bg" /> */}
            <h1 className="s-intro__text">
              {data.titlePart1} <br />
              <span>{data.titlePart2}</span>
            </h1>
            <a href="#contact" className="s-intro__scroll-down smoothscroll">
              <span>{constants.scrollDown}</span>
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
      <div className="row row-x-center s-intro__about-wrap">
        <div className="column s-intro__about">
          <h2 className="s-intro__about-title">Hello, I am Anum Qudsia</h2>
          <p>
            I am an independent mobile, frontend/fullstack developer with 8
            years of experience in iOS, Android and Web development. Skills:{" "}
            <b>
              Swift, ReactJS, NextJS, Firebase, Kotlin, Android, Java,
              Javascript/Typescript, Node, Azure, HTML, CSS{" "}
            </b>
          </p>{" "}
          <p>
            I have also integrated several third-party libraries i.e. payment
            providers such as Stripe and written native modules in React Native
            to create bridge between Android SDK (written in Java) and
            Javascript.
          </p>
        </div>
      </div>
    </section>
  );
};
