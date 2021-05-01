import React, { useLayoutEffect } from "react";
import "./Proposal.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ProposalComponent from "./ProposalComponent/ProposalComponent";
import greenDot from "../../Assets/dot.png";
import location from "../../Assets/Icon material-location-on.png";
import userImage from "../../Assets/Ellipse 226.png";
import ideaIcon from "../../Assets/Component 22 – 2.png";
import handIcon from "../../Assets/Icon awesome-hand-paper.png";
import shareIcon from "../../Assets/Icon awesome-share.png";
import ProposalRightComponent from "./ProposalRightComponent/ProposalRightComponent";
import ProposalRighBottom from "./ProposalRightComponent/ProposalRightBottom";
import { useHistory } from "react-router-dom";

const Proposal = () => {
  let history = useHistory();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <div className="Proposal">
        <div className="Proposal_content_left">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb Proposal_title">
              <li className="breadcrumb-item  text_lightgray">
                Search Result{" "}
              </li>
              <li
                className="breadcrumb-item active text_bluegreen"
                aria-current="page"
              >
                Proposal
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-end  ">
            <Button
              className="buttonW bg_lightgreen text-white "
              variant="contained"
              style={{
                fontSize: "0.9rem",
                textTransform: "initial",
              }}
              onClick={() => {
                history.push("/participate");
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
                  style={{ fontSize: "1rem", margin: "0" }}
                >
                  Title of the proposal
                </h4>
                <div>
                  <div className="kp_h pp_h">
                    <button
                      style={{
                        border: "1px solid grey",
                        fontSize: ".8rem",
                        backgroundColor: "white",
                        padding: "4px",
                      }}
                    >
                      <img src={greenDot} alt="img" />
                      <span className="text_bluegreen">Ongoing</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card_content">
                <div
                  className="title_responsive text_black"
                  style={{
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
                    <img
                      className="icon_size_responsive"
                      src={handIcon}
                      alt="..."
                    ></img>
                  </span>
                  &nbsp; Consenus Forming &nbsp;
                  <span>
                    <img
                      className="icon_size_responsive"
                      src={ideaIcon}
                      alt="..."
                    ></img>
                  </span>
                </div>

                <div
                  className="text_size_responsive text_darkgray"
                  style={{ fontSize: "0.8rem" }}
                >
                  May 1 ,2020
                </div>
              </div>
              <p
                className="text_size_responsive text_lightgray"
                style={{ fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolor onsetet.
              </p>

              <div className="card_content">
                <div
                  className="text_size_responsive"
                  style={{ fontSize: "0.8rem" }}
                >
                  <span>
                    <img
                      className="icon_size_responsive"
                      src={location}
                      alt="..."
                    ></img>
                  </span>
                  &nbsp;
                  <span className="ms-2 text_darkgray fw-bold">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <img
                      className="icon_size_responsiveuser"
                      src={userImage}
                      alt="..."
                    ></img>
                  </span>
                  <span
                    className="text_size_responsive text_lightpurple"
                    style={{ padding: "2px", fontSize: "0.8rem" }}
                  >
                    &nbsp;Username
                  </span>
                </div>
              </div>
              <div id="hr"></div>

              <div className="card_contentLast_row">
                <div>
                  <div
                    className="text_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <span className="card_icon_space">
                      <FavoriteOutlinedIcon
                        className="icon_size_responsive"
                        style={{ color: "lightgray" }}
                      />
                      &nbsp;
                    </span>
                    1.5K
                  </div>
                </div>
                <div>
                  <div
                    className="text_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {" "}
                    <ChatBubbleIcon
                      className="icon_size_responsive"
                      style={{ color: "lightgray" }}
                    />
                    &nbsp;800 Comments
                  </div>
                </div>
                <div>
                  <div
                    className="text_size_responsive text_darkgray fw-bold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <img
                      className="icon_size_responsive"
                      style={{ width: "20px" }}
                      src={shareIcon}
                      alt="..."
                    ></img>
                    &nbsp; 80 Share
                  </div>
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
    </React.Fragment>
  );
};

export default Proposal;
