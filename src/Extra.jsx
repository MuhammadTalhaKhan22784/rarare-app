import React, { useState } from "react";
import { useHistory } from "react-router";
import undrawEmptyCart from "./Assets/undraw_empty_cart.png";
import paypalIcon from "./Assets/paypal_icon.png";
import stripeIcon from "./Assets/stripe_icon.png";
import dbicon1 from "./Assets/dbicon1.png";
import dbicon2 from "./Assets/dbicon2.svg";
import dbicon3 from "./Assets/dbicon3.svg";
import dbicon4 from "./Assets/dbicon4.svg";
import featurebg from "./Assets/featurebg.png";
import undrawInvesting from "./Assets/undraw_Investing_re.png";
import greenDot from "./Assets/greendot.png";
import Button from './Components/Btn/Btn'

import "./App.css";
const Extra = () => {
  const history = useHistory();
  const [show, setShow] = useState("2");

  return (
    <React.Fragment>
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button> */}
        <button className='blnce_btn' data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Buy Loco Points
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog logco_modal_dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>

              <div className="modal-body">
                <div className="post_home postconsensus_home">
                  <div>
                    <div className="post_header">
                      <img src={undrawEmptyCart} alt="posticon" />
                      <h2 className="text_darkblue">
                        Post a
                        <strong className="text_lightpurple">Report!</strong>
                      </h2>
                    </div>
                    <div className="category_select">
                      <div className="cs_tabs_main pp_tabs_main">
                        <div className="cs_tab">
                          <div className="cs_tab_box">
                            <img className="mdl_icon" src={dbicon1} alt="" />
                            <h2 className="text_bluegreen fw-bold">2,000</h2>
                            <p className="text_darkgray">LOCO POINTS</p>
                            <span className="text_bluegreen fw-bold">
                              ₦ 2,500
                            </span>
                          </div>
                        </div>
                        <div className="cs_tab">
                          <div className="cs_tab_box">
                            <div>
                              <img
                                className="featureimg"
                                src={featurebg}
                                alt=""
                              />
                              <h2 className="text-white">Featured</h2>
                            </div>
                            <img className="mdl_icon" src={dbicon2} alt="" />
                            <h2 className="text_bluegreen fw-bold">2,000</h2>
                            <p className="text_darkgray">LOCO POINTS</p>
                            <span className="text_bluegreen fw-bold">
                              ₦ 2,500
                            </span>
                          </div>
                        </div>
                        <div className="cs_tab">
                          <div className="cs_tab_box">
                            <img className="mdl_icon" src={dbicon3} alt="" />
                            <h2 className="text_bluegreen fw-bold">2,000</h2>
                            <p className="text_darkgray">LOCO POINTS</p>
                            <span className="text_bluegreen fw-bold">
                              ₦ 2,500
                            </span>
                          </div>
                        </div>
                        <div className="cs_tab">
                          <div className="cs_tab_box">
                            <img className="mdl_icon" src={dbicon4} alt="" />
                            <h2 className="text_bluegreen fw-bold">2,000</h2>
                            <p className="text_darkgray">LOCO POINTS</p>
                            <span className="text_bluegreen fw-bold">
                              ₦ 2,500
                            </span>
                          </div>
                        </div>
                      </div>
                    
                      <div className="pcontinue_btn ">
                        <button
                          className="cus_width100 text-white bg_lightgreen border_none"
                          data-bs-target="#modal2"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          Continue to payment
                        </button>
                        <button
                          className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
                          onClick={() => {
                            history.push("/consensus");
                          }}
                        >
                          Back
                        </button>
                      </div>
                    
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal2"
          aria-hidden="true"
          aria-labelledby="..."
          tabIndex={-1}
        >
          <div className="modal-dialog logco_modal_dialog lmd2_dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="post_home postconsensus_home">
                  <div>
                    <div className="post_header">
                      <img src={undrawEmptyCart} alt="posticon" />
                      <h2 className="text_darkblue">
                        Post a
                        <strong className="text_lightpurple">Report!</strong>
                      </h2>
                    </div>
                    <div className="category_select">
                      <div className="cs_tabs_main pp_tabs_main">
                        <div className="cs_tab">
                          <div className="cs_tab">
                            <div
                              onClick={() => {
                                setShow("1");
                              }}
                              className={
                                show === "1"
                                  ? "cs_tab_box border_solid green_border"
                                  : "cs_tab_box"
                              }
                            >
                              <img
                                className="c_dot"
                                style={{
                                  display: show === "1" ? "block" : "none",
                                }}
                                src={greenDot}
                                alt=""
                              />
                              <img
                                className="paypal_icon"
                                src={paypalIcon}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="cs_tab">
                          <div className="cs_tab">
                            <div
                              onClick={() => {
                                setShow("2");
                              }}
                              className={
                                show === "2"
                                  ? "cs_tab_box border_solid green_border"
                                  : "cs_tab_box"
                              }
                            >
                              <img
                                className="c_dot"
                                style={{
                                  display: show === "2" ? "block" : "none",
                                }}
                                src={greenDot}
                                alt=""
                              />
                              <img src={stripeIcon} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment_form">
                        <span className="text_black">
                          Login to Paypal to confirm payment!
                        </span>
                        <form className="s_form_fields">
                          {/* <div className="inline_input">
                                <input className="half_input" placeholder="First Name" type="text" />
                                <input className="half_input" placeholder="Last Name" type="text" />
                            </div> */}
                          <div>
                            <input
                              className="full_input"
                              placeholder="Email address"
                              type="email"
                            />
                          </div>
                          <div>
                            <input
                              className="full_input"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="form_btn">
                        <button type="button" className="bg_lightgreen">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Extra;
