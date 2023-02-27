import React from "react";
import { homepageAnimation1 } from "../../data";
import animateMobile1 from "../../images/Rectangle 240.png";
import animateMobile2 from "../../images/Rectangle 242.png";
import animateMobile3 from "../../images/Rectangle 244.png";

function AnimationHomepage1() {
  return (
    <>
      <div className="img__container">
        {homepageAnimation1.map((data, index) => {
          return (
            <div key={index}>
              <img src={data} alt="animation" className="img__slider" />
            </div>
          );
        })}
      </div>
      <div className="img__container-mobile">
        <img
          src={animateMobile1}
          alt="mobileAnimation"
          className="animateMobile1"
        />
        <img
          src={animateMobile3}
          alt="mobileAnimation"
          className="animateMobile3"
        />
        <img
          src={animateMobile2}
          alt="mobileAnimation"
          className="animateMobile2"
        />
      </div>
    </>
  );
}

export default AnimationHomepage1;
