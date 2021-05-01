import React from "react";

import notificationIcon from "../../Assets/notification-icon.png";

const NotificationDropdown = ({ className }) => {
  return (
    <React.Fragment>
      <div className={`dropdown ${className}`}>
        <button
          className="btn notif_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={notificationIcon} alt="img" />
        </button>
        <ul
          className="dropdown-menu notification_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <h2>Unread Notification</h2>
          <li>
            <div className="notif_title">
              <div className="nt_head">
                <h6 className="text_darkblue">Notification Title</h6>
                <span className="text_lightgray">April,2021</span>
              </div>
              <p className="text_darkgray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae.
              </p>
            </div>
          </li>
          <li>
            <div className="notif_title">
              <div className="nt_head">
                <h6 className="text_darkblue">Notification Title</h6>
                <span className="text_lightgray">April,2021</span>
              </div>
              <p className="text_darkgray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae.
              </p>
            </div>
          </li>
          <h2>Unread Notification</h2>
          <li>
            <div className="notif_title">
              <div className="nt_head">
                <h6 className="text_darkblue">Notification Title</h6>
                <span className="text_lightgray">April,2021</span>
              </div>
              <p className="text_darkgray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae.
              </p>
            </div>
          </li>
          <li>
            <div className="notif_title light_purple">
              <div className="nt_head">
                <h6 className="text_darkblue">Notification Title</h6>
                <span className="text_lightgray">April,2021</span>
              </div>
              <p className="text_darkgray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae.
              </p>
            </div>
          </li>
          <li>
            <h6 className="va_text text-center text_bluegreen">view all</h6>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NotificationDropdown;
