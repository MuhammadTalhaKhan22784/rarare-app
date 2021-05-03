import React, { useLayoutEffect } from "react";
import JoinCommunity from "../../Components/HomeComp/JoinCommunity";
import "./About.css";
//assets
import aboutRec1 from "../../Assets/about_rec1.png";
import aboutRec2 from "../../Assets/about_rec2.png";
const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <React.Fragment>
      <div className="about_container">
        <h2 className="text_bluegreen">About Us!</h2>
        <div className="about_content">
          <div className="about_left_content1">
            <h2 className="text_darkblue fw-bold">Title here!</h2>
            <p className="text_lightgray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolo
            </p>
          </div>
          <div className="about_right_content1">
            <img src={aboutRec1} alt="img" />
          </div>
        </div>
        <div className="about_content mt-5">
          <div className="about_right_content2">
            <img src={aboutRec2} alt="img" />
          </div>
          <div className="about_left_content2">
            <h2 className="text_darkblue fw-bold">Title here!</h2>
            <p className="text_lightgray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolo
            </p>
          </div>
        </div>
      </div>
      <JoinCommunity />
    </React.Fragment>
  );
};

export default About;
