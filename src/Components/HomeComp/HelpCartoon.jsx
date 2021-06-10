import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Btn/Btn";
// assets
import cartoon from "../../Assets/cartoon.png";
import smCarton from "../../Assets/Group 4694@2x.png";
import lang from "../../Assets/Component 3 – 2.png";
import mute from "../../Assets/Icon awesome-volume-mute.png";
import mic from "../../Assets/Icon awesome-microphone@2x.png";
import refresh from "../../Assets/Icon feather-refresh-ccw.png";
import frc from "../../Assets/Group 4699.png";
import eng from "../../Assets/Group 4698.png";

const HelpCartoon = () => {
  const history = useHistory();
  return (
    <div className="carton_container">
      <div className="carton_div">
        <img className="cartoonImg" src={cartoon} alt="img" />
        <div className="helpChat_div">
          <div className="help_chat_head_div">
            <ul className="webName_ul">
              <li>
                <img className="smCartoonImg" src={smCarton} alt="img" />
              </li>
              <li>
                <p className="webName">RaRaRe</p>
              </li>
            </ul>
            <ul className="mute_ul">
              <li>
                <img className="smCartoonImg" src={mute} alt="img" />
              </li>
              <li>
                <img className="smCartoonImg" src={refresh} alt="img" />
              </li>
              <li className="slct_lang_li">
                <img className="smCartoonImg_lang" src={lang} alt="img" />
                <div className="lang_relt_div">
                  <div>
                    <img src={eng} alt="img" /> <span>English</span>
                  </div>
                  <div>
                    <img src={frc} alt="img" /> <span>French</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="help_msgs_div">
            <ul className="help_msg_ul">
              <li>
                <img className="msg_smCartoonImg" src={smCarton} alt="img" />
                <p className="help_msg_para">
                  Hello there! Good morning!
                  <br /> It`s now 05:00 PM in Islamabad, Pakistan!
                </p>
              </li>
              <li>
                <img className="msg_smCartoonImg" src={smCarton} alt="img" />
                <p className="help_msg_para">
                  Hello there! Good morning! it`s now 05:00 PM in Islamabad,
                  Pakistan!
                </p>
              </li>
              <li>
                <img className="msg_smCartoonImg" src={smCarton} alt="img" />
                <p className="help_msg_para">
                  Hello there! Good morning! it`s now 05:00 PM in Islamabad,
                  Pakistan!
                </p>
              </li>
            </ul>
            <p className="date">12:45 PM</p>
            <div className="buttonDiv">
              <Button
                onClick={() => history.push("/login")}
                className="chat_btn"
                value="Login"
              />
              <Button
                onClick={() => history.push("/signup")}
                className="chat_btn m_left"
                value="Sign up"
              />
            </div>
          </div>
          <div className="help_input_div">
            <img className="mic_img" src={mic} alt="img" />
            <input
              className="help_input"
              type="text"
              placeholder="How can I help you?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCartoon;
