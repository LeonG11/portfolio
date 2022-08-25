import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {


  return (
    <div className="portfolio">
      <div className="portfolio-nav">
        <div className="porfolio-name">Kirill Kachanov</div>
        <div className="portfolio-profession">Front end engineer</div>
        <div className="portfolio-based">
          Based in SPb
          <br />
          Russian Federation
        </div>
        <div className="portfolio-work">Work, about contact</div>
      </div>
      <div className="portfolio-main">
        <h1>
          creative <br /> developer
        </h1>
        <div className="portfolio-down">
          <FontAwesomeIcon className="portfolio-arrow" icon={faArrowDown} />
          <div className="portfolio-describe">
            Developer from Urals , live in Saint-Peterburg and make cool stuff
          </div>
          <h1>
            kirill <br /> kachanov
          </h1>
        </div>
      </div>
    </div>
  );
}
