import React from "react";
import "../../../App.css";
import "./ProposalRightBottom.css";
import Card from "@material-ui/core/Card";
import greenDot from "../../../Assets/greendot.png";

function ProposalRightBottom() {
  return (
    <div className="proposalRightBottom mobprb">
      <Card className="card">
        <h3> Your Participation</h3>
        <hr style={{ width: "100%" }}></hr>

        <p
          className="text_lightgray"
          style={{ fontSize: "0.9rem", marginTop: "9px" }}
        >
          Hey , I want this design in my website but change the color theme
        </p>

        <div>
          {["A", "B", "C"].map((val, i) => {
            return (
              <div key={i}>
                <input
                  style={{ display: "none" }}
                  type="radio"
                  id={`box${i + 1}`}
                  name="box"
                />
                <label
                  htmlFor={`box${i + 1}`}
                  className="div_card position-relative"
                  style={{
                    width: "98%",
                    margin: "10px auto 0 auto",
                  }}
                >
                  <Card className="card_options">option {val}</Card>
                  <img
                    className="c_dot"
                    style={{ display: "none", top: "20px", right: "20px" }}
                    src={greenDot}
                    alt="img"
                  />
                </label>
              </div>
            );
          })}
        </div>

        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ height: "35px", width: "110px", borderRadius: "5px" }}
            className="bg_white text_bluegreen border_solid bluegreen_border"
          >
            Back
          </button>
          &nbsp;&nbsp;
          <button
            style={{ height: "35px", width: "110px", borderRadius: "5px" }}
            className="bg_lightgreen border_none text-white"
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
}

export default ProposalRightBottom;
