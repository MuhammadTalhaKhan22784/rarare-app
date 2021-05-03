import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import "./PostSurvey.css";
// assets
import receiveTick from "../../Assets/receive_tick.png";
import { Link } from "react-router-dom";

const PostSurveyReceive = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_receive">
        <div className="p_receive_main">
          <img src={receiveTick} alt="tick" />
          <h2 className="lh-base text_darkblue">
            Thankyou for your{" "}
            <strong className="text_green">contribution</strong> to the
            community!
          </h2>
          <p className="text_lightgray">
            Sit back and relax while we spread the word!
          </p>
          <div className="pcontinue_btn">
            <Link className="text-decoration-none" to="/post-survey-tamplate">
              <button className="text-white bg_lightgreen border_none">
                Post another Survey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostSurveyReceive;
