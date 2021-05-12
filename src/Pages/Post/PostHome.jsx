import React, { useState, useLayoutEffect } from "react";
import "./Post.css";

// assets
import postIcon from "../../Assets/post_icon.png";
import undrawFeeling from "../../Assets/undraw_feeling.png";
import undrawHappy from "../../Assets/undraw_happy.png";
import greenDot from "../../Assets/greendot.png";
import { Link } from "react-router-dom";

const PostHome = () => {
  const [show, setShow] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="post_home">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue">
              Post a <strong className="text_lightpurple">Report!</strong>{" "}
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
          <div className="category_select">
            <div className="cs_text">
              <h2 className="text_darkblue">Select a Category</h2>
            </div>
            <div className="cs_tabs_main">
              <div
                className="cs_tab"
                onClick={() => {
                  setShow(true);
                }}
              >
                <input
                  style={{ display: "none" }}
                  type="radio"
                  id="box1"
                  name="box"
                />
                <label htmlFor="box1" className="cs_tab_box">
                  <img
                    className="c_dot"
                    style={{ display: "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawFeeling} alt="img" />
                </label>
                <div className="cs_tab_text">
                  <h2 className="text_bluegreen">Rant</h2>
                  <p className="text_lightgray">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonu
                  </p>
                </div>
              </div>
              <div
                className="cs_tab"
                onClick={() => {
                  setShow(false);
                }}
              >
                <input
                  style={{ display: "none" }}
                  type="radio"
                  id="box2"
                  name="box"
                />
                <label htmlFor="box2" className="cs_tab_box">
                  <img
                    className="c_dot"
                    style={{ display: "none" }}
                    src={greenDot}
                    alt="img"
                  />
                  <img src={undrawHappy} alt="img" />
                </label>
                <div className="cs_tab_text">
                  <h2 className="text_bluegreen">Rave</h2>
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
                to={show === true ? "/post-report" : "/post"}
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

export default PostHome;
