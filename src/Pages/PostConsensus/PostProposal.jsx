import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router";

// assets
import undrawVoting from "../../Assets/undraw_voting.png";
import undrawConference from "../../Assets/undraw_conference.png";
import undrawInvesting from "../../Assets/undraw_Investing_re.png";
import undrawAgreement from "../../Assets/undraw_Agreement_re_.png";
import greenDot from "../../Assets/greendot.png";

const PostProposal = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const history = useHistory();
  const [show, setShow] = useState("2");
  return (
    <React.Fragment>
      <div className="post_home postconsensus_home">
        <div>
          <div className="post_header">
            <img src={undrawVoting} alt="posticon" />
            <h2 className="text_darkblue">
              Post a <strong className="text_lightpurple">Proposal!</strong>
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
          <div className="category_select">
            <div className="cs_text">
              <h2 className="text_darkblue">Select a proposal type</h2>
            </div>
            <div className="cs_tabs_main pp_tabs_main">
              <div className="cs_tab">
                <div
                  onClick={() => {
                    setShow("1");
                  }}
                  className={
                    show === "1"
                      ? "cs_tab_box border_solid green_border"
                      : "cs_tab_box"
                  }
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "1" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawInvesting} alt="img" />
                </div>
                <div className="cs_tab_text">
                  <h2 className="text_darkblue fw-bold">Polls</h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
              <div className="cs_tab">
                <div
                  onClick={() => {
                    setShow("2");
                  }}
                  className={
                    show === "2"
                      ? "cs_tab_box border_solid green_border"
                      : "cs_tab_box"
                  }
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "2" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawConference} alt="img" />
                </div>
                <div className="cs_tab_text">
                  <h2 className="text_darkblue fw-bold">Consensus Forming</h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
              <div className="cs_tab">
                <div
                  onClick={() => {
                    setShow("3");
                  }}
                  className={
                    show === "3"
                      ? "cs_tab_box border_solid green_border"
                      : "cs_tab_box"
                  }
                >
                  <img
                    className="c_dot"
                    style={{ display: show === "3" ? "block" : "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawAgreement} alt="img" />
                </div>
                <div className="cs_tab_text">
                  <h2 className="text_darkblue fw-bold">
                    Participatory Budget
                  </h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
            </div>
            <div className="pcontinue_btn">
              <button
                className="text-white bg_lightgreen border_none"
                onClick={() => {
                  history.push(
                    show === "1"
                      ? "/consensus"
                      : show === "2"
                      ? "/consensus-report"
                      : show === "3"
                      ? "/participatory"
                      : "/consensus"
                  );
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostProposal;
