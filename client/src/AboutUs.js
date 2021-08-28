import React from "react";
import "./styles/aboutUs.css";
import nathan from "./images/nathan.jpg";
import hutson from "./images/hutson.jpg";

function AboutUs() {
  return (
    <div className="creators">
      <div className="creatorOne">
        <div className="pOne">
          <img alt="Nathan" src={nathan} className="ui rounded image" />
          <div className="links">
            <a href="https://github.com/nbrailsford" target="_blank">
              <i className="git square icon"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <i className="linkedin icon"></i>
            </a>
          </div>
          <p className="aboutUs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            urna nec tincidunt praesent semper feugiat nibh.
          </p>
        </div>
      </div>
      <div className="creatorTwo">
        <div className="pTwo">
          <img alt="Hutson" src={hutson} className="ui rounded image" />
          <div className="links">
            <a href="https://github.com/LHWOOD/" target="_blank">
              <i className="git square icon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/hutson-wood-92566b50/"
              target="_blank"
            >
              <i className="linkedin icon"></i>
            </a>
          </div>
          <p className="aboutUs">
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
