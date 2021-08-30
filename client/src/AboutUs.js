import React from "react";
import "./styles/aboutUs.css";
import nathan from "./images/nathan.jpg";
import hutson from "./images/LHW.jpg";

function AboutUs() {
  return (
    <div className="creators" id="creators">
      <div className="creatorOne">
        <div className="pOne">
          <img alt="Nathan" src={nathan} className="ui rounded image" />
          <div className="links">
            <a
              href="https://github.com/nbrailsford"
              target="_blank"
              rel="noreferrer"
            >
              <i className="git square icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin icon"></i>
            </a>
          </div>
          <p className="aboutUs">
            Nathan is a software developer currently living in Denver. He has a
            passion for learning and growing. Coding has become a perfect blend
            of challenging himself and stepping out of his comfort zone.
          </p>
        </div>
      </div>
      <div className="creatorTwo">
        <div className="pTwo">
          <img alt="Hutson" src={hutson} className="ui rounded image" />
          <div className="links">
            <a
              href="https://github.com/LHWOOD/"
<<<<<<< HEAD
              target="_blank"
              rel="noreferrer"
=======
              rel="noreferrer"
              target="_blank"
>>>>>>> main
            >
              <i className="git square icon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/hutson-wood-92566b50/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin icon"></i>
            </a>
          </div>
          <p className="aboutUs">
            Hutson is a full stack web developer with a background in project
            management and customer service. Known for a customer first approach
            and strong team partnership when solving problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
