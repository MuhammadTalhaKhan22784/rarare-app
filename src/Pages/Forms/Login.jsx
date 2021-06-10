import React, { useState, useLayoutEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Forms.css";
// assets

import lgLogo from "../../Assets/lg_logo.png";
import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import dot from "../../Assets/dot.png";
import pwdclose from "../../Assets/pwdclose.png";
import pwdopen from "../../Assets/pwdopen.png";
import girl from "../../Assets/Layer 2@2x.png";
import polygon2 from "../../Assets/Polygon 2@2x.png";
import cros1 from "../../Assets/Group 26@2x.png";
import cros2 from "../../Assets/Group 25@3x.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Login = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="signup_form">
          <div className="s_form">
            <div className="s_img">
              <img src={lgLogo} alt="lgLogo" />
            </div>
            <div className="s_text">
              <h2 className="text_darkblue fw-bold mt-4">
                Login to the{" "}
                <strong className="text_bluegreen">Network!</strong>
              </h2>
            </div>
            <div className="s_para">
              <p className="text_lightgray">
                Login to your account using your email address and password and
                start exploring the world of the Rarare!
              </p>
            </div>
            <div className="s_select_box">
              <div
                onClick={() => {
                  setShow(true);
                }}
                className={
                  show === true
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box gray_border text_lightgray"
                }
              >
                <img
                  style={{ display: show === true ? "block" : "none" }}
                  src={dot}
                  alt="img"
                />
                I'm a citizen
              </div>
              <div
                onClick={() => {
                  setShow(false);
                }}
                className={
                  show === false
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box gray_border text_lightgray"
                }
              >
                <img
                  style={{ display: show === false ? "block" : "none" }}
                  src={dot}
                  alt="img"
                />
                I'm an authority/business
              </div>
            </div>
            <div className="s_social_btn">
              <button className="bg_blue">
                <img src={fbIcon} alt="fbicon" />
                <span className="ms-2">Login with Facebook</span>
              </button>
              <button className="bg_red">
                <img src={gmailIcon} alt="gmailicon" />
                <span className="ms-2">Login with Google</span>
              </button>
            </div>
            <div className="or_line">
              <img src={orLine} alt="img" />
            </div>

            <form className="s_form_fields">
              <div>
                <input
                  className="full_input"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="p_input">
                <input
                  className=""
                  placeholder="Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                )}
              </div>

              <div className="s_checkbox">
                <label className="sc_label text_lightgray">
                  <input type="checkbox" name="key" value="value" />
                  <span>Remember me</span>
                </label>
                <span
                  className="fp_text text_bluegreen"
                  onClick={() => {
                    history.push("forget");
                  }}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="form_btn">
                <button type="button" className="bg_lightgreen">
                  Login
                </button>
              </div>
              <span className="s_label text_lightgray">
                Not a member?{" "}
                <Link to="/signup" className="text_bluegreen">
                  &nbsp;Sign Up!
                </Link>
              </span>
            </form>
          </div>
        </div>
    
        <div className="login_img_content">
          <div className="reinvite_img_div">
            <div className="cros_img_div">
              <img className="cros1_home" src={cros1} alt="img" />
              <img className="cros2_home" src={cros2} alt="img" />
            </div>
            <ul className="see_world_ul">
              <li className="li1">Change how you see the world! </li>
              <li className="li2">You are a citizen of Global Village! 😄</li>
              <li className="li3">Change how you see the world! </li>
            </ul>
            <Swiper
              // pagination
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ disableOnInteraction: false, delay: 2500 }}
              // style={{ width: "50%" }}
              className="myGirls_slider"
            >
              <SwiperSlide
                style={{
                  width: "100%",
                  // height: "475px",
                  marginRight: "0px ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img className="girl_img" src={girl} alt="img" />
                {/* <img className="polygon2_img2" src={polygon2} alt="img" /> */}
                <img className="polygon3_img" src={polygon2} alt="img" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100%",
                  // height: "475px",
                  marginRight: "0px ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <div className="cros_img_div">
                <img className="cros1_home" src={cros1} alt="img" />
                <img className="cros2_home" src={cros2} alt="img" />
              </div>
              <ul className="see_world_ul">
                <li className="li1">Change how you see the world! </li>
                <li className="li2">You are a citizen of Global Village! 😄</li>
                <li className="li3">Change how you see the world! </li>
              </ul> */}
                <img className="girl_img" src={girl} alt="img" />
                <img className="polygon3_img" src={polygon2} alt="img" />
              </SwiperSlide>
              {/* <img className="girl_img" src={girl} alt="img" /> */}
              {/* <img className="polygon2_img2" src={polygon2} alt="img" /> */}
              {/* <img className="polygon3_img" src={polygon2} alt="img" /> */}
            </Swiper>
            {/* <img className="polygon2_img2" src={polygon2} alt="img" /> */}
          </div>
        </div>
    
      </div>
    </React.Fragment>
  );
};

export default Login;
