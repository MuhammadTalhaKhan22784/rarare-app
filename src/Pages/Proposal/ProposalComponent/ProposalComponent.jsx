import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import userImage from "../../../Assets/Ellipse 226.png";
// import Avatar from '@material-ui/core/Avatar'
import "./ProposalComponent.css";
import SendIcon from "@material-ui/icons/Send";
import shareIcon from "../../../Assets/Icon awesome-share.png";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function proposal_component() {
  return (
    <div className="proposal_component_card">
      <Card
        className="proposalComponent_card"
        style={{
          backgroundColor: "#F5F5F9",
          boxShadow: "1px -1px 10px -3px #ccc",
        }}
      >
        <div className="proposalComponent_card_content">
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              fontSize: "0.9rem",
              textTransform: "initial",
            }}
            className="btn1 fw-bold"
          >
            <FavoriteOutlinedIcon
              className="icon_responsive"
              style={{ color: "#D3D3D3", fontSize: "19px" }}
            />
            &nbsp;<span className="text_darkgray">Like</span>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              fontSize: "0.9rem",
              textTransform: "initial",
            }}
            className="btn_same2 fw-bold"
          >
            <ChatBubbleIcon
              className="icon_responsive"
              style={{ color: "#D3D3D3", fontSize: "19px" }}
            />
            &nbsp;<span className="text_darkgray">Comments</span>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              fontSize: "0.9rem",
              textTransform: "initial",
            }}
            className="btn_same fw-bold"
          >
            <img
              className="icon_responsive"
              style={{ width: "14px" }}
              src={shareIcon}
            ></img>
            &nbsp;<span className="text_darkgray">Share</span>
          </Button>
        </div>
        <div className="card_content_component">
          {[1, 2, 3].map((val) => {
            return (
              <>
                <div className="card_review_component">
                  <p style={{ display: "flex", alignItems: "center" }}>
                    <span>
                      <img src={userImage}></img>
                    </span>
                    <span
                      className="text_darkgray fw-bold"
                      style={{ padding: "3px", fontSize: "0.8rem" }}
                    >
                      &nbsp;Username
                    </span>
                  </p>
                  <p className="text_lightgray" style={{ fontSize: "0.8rem" }}>
                    05:00 PM / May , 1 , 2021
                  </p>
                </div>
                <div
                  className="card_review_component_text text_lightgray"
                  style={{ fontSize: "0.8rem", marginTop: "2px" }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </div>

                <br></br>
              </>
            );
          })}
        </div>
      </Card>

      <div className="comments">
        <input
          className="input_comment"
          placeholder="Post a Comment here"
        ></input>
        <div className="hr_space" style={{ paddingLeft: "1px" }}>
          <span
            className="hr_space"
            style={{ paddingLeft: "2px", paddingRight: "2px" }}
          >
            <InsertEmoticonIcon />
          </span>
          &nbsp;
          <span style={{ border: "1px solid gray", height: "42px" }}></span>
          &nbsp;
          <span>
            <SendIcon
              className="responsive_send_icon"
              style={{ color: "#45C1A1" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default proposal_component;
