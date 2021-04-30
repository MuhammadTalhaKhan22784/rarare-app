import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
// assets
import signupLogo from "../../Assets/s_logo.png";
import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import signupBg from "../../Assets/s_bgright.png";
import xSmallIcon from "../../Assets/x_sm.png";
import xMedumIcon from "../../Assets/x_md.png";
import polygon1 from "../../Assets/polygon_1.png";
import polygon2 from "../../Assets/polygon_2.png";
import dot from "../../Assets/dot.png";
import pwdclose from "../../Assets/pwdclose.png";
import pwdopen from "../../Assets/pwdopen.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);
const Signup = () => {
  const [show, setShow] = useState("1");
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
              <img src={signupLogo} alt="signuplogo" />
            </div>
            <div className="s_text mb-2">
              <h2 className="text_darkblue fw-bold mt-4">
                Sign up to explore{" "}
                <strong className="text_bluegreen">RaRaRe!</strong>
              </h2>
            </div>
            <div className="s_select_box">
              <div
                onClick={() => {
                  setShow("1");
                }}
                className={
                  show === "1"
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box fw-bold gray_border text_lightgray"
                }
              >
                <img
                  className="c_dot"
                  style={{ display: show === "1" ? "block" : "none" }}
                  src={dot}
                  alt=""
                />
                I'm a citizen
              </div>
              <div
                onClick={() => {
                  setShow("2");
                }}
                className={
                  show === "2"
                    ? "s_box fw-bold bluegreen_border text_bluegreen"
                    : "s_box fw-bold gray_border text_lightgray"
                }
              >
                <img
                  className="c_dot"
                  style={{ display: show === "2" ? "block" : "none" }}
                  src={dot}
                  alt=""
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
              <img src={orLine} alt="" />
            </div>
            {show === "1" ? (
              <form className="s_form_fields">
                <div className="inline_input">
                  <input
                    className="half_input"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    className="half_input"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
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
                    <img onClick={showPassword} src={pwdclose} alt="" />
                  ) : (
                    <img onClick={showPassword} src={pwdopen} alt="" />
                  )}
                </div>
                <div className="p_input">
                <input
                  className=""
                  placeholder="Confirm Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdclose} alt="" />
                ) : (
                  <img onClick={showPassword} src={pwdopen} alt="" />
                )}
              </div>
                <div className="form_btn">
                  <button type="button" className="bg_lightgreen">
                    sign up
                  </button>
                </div>
                <span className="s_label text_lightgray">
                  Already a member?{" "}
                  <Link to="/login" className="text_lightpurple">
                    &nbsp;Login
                  </Link>
                </span>
              </form>
            ) : (
              <form className="s_form_fields">
                {/* <div className="inline_input">
                                        <input className="half_input" placeholder="First Name" type="text" />
                                        <input className="half_input" placeholder="Last Name" type="text" />
                                    </div> */}
                <div>
                  <input
                    className="full_input"
                    placeholder="Business Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="full_input"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div>
                  <input
                    className="full_input"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div>
                  <input
                    className="full_input"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>
                <div className="form_btn">
                  <button type="button" className="bg_lightgreen">
                    sign up
                  </button>
                </div>
                <span className="s_label text_lightgray">
                  Already a member?{" "}
                  <Link to="/login" className="text_lightpurple">
                    &nbsp;Login
                  </Link>
                </span>
              </form>
            )}
          </div>
        </div>
        <div className="signup_img_content">
          <img className="sic_1" src={xSmallIcon} alt="" />
          <img className="sic_2" src={xMedumIcon} alt="" />
          <img className="sic_3" src={polygon1} alt="" />
          <img className="sic_4" src={polygon2} alt="" />
          <div>
            <Swiper
              pagination
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg" src={signupBg} alt="signupBg" />
              </SwiperSlide>
            </Swiper>
            {/* <img className="s_bgimg" src={signupBg} alt="signupBg" /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
