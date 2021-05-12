import React, { useState, useLayoutEffect } from "react";

// assets
import undrawVoting from "../../Assets/undraw_voting.png";
import undrawConference from "../../Assets/undraw_conference.png";
import undrawInvesting from "../../Assets/undraw_Investing_re.png";
import undrawAgreement from "../../Assets/undraw_Agreement_re_.png";
import greenDot from "../../Assets/greendot.png";
import { Link } from "react-router-dom";

const PostProposal = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className="cs_tab" onClick={()=>{setShow("1")}}>
                <input style={{display:"none"}} type="radio" id="box1" name="box" />
                <label htmlFor="box1" className="cs_tab_box">
                  <img
                    className="c_dot"
                    style={{ display: "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawInvesting} alt="img" />
                </label>
                <div className="cs_tab_text">
                  <h2 className="text_darkblue fw-bold">Polls</h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
              <div className="cs_tab" onClick={()=>{setShow("2")}}>
                <input type="radio" style={{display:"none"}} id="box2" name="box" />
                <label htmlFor="box2" className="cs_tab_box">
                  <img
                    className="c_dot"
                    style={{ display: "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawConference} alt="img" />
                </label>
                <div className="cs_tab_text">
                  <h2 className="text_darkblue fw-bold">Consensus Forming</h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
              <div className="cs_tab" onClick={()=>{setShow("3")}}>
                <input type="radio" style={{display:"none"}} id="box3" name="box" />
                <label htmlFor="box3" className="cs_tab_box ">
                  <img
                    className="c_dot"
                    style={{ display: "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawAgreement} alt="img" />
                </label>
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
              <Link
                className="text-decoration-none"
                to={
                  show === "1"
                    ? "/consensus"
                    : show === "2"
                    ? "/consensus-report"
                    : show === "3"
                    ? "/participatory"
                    : "/consensus"
                }
              >
                <button className="text-white bg_lightgreen border_none">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostProposal;
