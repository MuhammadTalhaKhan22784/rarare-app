import React from "react";
import "./ProposalRightBottom.css";
import Card from "@material-ui/core/Card";
import "../../../App.css";
import Button from "@material-ui/core/Button";

function ProposalRightBottom() {
  return (
    <div className="proposalRightBottom">
      <Card className="card">
        <h3> Your Participation</h3>
        <hr style={{ width: "100%" }}></hr>

        <p
          className="text_lightgray"
          style={{ fontSize: "0.8rem", marginTop: "9px" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </p>

        <div>
          {["A", "B", "C"].map((val) => {
            return (
              <>
                <div className="div_card">
                  <Card className="card_options fw-bold text_darkblue">option {val}</Card>
                </div>
              </>
            );
          })}
        </div>
 
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            // variant="contained"
            style={{ textTransform: "initial" }}
            className="btn1 bg_white border_solid bluegreen_border text_bluegreen fw-bold"
          >
            Back
          </Button>
          &nbsp;&nbsp;
          <Button
            // variant="contained"
            style={{ textTransform: "initial" }}
            className="btn1 bg_lightgreen text-white fw-bold"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ProposalRightBottom;
