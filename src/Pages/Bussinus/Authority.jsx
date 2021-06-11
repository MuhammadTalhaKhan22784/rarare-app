import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Btn/Btn";
// assets
import dot from "../../Assets/greendot.png";
import businesslogo from "../../Assets/businesslogo.png";

import "./Bussines.css";

const Authority = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bussines_container">
      <div className="bussines_main_div">
        <div className="bussine_top_img_div">
          <img src={businesslogo} alt="lgLogo" />
        </div>
        <h5 className="bussines_head">
          <strong>
            Authority/Business{" "}
            <strong style={{ color: "#19C2A0" }}> Registration!</strong>
          </strong>
        </h5>
        <div className="bussines_para mt-3">
          <p>Please provide the following to complete registration!</p>
        </div>
        <div className="two_box_div">
          <div className="cs_tabs_main bsns_main_tabs">
            <div className="cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box1"
                name="box"
              />
              <label htmlFor="box1" className="cs_tab_box busns_tab">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">I represent an authority</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
              </label>
            </div>
            <div className="cs_tab">
              <input
                style={{ display: "none" }}
                type="radio"
                id="box2"
                name="box"
              />
              <label htmlFor="box2" className="cs_tab_box busns_tab">
                <img
                  className="c_dot"
                  style={{ display: "none" }}
                  src={dot}
                  alt="img"
                />
              <div className="cs_tab_text">
                <h2 className="text_bluegreen">I represent a business</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonu
                </p>
              </div>
              </label>
            </div>
          </div>
        </div>
        <div className="business_btn_div">
          <Button className="bussines_white_btn" value="Back" />
          <Link to="/business-info">
            <Button className="bussines_grn_btn" value="Continue" />
          </Link>
        </div>
        <div className="busines_login_div">
          <p className="busines_login_para">Already a member ?</p>
          <Link className="busi_login_link text_bluegreen" to='/login' >Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Authority;
