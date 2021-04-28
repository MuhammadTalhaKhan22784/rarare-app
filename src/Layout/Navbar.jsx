import React from "react";
import { Link } from "react-router-dom";
//
import { Icon, InlineIcon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

import "./style.css";
// assets
import rarareLogo from "../Assets/logo_rarare.png";
import LanguageDropdown from "../Components/Dropdown/LanguageDropdown.jsx";
import NotificationDropdown from "../Components/Dropdown/NotificationDropdown";
import CartDropdown from "../Components/Dropdown/CartDropdown";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg c_navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="nav_rarare_logo" src={rarareLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse desk_nav_collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Report an issue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post-survey-tamplate">
                  Post a survey
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  Proposals
                </Link>
              </li>

              <li className="nav-item position_relative">
                <Link to="#" className="nav-link">
                  <span className="menu-title">Business</span>
                  <Icon
                    className="fs-5 down_arrow"
                    icon={baselineKeyboardArrowDown}
                  />
                </Link>

                <div className="submenu">
                  <ul className="submenu-item text_lightgray">
                    <li className="nav-item">Mobile Device Management</li>
                    <li className="nav-item">
                      Connectivity Enabled Healthcare
                    </li>
                    <li className="nav-item">Citizen Engagment</li>
                    <li className="nav-item">Online Consensus Forming</li>
                    <li className="nav-item">Particularly Budgeting</li>
                    <li className="nav-item">Democratic Technology</li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Search
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <LanguageDropdown />
              </li>
              <li className="nav-item">
                <NotificationDropdown />
              </li>
              <li className="nav-item">
                <CartDropdown />
              </li>
              {/* <li className="nav-item">
                <Link to="/signup">
                  <button className="btn s_btn">Sign up</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <button className="bg_lightgreen text-white c_btn">
                    Login
                  </button>
                </Link>
              </li> */}
            </ul>
          </div>
          <div
            className="collapse mob_nav_collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mob_nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login">
                  <button className="bg_lightgreen text-white c_btn">
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/signup">
                  <button className="btn s_btn">Sign up</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Report an issue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post-survey-tamplate">
                  Post a survey
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  Proposals
                </Link>
              </li>

              <li className="nav-item position_relative">
                <Link to="#" className="nav-link">
                  <span className="menu-title">Business</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <LanguageDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
