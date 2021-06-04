import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Forms.css";
// assets
import forgotlogo from "../../Assets/forgotlogo.png";
import polygon2 from "../../Assets/Polygon 2@2x.png";
import cros1 from "../../Assets/Group 26@2x.png";
import cros2 from "../../Assets/Group 25@3x.png";
import girl from "../../Assets/Layer 2@2x.png";
const Forget = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="signup_form">
          <div className="s_form forget_form">
            <div className="s_img">
              <img src={forgotlogo} alt="lgLogo" />
            </div>
            <div className="s_text mb-2">
              <h2 className="text_darkblue fw-bold mt-4">
                Forgot <strong className="text_bluegreen">Password</strong>
              </h2>
            </div>
            <div className="s_para">
              <p className="text_lightgray">
                Enter your email address and we'll send you a magic link to
                recover your account!
              </p>
            </div>

            <form className="s_form_fields">
              <div>
                <input
                  className="full_input"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="form_btn ">
                <button
                  style={{ width: "max-content", padding: "0 15px" }}
                  className="border_none bg_lightgreen"
                >
                  Recover Password
                </button>
              </div>
              <span className="s_label text_lightgray">
                Got a hint?{" "}
                <Link to="/login" className="text_lightpurple">
                  &nbsp;Try logging in again!
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
                <img className="girl_img" src={girl} alt="img" />
                <img className="polygon3_img" src={polygon2} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forget;
