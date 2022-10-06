import useData from "components/hooks/useData";
import ArrowSVG from "components/SVGs/ArrowSVG";
import React from "react";
import s from "./Intro.module.css";

export default function Intro() {
  const { introData: data, constants } = useData();

  return (
    // <section id="intro" className="s_intro target-section">
    <section id="intro" className={`${s.s_intro}`}>
      <div className={s.row}>
        <div className={s.s_intro_background}></div>
        <div className={s.column}>
          <div className={s.s_intro__top_block}>
            {/* <span className="s_intro__bg" /> */}
            <h1 className={s.s_intro__text}>
              {data.titleIntro1} <br />
              <span>{data.titleIntro2}</span>
            </h1>
            {/* <a href="#contact" className="s_intro__scroll_down smoothscroll"> */}
            <a href="#contact" className={s.s_intro__scroll_down}>
              <span>{constants.scrollDown}</span>
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="row row_x_center s_intro__about_wrap"> */}
      <div className={`${s.row} ${s.row_x_center}`}>
        {/* <div className="column s_intro__about"> */}
        <div className={`${s.column} ${s.s_intro__about}`}>
          <h2 className={s.s_intro__about_title}>{data.titleAbout}</h2>
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
