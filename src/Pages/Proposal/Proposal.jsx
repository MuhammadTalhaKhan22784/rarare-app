import React from "react";
import "./Proposal.css";
import Card from "@material-ui/core/Card";
// import FlagIcon from '@material-ui/icons/Flag';
// import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ProposalComponent from "./ProposalComponent/ProposalComponent";
import greenDot from "../../Assets/dot.png";
import location from "../../Assets/Icon material-location-on.png";
import userImage from "../../Assets/Ellipse 226.png";
import flagImage from "../../Assets/Component 27 – 1.png";
import ideaIcon from "../../Assets/Component 22 – 2.png";
import handIcon from "../../Assets/Icon awesome-hand-paper.png";
import shareIcon from "../../Assets/Icon awesome-share.png";
import ProposalRightComponent from "./ProposalRightComponent/ProposalRightComponent";
import ProposalRighBottom from "./ProposalRightComponent/ProposalRightBottom";
import { useHistory } from "react-router-dom";
function Proposal() {
  let history = useHistory();

  return (
    <div className="Proposal">
      <div className="Proposal_content_left">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb Proposal_title">
            <li class="breadcrumb-item  text_lightgray">Search Result </li>
            <li
              class="breadcrumb-item active text_bluegreen"
              aria-current="page"
            >
              Proposal
            </li>
          </ol>
        </nav>
        <div className="d-flex justify-content-end  ">
          <Button
            className="buttonW bg_lightgreen "
            variant="contained"
            style={{
              fontSize: "0.9rem",
              textTransform: "initial",
            }}
            onClick={() => {
              history.push("/Participate");
            }}
          >
            Participate
          </Button>
        </div>
        <br></br>

        <div className="proposal_card_div">
          <Card className="Proposal_card">
            <div className="card_content">
              {" "}
              <h4
                className="title_responsive text_bluegreen"
                style={{ fontSize: "1.3rem" }}
              >
                Title of the proposal
              </h4>
              {/* <p><button type="button" class="btn-onGoing btn-outline-success"> ongoing</button></p> */}
              <p>
                <div className="kp_h pp_h">
                  <button
                    style={{
                      border: "1px solid grey",
                      fontSize: ".8rem",
                      backgroundColor: "white",
                      padding: "4px",
                    }}
                  >
                    <img src={greenDot} alt="" />
                    <span className="text_bluegreen">Ongoing</span>
                  </button>
                </div>
              </p>
            </div>

            <div className="card_content">
              <p
                className="title_responsive"
                style={{
                  color: "black",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#E1E3F0",
                    padding: "2px 6px 2px 6px",
                    borderRadius: "5px",
                  }}
                >
                  <img className="icon_size_responsive" src={handIcon}></img>
                </span>
                &nbsp; Consenus Forming &nbsp;
                <span>
                  <img className="icon_size_responsive" src={ideaIcon}></img>
                </span>
              </p>

              <p
                className="text_size_responsive text_darkblue"
                style={{ fontSize: "0.8rem" }}
              >
                May 1 ,2020
              </p>
            </div>
            <p
              className="text_size_responsive text_lightgray"
              style={{ fontSize: "0.8rem" }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolor onsetet.
            </p>

            <div className="card_content">
              <p
                className="text_size_responsive"
                style={{ fontSize: "0.8rem" }}
              >
                <span>
                  <img className="icon_size_responsive" src={location}></img>
                </span>
                &nbsp;
                <span className="ms-2 text_darkgray fw-bold">
                  Lorem ipsum dolor sit amet
                </span>
              </p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <img
                    className="icon_size_responsiveuser"
                    src={userImage}
                  ></img>
                </span>
                <span
                  className="text_size_responsive"
                  style={{ padding: "2px", fontSize: "0.9rem" }}
                >
                  &nbsp;Username
                </span>
              </p>
            </div>
            <div id="hr"></div>

            <div className="card_contentLast_row">
              <div>
                <p className="text_size_responsive">
                  <span className="card_icon_space">
                    <FavoriteOutlinedIcon
                      className="icon_size_responsive"
                      style={{ color: "lightgray" }}
                    />
                    &nbsp;
                  </span>
                  1.5K
                </p>
              </div>
              <div>
                <p className="text_size_responsive">
                  {" "}
                  <ChatBubbleIcon
                    className="icon_size_responsive"
                    style={{ color: "lightgray" }}
                  />
                  &nbsp;800 Comments
                </p>
              </div>
              <div>
                <p className="text_size_responsive">
                  <img
                    className="icon_size_responsive"
                    style={{ width: "20px" }}
                    src={shareIcon}
                  ></img>
                  &nbsp; 80 Share
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="proposal_component_main">
          <ProposalComponent />
        </div>
      </div>
      {/* right section  */}
      <div className="Proposal_content_right">
        <ProposalRightComponent />
        <div>
          <ProposalRighBottom />
        </div>
      </div>
    </div>
  );
}

export default Proposal;
