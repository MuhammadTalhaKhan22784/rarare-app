import React, { useState } from "react";
import { Link } from "react-router-dom";

// import enFlag from "../../Assets/PNG/Landing Page/flag_en.png"
import notificationIcon from "../../Assets/notification-icon.png";
import { Icon, InlineIcon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const NotificationDropdown = () => {
  const [val, setVal] = useState("1");
  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn notif_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={notificationIcon} alt="" />
        </button>
        <ul
          className="dropdown-menu notification_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <h2>Select a Language</h2>
          <li>
            <div className="notif_title">
              <div className="nt_head">
                <h6>Notification Title</h6>
                <span>April,2021</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NotificationDropdown;
