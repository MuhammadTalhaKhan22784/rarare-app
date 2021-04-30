import React, { useState } from "react";
import { Link } from "react-router-dom";

// import enFlag from "../../Assets/PNG/Landing Page/flag_en.png"
import cartIcon from "../../Assets/carticon.png";
import userprofileimg from "../../Assets/userprofileimg.png";
import downicon from "../../Assets/downicon.png";
import { Icon, InlineIcon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const UserDropdown = ({logout}) => {
  const [val, setVal] = useState("1");
  return (
    <React.Fragment>
      <div className="dropdown userinfo_dropdown">
        <div className="userinfo_text">
          <h2>Salman Altaf</h2>
          <span className="text_darkgray">salmanaltaf@gmail.com</span>
        </div>
        <button
          className="btn userdrpdwn_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="usericon" src={userprofileimg} alt="" />
          <img className="downicon" src={downicon} alt="" />
          {/* <img src={} alt=""/> */}
        </button>
        <ul
          className="dropdown-menu userdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <div className="userdrpdwn_content">
            <img className="usericon" src={userprofileimg} alt="" />
            <div className="userinfo_text">
              <h2>Salman Altaf</h2>
              <span className="text_darkgray">salmanaltaf@gmail.com</span>
            </div>
            <hr />
            <button className="text_bluegreen bg_white border_solid bluegreen_border">
              Report an issue
            </button>
            <button className="text_bluegreen bg_white border_solid bluegreen_border">
              Post a survey
            </button>
            <button className="text_bluegreen bg_white border_solid bluegreen_border">
              Profile
            </button>
            <button className="text_bluegreen bg_white border_solid bluegreen_border">
              Account Settings
            </button>
            <button onClick={logout} className="text_bluegreen bg_white border_solid bluegreen_border">
              Logout
            </button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default UserDropdown;
