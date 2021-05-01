import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";

import search2 from "../../Assets/Icon feather-search.png";
import iconmap from "../../Assets/iconmap.png";

import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const SearchDropdown = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <React.Fragment>
      <div className="dropdown search-dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          id="dropdownMenuButton1"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          Search
        </Link>

        {open && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="dropdown-menu search_menu show"
          >
            <div className="search_main">
              <div className="sinput1 border_solid bluegreen_border">
                <img src={search2} alt="img" />
                <input
                  className="search_finput text_lightgray"
                  type="text"
                  placeholder="Search the community"
                />
              </div>
              <div className="sinput2 border_solid bluegreen_border">
                <img src={iconmap} alt="img" />
                <input
                  className="search_sinput text_lightgray"
                  type="text"
                  placeholder="Togo, Nigeria"
                />
                <GrFormClose />
              </div>
              <div className="search_btn">
                <button className="bg_lightgreen text-white">Search</button>
              </div>
            </div>
            <div className="advance-filter">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <span className="menu-title">Advamce Filter</span>
                  <Icon
                    className="fs-5 down_arrow"
                    icon={baselineKeyboardArrowDown}
                  />
                </Link>

                <div className="af_submenu">
                  <ul className="af_submenu-item text_lightgray">
                    <div className="af_smi_1">
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">All </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">Rants </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">Raves </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">Surveys </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">Polls </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="s_checkbox">
                          <label className="sc_label text_lightgray">
                            <input type="checkbox" name="key" value="value" />
                            <span className="text_black fw-bold">
                              Delibrations{" "}
                            </span>
                          </label>
                        </div>
                      </li>
                    </div>
                    <div className="af_smi_2">
                      <button className="bg_lightgreen border_none text-white">
                        Apply Filters
                      </button>
                      <span className="text_bluegreen">Reset Filters</span>
                    </div>
                  </ul>
                </div>
              </li>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchDropdown;
