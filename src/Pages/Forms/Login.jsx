import React, { useState, useLayoutEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Forms.css";
// assets

import lgLogo from "../../Assets/lg_logo.png";
import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import loginBg from "../../Assets/lg_bgright.png";
import xSmallIcon from "../../Assets/x_sm.png";
import xMedumIcon from "../../Assets/x_md.png";
import polygon1 from "../../Assets/polygon_1.png";
import polygon2 from "../../Assets/polygon_2.png";
import dot from "../../Assets/dot.png";
import pwdclose from "../../Assets/pwdclose.png";
import pwdopen from "../../Assets/pwdopen.png";
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
                    : "s_box fw-bold gray_border text_lightgray"
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
                    : "s_box fw-bold gray_border text_lightgray"
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
                  className="fp_text text_lightgray"
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
                <Link to="/signup" className="text_lightpurple">
                  &nbsp;Sign Up!
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="login_img_content">
          <img className="lgic_1" src={xSmallIcon} alt="img" />
          <img className="lgic_2" src={xMedumIcon} alt="img" />
          <img className="lgic_3" src={polygon1} alt="img" />
          <img className="lgic_4" src={polygon2} alt="img" />
          {/* <div className="d-flex justify-content-end">
            <img className="s_bgimg1" src={loginBg} alt="loginBg" />
          </div> */}

          <div className="d-flex justify-content-end">
            <Swiper pagination spaceBetween={50} slidesPerView={1}>
              <SwiperSlide>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
