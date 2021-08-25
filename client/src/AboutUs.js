import React from "react";
import "./styles/aboutUs.css";
import nathan from "./images/nathan.jpg";
import hutson from "./images/hutson.jpg";

function AboutUs() {
  return (
    <div className="creators">
      <div className="creatorOne">
        <div className="pOne">
          <img alt="Nathan" src={nathan} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            urna nec tincidunt praesent semper feugiat nibh.
          </p>
        </div>
      </div>
      <div className="creatorTwo">
        <div className="pTwo">
          <img alt="Hutson" src={hutson} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            urna nec tincidunt praesent semper feugiat nibh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
