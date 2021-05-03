import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import "./PostConsensus.css";

// assets
import postIcon from "../../Assets/post_icon.png";
import addIcon from "../../Assets/add_icon.png";
import { Link } from "react-router-dom";

const PostConOpt = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="post_home postconsensus_opt">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue">
              Post a{" "}
              <strong className="text_lightpurple">Consensus Forming!</strong>{" "}
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
          <div className="category_select">
            <div className="cs_text">
              <h2 className="text_darkblue">Define/add vote options!</h2>
            </div>
            <div className="co_box">
              <div className="co_option_box">
                <select
                  className="form-select border_solid bluegreen_border text_bluegreen"
                  aria-label="Default select example"
                >
                  <option value={1}>Option A</option>
                  <option value={2}>Option B</option>
                  <option value={3}>Option C</option>
                </select>
                <input
                  className="full_input text_lightgray border_solid bluegreen_border"
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
                  type="text"
                />
              </div>
            </div>
            <div className="co_box mt-2">
              <div className="co_option_box">
                <select
                  className="form-select border_solid bluegreen_border text_bluegreen"
                  aria-label="Default select example"
                >
                  <option value={1}>Option A</option>
                  <option value={2}>Option B</option>
                  <option value={3}>Option C</option>
                </select>
                <input
                  className="full_input text_lightgray border_solid bluegreen_border"
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
                  type="text"
                />
              </div>
            </div>
            <div className="co_box mt-2">
              <div className="co_option_box">
                <select
                  className="form-select border_solid bluegreen_border text_bluegreen"
                  aria-label="Default select example"
                >
                  <option value={1}>Option A</option>
                  <option value={2}>Option B</option>
                  <option value={3}>Option C</option>
                </select>
                <input
                  className="full_input text_lightgray border_solid bluegreen_border"
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
                  type="text"
                />
              </div>
            </div>
            <div className="pcontinue_btn pcon_btn mt-3">
              <button className="text-white bg_lightgreen border_none">
                <img className="me-2" src={addIcon} alt="img" />{" "}
                <span>Add another option</span>
              </button>
            </div>
            <div className="pcontinue_btn mt-5">
              <Link className="text-decoration-none" to="/consensus-options">
                <button
                  className="me-3 cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
                  onClick={() => {
                    history.push("/consensus-options");
                  }}
                >
                  Back
                </button>
              </Link>
              <Link className="text-decoration-none" to="/consensus-time">
                <button className="cus_width100 text-white bg_lightgreen border_none">
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

export default PostConOpt;
