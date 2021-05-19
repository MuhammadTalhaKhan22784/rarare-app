import React, { useLayoutEffect } from "react";
import "./PostConsensus.css";

// assets
import receiveTick from "../../Assets/receive_tick.png";
import greenDot from "../../Assets/dot.png";
import IconHandPaper from "../../Assets/Icon awesome-hand-paper.png";
import location from "../../Assets/location.png";
import { Link } from "react-router-dom";

const PostConsensusReceive = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="post_receive ">
        <div className="p_receive_main post_consensus_receive">
          <img src={receiveTick} alt="tick" />
          <h2 className="lh-base text_darkblue mt-4 fw-bold">
            Thankyou! Your proposal is submitted!
          </h2>
          <p className="text_lightgray">
            Sit back and relax while we spread the word!
          </p>
          <div className="kp_box">
            <div className="kp_h">
              <h2 className="text_darkblue lh-base">
                Kent Park: Renovation work
              </h2>
              <button className="border_solid bluegreen_border">
                <img src={greenDot} alt="img" />
                <span className="text_bluegreen">Ongoing</span>
              </button>
            </div>
            <div className="kp_text">
              <div>
                <img src={IconHandPaper} alt="img" />
              </div>
              <span className="text_black">Consensus Forming</span>
            </div>
            <div className="kp_para">
              <p className="text_lightgray lh-base">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
            <div className="kp_text">
              <img className="c_loc" src={location} alt="img" />
              <span className="text_black">Consensus Forming</span>
            </div>
          </div>

          <div className="pcontinue_btn ">
            <Link className="text-decoration-none" to="/consensus">
              <button className="cus_width100 text-white bg_lightgreen border_none">
                Post another proposal!
              </button>
            </Link>
            <div className="pcr_btn">
            <Link className="text-decoration-none" to="/consensus-time">
              <button className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border">
                View Proposal
              </button>
            </Link>
            <Link className="text-decoration-none" to="/consensus-time">
              <button className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border">
                Share on Social
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostConsensusReceive;
