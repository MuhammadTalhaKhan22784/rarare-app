import React,{useLayoutEffect} from "react";
import "./Participate";
import ParticipateComponent from "./ParticipateComponent";

function Participate() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div id="Participate">
      <div className="Proposal_content_left">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb Proposal_title">
            <li className="breadcrumb-item  text_lightgray" id="participate_title">
              Search Result{" "}
            </li>
            <li
              className="breadcrumb-item active text_bluegreen"
              aria-current="page"
              id="participate_title"
            >
              Proposal
            </li>
            <li
              className="breadcrumb-item active text_bluegreen"
              aria-current="page"
              id="participate_title"
            >
              Participate
            </li>
          </ol>
        </nav>
      </div>
      <br></br>
      <div className="Proposal_content_right mob2prb d-flex justify-content-center">
        <div>
          <ParticipateComponent />
        </div>
      </div>
    </div>
  );
}

export default Participate;
