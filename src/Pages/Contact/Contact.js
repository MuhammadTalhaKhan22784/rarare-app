import React, { useLayoutEffect } from "react";
import "./Contact.css";
// assets
import lgLogo from "../../Assets/cn_logo.png";
import contactBg from "../../Assets/cn_bgright.png";
import xSmallIcon from "../../Assets/x_sm.png";
import xMedumIcon from "../../Assets/x_md.png";
import girl from "../../Assets/Layer 2@2x.png";
import polygon2 from "../../Assets/Polygon 2@2x.png";
import cros1 from "../../Assets/Group 26@2x.png";
import cros2 from "../../Assets/Group 25@3x.png";
import { Swiper, SwiperSlide } from "swiper/react";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="signup_form">
          <div className="s_form c_form">
            <div className="s_img">
              <img src={lgLogo} alt="lgLogo" />
            </div>
            <div className="s_text">
              <h2 className="text_darkblue fw-bold mt-4">
                <strong className="text_bluegreen">Connect</strong> with us!
              </h2>
            </div>
            <div className="s_para">
              <p className="text_lightgray text-center">
                Write us a few lines and we'll get in touch asap!
              </p>
            </div>

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
              <div className="c_textarea">
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                  className="bluegreen_border text_lightgray"
                ></textarea>
              </div>
              <div className="form_btn con_btn">
                <button type="button" className="bg_lightgreen">
                  Send Message
                </button>
              </div>
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
              className="myGirls_slider"
            >
              <SwiperSlide
                style={{
                  width: "100%",
                  marginRight: "0px ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img className="girl_img" src={girl} alt="img" />
                <img className="polygon3_img" src={polygon2} alt="img" />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100%",
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

export default Contact;
