import React from "react";
import wave from "./images/wave.jpg";

export default function Works(props) {
  return (
    <div className="works">
      <div className="works__flex">
        <div className="works__left">
          <div className="works__smile">👾</div>
          <div className="works__title">About me</div>
          <div className="works__text">
            Hi, im Kirill, a frontend developer, based in Saint-Peterburgs.
            Russia. I loved work with little project and use in work new
            technology and many other crazy stuff. At this moment i am looking
            for new project/product on long time.
          </div>
        </div>
        <div className="works__middle">
          <img src="" alt="" />
        </div>
        <div className="works__right">
          <img src={wave} />
          <div className="works__title">FishFish</div>
          <div className="works__text">
            On this time it is best work from all, and i can proud to say he
            deserves a sequel. You can also take a closer look at my work on
          </div>
          <button className="works__button github">github</button>
          <button className="works__button vk">behance</button>
        </div>
      </div>
    </div>
  );
}
