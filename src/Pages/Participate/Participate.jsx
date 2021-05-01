import React from "react";
import "./Participate";
import ParticipateComponent from "./ParticipateComponent";

function Participate() {
  return (
    <div id="Participate">
      <div className="Proposal_content_left ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb Proposal_title">
            <li class="breadcrumb-item  text_lightgray" id="participate_title">
              Search Result{" "}
            </li>
            <li
              class="breadcrumb-item active text_bluegreen"
              aria-current="page"
              id="participate_title"
            >
              Proposal
            </li>
            <li
              class="breadcrumb-item active text_bluegreen"
              aria-current="page"
              id="participate_title"
            >
              Participate
            </li>
          </ol>
        </nav>
      </div>
      <br></br>
      <div className="Proposal_content_right d-flex justify-content-center">
        <div>
          <ParticipateComponent />
        </div>
      </div>
    </div>
  );
}

export default Participate;
