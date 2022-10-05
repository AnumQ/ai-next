import useData from "components/hooks/useData";
import ArrowSVG from "components/SVGs/ArrowSVG";
import React from "react";

export default function Intro() {
  const { introData: data, constants } = useData();

  return (
    <section id="intro" className="s_intro target-section">
      <div className="row">
        <div className="s_intro_background"></div>
        <div className="column">
          <div className="s_intro__top-block">
            {/* <span className="s_intro__bg" /> */}
            <h1 className="s_intro__text">
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
            </h1>
            <a href="#contact" className="s_intro__scroll-down smoothscroll">
              <span>{constants.scrollDown}</span>
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
      <div className="row row-x-center s_intro__about-wrap">
        <div className="column s_intro__about">
          <h2 className="s_intro__about-title">{data.titleAbout}</h2>
          <p>
            {data.titleDescription1}
            <b>{data.titleDescription2}</b>
          </p>
          <p>{data.titleDescription3}</p>
        </div>
      </div>
    </section>
  );
}
