import React from "react";
import sea from "../images/sea.jpg";

export default function Works(props) {
  return (
    <div className="works">
      <div className="works__flex">
        <div className="works__left">
          <div
            style={{
              marginBottom: "30vh",
            }}
          ></div>
          <div
            className="works__smile"
            style={{
              fontSize: "40px",
              zIndex: "5",
            }}
          >
            👾
          </div>
          <div
            className="works__smile works__title"
            style={{ zIndex: "4", fontFamily: "stretch" }}
          >
            about me
          </div>
          <div className="works__text works__smile" style={{ zIndex: "3" }}>
            Hi, im Kirill, a frontend developer, based in Saint-Peterburgs.
            Russia. I loved work with little project and use in work new
            technology and many other crazy stuff. At this moment i am looking
            for new project/product on long time.
          </div>
          <a
            href="https://github.com/LeonG11"
            className="works__smile"
            style={{
              zIndex: "2",
              fontFamily: "stretch",
            }}
          >
            github
          </a>
          <a
            href="https://www.behance.net/juliakostyleva"
            className="works__smile behance"
            style={{
              zIndex: "1",
              fontFamily: "stretch",
            }}
          >
            behance
          </a>
        </div>
        <div className="works__middle"></div>
        <div className="works__right">
          <img src={sea} className="works__img" />
          <h2 className="works__title" style={{
            fontSize:"2rem"
          }}>FishFish</h2>
          <div
            className="works__text"
            style={{
              marginTop: "1rem",
            }}
          >
            On this time it is best work from all, and i can proud to say he
            deserves a sequel. You can also take a closer look at my work on
          </div>
        </div>
      </div>
    </div>
  );
}
