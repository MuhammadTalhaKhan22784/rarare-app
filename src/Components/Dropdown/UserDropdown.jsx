import React from "react";
import {  useHistory } from "react-router-dom";

import userprofileimg from "../../Assets/userprofileimg.png";
import downicon from "../../Assets/downicon.png";

const UserDropdown = ({ logout }) => {
  const history = useHistory();
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
          <img className="usericon" src={userprofileimg} alt="img" />
          <img className="downicon" src={downicon} alt="img" />
        </button>
        <ul
          className="dropdown-menu userdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <div className="userdrpdwn_content">
            <img className="usericon" src={userprofileimg} alt="img" />
            <div className="userinfo_text">
              <h2>Salman Altaf</h2>
              <span className="text_darkgray">salmanaltaf@gmail.com</span>
            </div>
            <hr />
            <button
              onClick={() => history.push("/post")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Report an issue
            </button>
            <button
              onClick={() => history.push("/post-survey-tamplate")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Post a survey
            </button>
            <button
              onClick={() => history.push("/profile")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Profile
            </button>
            <button
              onClick={() => history.push("/account-setting")}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Account Settings
            </button>
            <button
              onClick={logout}
              className="text_bluegreen bg_white border_solid bluegreen_border"
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default UserDropdown;
