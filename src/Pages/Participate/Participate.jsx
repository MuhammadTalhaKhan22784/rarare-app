import React from "react";
import "./Participate";
import Card from "@material-ui/core/Card";
// import FlagIcon from '@material-ui/icons/Flag';
// import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import greenDot from "../../Assets/dot.png";
import location from "../../Assets/Icon material-location-on.png";
import userImage from "../../Assets/Ellipse 226.png";
import flagImage from "../../Assets/Component 27 – 1.png";
import ideaIcon from "../../Assets/Component 22 – 2.png";
import handIcon from "../../Assets/Icon awesome-hand-paper.png";
import shareIcon from "../../Assets/Icon awesome-share.png";
import ProposalRightComponent from "../Proposal/ProposalRightComponent/ProposalRightComponent";
import ProposalRighBottom from "../Proposal/ProposalRightComponent/ProposalRightBottom";
import ProposalComponent from "../Proposal/ProposalComponent/ProposalComponent";
import ParticipateComponent from "./ParticipateComponent";
import { useHistory } from "react-router-dom";
function Participate() {
  let history = useHistory();

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
      {/* right section  */}
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
