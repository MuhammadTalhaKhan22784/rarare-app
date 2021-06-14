import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Forms.css";
// assets
import xSmallIcon from "../../Assets/Group 26@2x.png";
import xMedumIcon from "../../Assets/Group 25@3x.png";
import polygon1 from "../../Assets/Polygon 3@2x.png";
import polygon2 from "../../Assets/Polygon 2@2x.png";
import lgbgright from "../../Assets/lg_bgright.png";
import forgotlogo from "../../Assets/forgotlogo.png";
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
                <Link to="/login" className="text_bluegreen">
                  &nbsp;Try logging in again!
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="login_img_content cus_img_content">
          <img className="lgic_1" src={xSmallIcon} alt="img" />
          <img className="lgic_2" src={xMedumIcon} alt="img" />
          <img className="lgic_3" src={polygon1} alt="img" />
          <img className="lgic_4" src={polygon2} alt="img" />

          <div className="d-flex justify-content-end">
            <Swiper
              pagination
              autoplay={{ disableOnInteraction: false, delay: 2500 }}
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide style={{ height: "550px" }}>
                <img className="s_bgimg1" src={lgbgright} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={lgbgright} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={lgbgright} alt="img" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="s_bgimg1" src={lgbgright} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forget;
