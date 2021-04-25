import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
// assets

import lgLogo from "../../Assets/cn_logo.png";
import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import contactBg from "../../Assets/cn_bgright.png";
import xSmallIcon from "../../Assets/x_sm.png";
import xMedumIcon from "../../Assets/x_md.png";
import polygon1 from "../../Assets/polygon_1.png";
import polygon2 from "../../Assets/polygon_2.png";

const Contact = () => {
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
          <img className="lgic_1" src={xSmallIcon} alt="" />
          <img className="lgic_2" src={xMedumIcon} alt="" />
          <img className="lgic_3" src={polygon1} alt="" />
          <img className="lgic_4" src={polygon2} alt="" />
          <div className="d-flex justify-content-end">
            <img className="s_bgimg" src={contactBg} alt="contactBg" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
