import React from "react";
import { useHistory } from "react-router";
import "./ParticipatoryBudget.css";

// assets
import undrawVoting from "../../Assets/undraw_voting.png";

const PartBudgetBenefits = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_consensus ">
        <div className="pp_budget">
          <div className="post_header">
            <img src={undrawVoting} alt="posticon" />
            <h2 className="text_darkblue">
              Post a
              <strong className="text_lightpurple">
                {" "}
                Participatory Budget!
              </strong>
            </h2>
            <p className="text_lightgray">
              Get insights form the community so you make the best decisions!
            </p>
          </div>

          <div className="pbd_form">
            <h2 className="text_darkblue fw-bold">Budget Benefits</h2>

            <div className="c_textarea">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Proposed Summary"
                className="bluegreen_border text_lightgray"
              ></textarea>
            </div>
          </div>
          <div className="pcontinue_btn">
            <button
              className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
              onClick={() => {
                history.push("/participatory-budget");
              }}
            >
              Back
            </button>
            <button
              className="cus_width100 text-white bg_lightgreen border_none"
              onClick={() => {
                history.push("/participatory-time");
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

export default PartBudgetBenefits;
