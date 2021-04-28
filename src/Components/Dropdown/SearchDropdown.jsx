import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Icon, InlineIcon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const SearchDropdown = () => {
  const [val, setVal] = useState("1");
  return (
    <React.Fragment>
      <div className="dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search
        </Link>
        {/* <button
          className="btn se_btn dropdown-toggle d-flex text_black"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search
        </button> */}
        <ul
          className="dropdown-menu langdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <h2>Select a Language</h2>
        </ul>
      </div>

      {/*     
      <li
        className="nav-item position_relative"
        onClick={() => {
          setVal("0");
        }}
      >
        <Link to="#" className="nav-link">
          <button className="dsadad">
            <img src={EN} alt="" /> <span>EN</span>
            <Icon
              className="fs-5 down_arrow"
              icon={baselineKeyboardArrowDown}
            />
          </button>
        </Link>
        <div
          className="submenu .lang_submenu"
          style={{ display: val === "0" ? "block" : "none" }}
        >
          <ul className="submenu-item .lang_item text_lightgray">
            <h2>Select a Language</h2>
            <li className="nav-item">
              
              <button className="lngdrpdwn_btn">
                <img src={EN} alt="" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
            <li className="nav-item">
              <button className="lngdrpdwn_btn">
                <img src={FR} alt="" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
          </ul>
        </div>
      </li>
     */}
    </React.Fragment>
  );
};

export default SearchDropdown;
