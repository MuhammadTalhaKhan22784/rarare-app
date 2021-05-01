import React from "react";
import "./Participate.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

function Participate() {
  return (
    <div className="ParticipateRightBottom">
      <Card className="Participate_card">
        <h3 className="text_participate"> Your Participation</h3>
        <hr style={{ width: "100%" }}></hr>

        <p
          className="text_lightgray"
          style={{ fontSize: "0.9rem", marginTop: "9px" }}
        >
          Hey , I want this design in my website but change the color theme
        </p>

        <div>
          {["A", "B", "C"].map((val) => {
            return (
              <>
                <div className="div_card">
                  <Card className="card_options">option {val}</Card>
                </div>
              </>
            );
          })}
        </div>

        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            className="btn1"
          >
            Back
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            className="btn1"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Participate;
