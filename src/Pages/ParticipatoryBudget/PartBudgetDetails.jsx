import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import "./ParticipatoryBudget.css";

// assets
import undrawVoting from "../../Assets/undraw_voting.png";
import validationIcon from "../../Assets/validationIcon.png";
import InputAdornments from "../../Components/TextFeilds/NumberInput";

const PartBudgetDetails = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_consensus position-relative">
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
            <h2 className="text_darkblue fw-bold">Budget Details</h2>
            <InputAdornments />
            <div className="consensus_validation cv_label1">
              <img className="me-2" src={validationIcon} alt="..." />
              <span className="fs-6">Budget can only be a number</span>
            </div>
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
          <div className="consensus_validation">
              <img className="me-2" src={validationIcon} alt="..." />
              <span className="fs-6">Any front end error!</span>
            </div>
          <div className="pcontinue_btn">
            <button
              className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
              onClick={() => {
                history.push("/participatory");
              }}
            >
              Back
            </button>
            <button
              className="cus_width100 text-white bg_lightgreen border_none"
              onClick={() => {
                history.push("/participatory-benefits");
              }}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="consensus_validation cv_label2">
          <img className="me-2" src={validationIcon} alt="..." />
          <span className="fs-6">Budget can only be a number</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartBudgetDetails;
