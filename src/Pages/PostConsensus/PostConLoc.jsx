import React, { useLayoutEffect } from "react";

// assets
import undrawVoting from "../../Assets/undraw_voting.png";
import pMap from "../../Assets/pmap.png";
import { Link } from "react-router-dom";

const PostConLoc = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="post_home post_report post_consensus">
        <div>
          <div className="post_header">
            <img src={undrawVoting} alt="posticon" />
            <h2 className="text_darkblue">
              Post a
              <strong className="text_lightpurple"> Consensus Forming!</strong>
            </h2>
            <p className="text_lightgray">
              Get insights form the community so you make the best decisions!
            </p>
          </div>
        </div>
        <div className="pr_frorm">
          <input
            className="full_input text_lightgray"
            placeholder="Title of the proposal"
            type="text"
          />
          <div className="c_textarea">
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Proposal Description"
              className="bluegreen_border text_lightgray"
            ></textarea>
          </div>
          <span className="text_darkblue fw-bold">
            Enter location or pin location on map
          </span>
          <input
            className="full_input text_lightgray"
            placeholder="Address"
            type="text"
          />
          <img src={pMap} className="pmap" alt="map" />
          <div className="pcontinue_btn ">
            <Link className="text-decoration-none" to="/consensus">
              <button className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border">
                Back
              </button>
            </Link>
            <Link className="text-decoration-none" to="/consensus-options">
              <button className="cus_width100 text-white bg_lightgreen border_none">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostConLoc;
