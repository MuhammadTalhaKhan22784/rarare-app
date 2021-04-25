import React from "react";
import "./Pricing.css";
// assets
import priceMain1 from "../../Assets/price_1.png";
import tickImage from "../../Assets/tick.png";
import pBox from "../../Assets/p_box.png";
import pBox1 from "../../Assets/p_box1.png";
import enBox1 from "../../Assets/en_box1.png";
import enBox2 from "../../Assets/en_box2.png";
import appStoreIcon from "../../Assets/App store Icons.png";
import mdmBox from "../../Assets/mdm_box.png";
import watchVideo from "../../Assets/watch_vid.png";
import priceTick from "../../Assets/price_tick.png";

const Pricing = () => {
  return (
    <React.Fragment>
      <div className="pricing_page">
        <div className="price_main_1">
          <div className="price_main_1_content container">
            <div className="row">
              <div className="col-lg-3">
                <div className="price_main_card">
                  <img src={priceMain1} alt="price" />
                  <h2>Simple</h2>
                  <div className="price_main_card_content">
                    <ul>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="price_main_card">
                  <img src={priceMain1} alt="price" />
                  <h2>Simple</h2>
                  <div className="price_main_card_content">
                    <ul>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="price_main_card">
                  <img src={priceMain1} alt="price" />
                  <h2>Simple</h2>
                  <div className="price_main_card_content">
                    <ul>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="price_main_card">
                  <img src={priceMain1} alt="price" />
                  <h2>Simple</h2>
                  <div className="price_main_card_content">
                    <ul>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                      <li>
                        <img src={tickImage} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="get_started">
            <button className="bg_lightgreen border_none text-white">
              Get Started!
            </button>
          </div>
        </div>
        <div className="op_box">
          <div>
            <span className="text_bluegreen">Overview</span>
            <span className="text_lightgray">Pricing</span>
          </div>
        </div>
        <div className="price_wms container">
          <div className="pbox_item_1eft">
            <img className="pbox" src={pBox} alt="pbox" />
            <img className="pbox1" src={pBox1} alt="pbox" />
          </div>

          <div className="pbox_item_right">
            <h2 className="text_darkblue fw-bold">
              Workforce
              <strong className="text_bluegreen">Management Solutions!</strong>
            </h2>
            <p className="text_lightgray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eveniet, consequatur quae fugit, vitae, deleniti amet ab
              consectetur obcaecati vel officiis beatae unde alias. Possimus
              pariatur iusto cumque sequi voluptatibus.
            </p>
            <div className="app_store_icons">
              <img src={appStoreIcon} alt="appstoreicon" />
            </div>
          </div>
        </div>
        <div className="mdm_section">
          <div className="mdm_container container">
            <div className="mdm_card">
              <img src={mdmBox} alt="" />
              <h2 className="text_darkblue fw-bold">MDM Feature</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
            <div className="mdm_card">
              <img src={mdmBox} alt="" />
              <h2 className="text_darkblue fw-bold">MDM Feature</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
            <div className="mdm_card">
              <img src={mdmBox} alt="" />
              <h2 className="text_darkblue fw-bold">MDM Feature</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
          </div>
        </div>
        <div className="encovision_section">
          <div className="en_container">
            <div className="en_left">
              <div>
                <h2 className="text_bluegreen fw-bold">Encovision</h2>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo d
                </p>
                <div className="en_button">
                  <button className="bg_lightgreen border_none text-white">
                    Button here
                  </button>
                  <button className="bg_white bluegreen_border text_bluegreen fw-bold">
                    Button here
                  </button>
                </div>
              </div>
            </div>
            <div className="en_right">
              <img className="enbox1" src={enBox2} alt="enbox1" />
              <img className="enbox2" src={enBox1} alt="enbox2" />
            </div>
          </div>
        </div>
        <div className="watch_demo">
          <div className="wd_text">
            <h2 className="text_darkblue fw-bold">Watch a DEMO</h2>
            <p className="text_lightgray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
          </div>
          <div className="wd_video">
            <img src={watchVideo} alt="" />
          </div>
        </div>
        <div className="pricing_section">
          <div className="price_container">
            <div className="price_text">
              <h2 className="text_darkblue fw-bold">PRICING</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos
              </p>
            </div>
            <div className="price_card_section">
              <div className="price_card">
                <h2 className="text_bluegreen fw-bold">Basic</h2>
                <img className="prbox" src={enBox1} alt="enbox2" />
                <span className="fw-bold text_darkblue">$1.50/Device</span>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
                <div className="prcard_content">
                  <ul className="text_lightgray">
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="pcard_btn">
                  <button type="button" className="bg_lightgreen">
                    Button here
                  </button>
                </div>
              </div>

              <div className="price_card">
                <h2 className="text_bluegreen fw-bold">Basic</h2>
                <img className="prbox" src={enBox1} alt="enbox2" />
                <span className="fw-bold text_darkblue">$1.50/Device</span>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
                <div className="prcard_content">
                  <ul className="text_lightgray">
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="pcard_btn">
                  <button type="button" className="bg_lightgreen">
                    Button here
                  </button>
                </div>
              </div>

              <div className="price_card">
                <h2 className="text_bluegreen fw-bold">Basic</h2>
                <img className="prbox" src={enBox1} alt="enbox2" />
                <span className="fw-bold text_darkblue">$1.50/Device</span>
                <p className="text_lightgray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
                <div className="prcard_content">
                  <ul className="text_lightgray">
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                    <li>
                      <img src={priceTick} alt="tick" />
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="pcard_btn">
                  <button type="button" className="bg_lightgreen">
                    Button here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_quote">
          <div>
            <h2>Request a custom quote!</h2>
            <p className="text_lightgray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>

            <form className="s_form_fields">
              <div className="inline_input">
                <input
                  className="half_input"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="half_input"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="full_input"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="c_textarea">
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                  className="bluegreen_border text_lightgray"
                ></textarea>
              </div>
              <div className="form_btn con_btn">
                <button type="button" className="bg_lightgreen">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
