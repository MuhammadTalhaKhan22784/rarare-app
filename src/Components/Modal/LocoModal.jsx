import React, { useState } from "react";
import "./modal.css"
import { useHistory } from "react-router";
import undrawEmptyCart from "../../Assets/undraw_empty_cart.png";
import paypalIcon from "../../Assets/paypal_icon.png";
import stripeIcon from "../../Assets/stripe_icon.png";
import dbicon1 from "../../Assets/dbicon1.png";
import dbicon2 from "../../Assets/dbicon2.svg";
import dbicon3 from "../../Assets/dbicon3.svg";
import dbicon4 from "../../Assets/dbicon4.svg";
import featurebg from "../../Assets/featurebg.png";
import greenDot from "../../Assets/greendot.png";
import { Dialog } from "@material-ui/core";


const LocoModal = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <React.Fragment>
      <div>
        <button className="blnce_btn" onClick={handleClickOpen}>
          Buy Loco Points
        </button>
        {/* Modal */}
        <Dialog
          className="logco_modal_dialog"
          maxWidth="xl"
          open={open}
          onClose={handleClose}
          scroll="body"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                onClick={handleClose}
                type="button"
                className="btn-close"
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
                          <img className="mdl_icon" src={dbicon1} alt="img" />
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
                              alt="img"
                            />
                            <h2 className="text-white">Featured</h2>
                          </div>
                          <img className="mdl_icon" src={dbicon2} alt="img" />
                          <h2 className="text_bluegreen fw-bold">2,000</h2>
                          <p className="text_darkgray">LOCO POINTS</p>
                          <span className="text_bluegreen fw-bold">
                            ₦ 2,500
                          </span>
                        </div>
                      </div>
                      <div className="cs_tab">
                        <div className="cs_tab_box">
                          <img className="mdl_icon" src={dbicon3} alt="img" />
                          <h2 className="text_bluegreen fw-bold">2,000</h2>
                          <p className="text_darkgray">LOCO POINTS</p>
                          <span className="text_bluegreen fw-bold">
                            ₦ 2,500
                          </span>
                        </div>
                      </div>
                      <div className="cs_tab">
                        <div className="cs_tab_box">
                          <img className="mdl_icon" src={dbicon4} alt="img" />
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
                        onClick={() => {
                          handleClose();
                          handleClickOpen2();
                        }}
                      >
                        Continue to payment
                      </button>
                      <button
                        className="cus_width100 text_bluegreen bg_white border_solid bluegreen_border"
                        onClick={() => {
                          history.push("#");
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
        </Dialog>
        <Dialog
          maxWidth="xl"
          open={open2}
          onClose={handleClose2}
          scroll="body"
          className="logco_modal_dialog lmd2_dialog"
        >
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose2}
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
                      <div className="cs_tabs_main pp_tabs_main mob_pptabs">
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
                              alt="img"
                            />
                            <img
                              className="paypal_icon"
                              src={paypalIcon}
                              alt="img"
                            />
                          </div>
                        </div>
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
                              alt="img"
                            />
                            <img src={stripeIcon} alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="payment_form mob_payment_form">
                        <span className="text_black">
                          Login to Paypal to confirm payment!
                        </span>
                        <form className="s_form_fields">
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
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default LocoModal;
