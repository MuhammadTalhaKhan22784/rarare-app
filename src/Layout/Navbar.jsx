import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//
import { Icon, InlineIcon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

import "./style.css";
import LanguageDropdown from "../Components/Dropdown/LanguageDropdown.jsx";
import NotificationDropdown from "../Components/Dropdown/NotificationDropdown";
import CartDropdown from "../Components/Dropdown/CartDropdown";
import SearchDropdown from "../Components/Dropdown/SearchDropdown";
import UserDropdown from "../Components/Dropdown/UserDropdown";

// assets
import rarareLogo from "../Assets/logo_rarare.png";
import userprofileimg from "../Assets/userprofileimg.png";
import path from "../Assets/path.png";
import togglebtn from "../Assets/togglebtn.png";
import MobSearchDropdown from "../Components/Dropdown/MobSearchDropdown";

const Navbar = () => {
  let [isActive, setIsActive] = useState(false);
  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("RUNNGING");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("FMIOEJNSIOLKfindmio");
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);

  const handleLogin = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  };
  const handleLogout = () => {
    setIsActive(false);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg c_navbar" id="top">
        <div
          className={
            isActive ? "c_container container" : "container cn_container"
          }
        >
          <Link className="navbar-brand" to="/">
            <img className="nav_rarare_logo" src={rarareLogo} alt="logo" />
          </Link>
          {isActive ? (
            <div className="d-flex align-items-center">
              <NotificationDropdown
                className={isActive ? "mobnotification" : null}
              />
              <CartDropdown className={isActive ? "mobnotification" : null} />
              <MobSearchDropdown />
              <button
                className="navbar-toggler"
                type="button"
                // data-bs-toggle="collapse"
                // data-bs-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                // // aria-expanded="false"
                // aria-label="Toggle navigation"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img src={togglebtn} alt="" />
                {/* <span className="navbar-toggler-icon" /> */}
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <MobSearchDropdown />
              <button
                className="navbar-toggler"
                type="button"
                // data-bs-toggle="collapse"
                // data-bs-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                // // aria-expanded="false"
                // aria-label="Toggle navigation"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img src={togglebtn} alt="" />
                {/* <span className="navbar-toggler-icon" /> */}
              </button>
            </div>
          )}
          <div
            className="collapse desk_nav_collapse navbar-collapse"
            // id="navbarSupportedContent"
          >
            <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0">
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

              <li className="nav-item position_relative b-navitem">
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
                <SearchDropdown />
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <LanguageDropdown />
              </li>
              {isActive ? (
                <>
                  <img className="path_line" src={path} alt="" />

                  <li className="nav-item">
                    <NotificationDropdown />
                  </li>
                  <img className="path_line" src={path} alt="" />
                  <li className="nav-item">
                    <CartDropdown />
                  </li>
                  <img className="path_line" src={path} alt="" />
                  <li className="nav-item">
                    <UserDropdown logout={handleLogout} />
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/signup">
                      <button className="btn s_btn">Sign up</button>
                    </Link>
                  </li>
                  <li onClick={handleLogin} className="nav-item">
                    <Link to="/login">
                      <button className="bg_lightgreen text-white c_btn">
                        Login
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div
            className="collapse show mob_nav_collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {open ? (
              <ul
                onClick={(e) => e.stopPropagation()}
                className="navbar-nav mob_nav mb-2 mb-lg-0"
              >
                {!isActive ? (
                  <>
                    <li
                      onClick={() => {
                        handleLogin();
                        handleClose();
                      }}
                      className="nav-item"
                    >
                      <Link to="/login">
                        <button className="bg_lightgreen text-white c_btn">
                          Login
                        </button>
                      </Link>
                    </li>
                    <li onClick={handleClose} className="nav-item mb-4">
                      <Link to="/signup">
                        <button className="btn s_btn">Sign up</button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <div className="d-flex flex-column align-items-center">
                    <img className="usericon" src={userprofileimg} alt="" />
                    <div className="userinfo_text align-items-center mt-2">
                      <h2>Salman Altaf</h2>
                      <span className="text_darkgray">
                        salmanaltaf@gmail.com
                      </span>
                    </div>
                    <hr />
                  </div>
                )}
                {/* /user ki profile ani/ */}

                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="/post">
                    Report an issue
                  </Link>
                </li>
                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="/post-survey-tamplate">
                    Post a survey
                  </Link>
                </li>
                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="product">
                    Proposals
                  </Link>
                </li>

                <li
                  onClick={handleClose}
                  className="nav-item position_relative"
                >
                  <Link to="#" className="nav-link">
                    <span className="menu-title">Business</span>
                  </Link>
                </li>

                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="blog">
                    Blog
                  </Link>
                </li>
                {/* <li onClick={handleClose} className="nav-item">
                  <MobSearchDropdown />
                </li> */}
                <li className="nav-item mt-5">
                  <LanguageDropdown />
                </li>
                {isActive ? (
                  <>
                    <li onClick={handleClose} className="nav-item">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li onClick={handleClose} className="nav-item">
                      <Link className="nav-link" to="/account-setting">
                        Account setting
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLogout();
                        handleClose();
                      }}
                      className="nav-item"
                    >
                      <Link onClick={handleClose} className="nav-link" to="#">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
