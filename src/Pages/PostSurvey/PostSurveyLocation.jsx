import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import "./PostSurvey.css";
// assets
import postIcon from "../../Assets/cn_logo.png";
import pMap from "../../Assets/pmap.png";
import { Link } from "react-router-dom";

const PostSurveyLocation = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_report post_surveyh">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue">
              Post a <strong className="text_lightpurple">Survey!</strong>{" "}
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
        </div>
        <div className="pr_frorm">
          <input
            className="full_input text_lightgray"
            placeholder="Let's give an interesting title"
            type="text"
          />
          <div className="c_textarea survet_textArea">
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              placeholder="Tell us what happened!"
              className="bluegreen_border text_lightgray"
            ></textarea>
          </div>
          <span className="text_bluegreen">
            <strong> Enter location or pin location on map</strong>
          </span>
          <select className="region_slct" name="" id="">
            <option value="Country">Country/Region</option>
          </select>
          <input
            className="full_input text_lightgray"
            placeholder="Address"
            type="text"
          />
          <img src={pMap} className="pmap" alt="map" />
          <div className="pcontinue_btn">
            <Link className="text-decoration-none" to="/survey-reward">
              <button className="text-white bg_lightgreen border_none">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostSurveyLocation;
