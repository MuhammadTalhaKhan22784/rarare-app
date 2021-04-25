import React from "react";
import { useHistory } from "react-router";
// import "../Post.css"

// assets
import undrawVoting from "../../Assets/undraw_voting.png";
import pMap from "../../Assets/pmap.png";

const ParticipatoryBudget = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_report post_consensus">
        <div>
          <div className="post_header">
            <img src={undrawVoting} alt="posticon" />
            <h2 className="text_darkblue">
              Post a
              <strong className="text_lightpurple"> Participatory Budget!</strong>
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
            <button
              className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
              onClick={() => {
                history.push("/consensus");
              }}
            >
              Back
            </button>
            <button
              className="cus_width100 text-white bg_lightgreen border_none"
              onClick={() => {
                history.push("/participatory-budget");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParticipatoryBudget;
