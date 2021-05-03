import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import "./PostSurvey.css";
// assets
import postIcon from "../../Assets/cn_logo.png";
import hoverImg from "../../Assets/Group 3531.png";
import i from "../../Assets/Icon awesome-info-circle.png";
import mobHover from "../../Assets/Group 5381.png";
import { Link } from "react-router-dom";

const PostSurveyReward = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_report post_survey_health">
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
          <div className="head_reward">
            <h6>
              <strong>Participants & Reward!</strong>
            </h6>
            <p>
              Define the number o participants and reward points allocated per
              participant.
            </p>
          </div>
          <div className="input_div_reward">
            <input type="text" placeholder="Total Participants" />
            <span>
              <img src={i} alt="img" />
              <img src={hoverImg} className="hover_img" alt="img" />
              <img src={mobHover} className="mob_hover" alt="img" />
            </span>
          </div>
          <div className="input_div_reward">
            <input type="text" placeholder="Reward Points per participants" />
            <span>
              <img src={i} alt="img" />
              <img src={hoverImg} className="hover_img" alt="img" />
              <img src={mobHover} className="mob_hover" alt="img" />
            </span>
          </div>
          <div className="pcontinue_btn survey_submit">
            <Link className="text-decoration-none" to="/survey-location">
              <button className="voice_heard_btn_white rewrd_back">Back</button>
            </Link>
            <Link className="text-decoration-none" to="/survey-submit">
              <button
                style={{ marginLeft: "15px" }}
                className="text-white bg_lightgreen border_none"
              >
                Submit Survey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostSurveyReward;
