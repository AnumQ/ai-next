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
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
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
          <h2 className="s-intro__about-title">{data.titleAbout}</h2>
          <p>
            {data.titleDescription1}
            <b>{data.titleDescription2}</b>
          </p>{" "}
          <p>{data.titleDescription3}</p>
        </div>
      </div>
    </section>
  );
};
