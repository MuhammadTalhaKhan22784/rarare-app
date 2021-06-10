import React, { useLayoutEffect } from "react";
import "./Pricing.css";

// Import Swiper React components
import SwiperCore, { Pagination } from "swiper";

// import 'swiper/swiper.scss';
import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";

// react slider
import Slider from "react-slick";

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
import price_2 from "../../Assets/price_2.png";
import price_3 from "../../Assets/price_3.png";
import price_4 from "../../Assets/price_4.png";
import pback0 from "../../Assets/pback0.png";
SwiperCore.use([Pagination]);

const Pricing = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="pricing_page">
      <div className="op_box">
          <div>
            <span className="text_bluegreen">Overview</span>
            <a href="#price">
              <span className="text_lightgray">Pricing</span>
            </a>
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
              <strong className="text_bluegreen"> Management Solutions!</strong>
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
          <div className="mdm_container">
            <div className="mdm_card">
              <img src={mdmBox} alt="img" />
              <h2 className="text_darkblue fw-bold">MDM Feature</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
            <div className="mdm_card">
              <img src={mdmBox} alt="img" />
              <h2 className="text_darkblue fw-bold">MDM Feature</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo d
              </p>
            </div>
            <div className="mdm_card">
              <img src={mdmBox} alt="img" />
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
        
        <div className="price_main_1">
          <div className="price_main_1_content container">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-4">
                <div className="price_main_card">
                  <div className="pback_img pback_img_1">
                    <img className="pfront_img" src={priceMain1} alt="price" />
                  </div>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-4">
                <div className="price_main_card">
                  <div className="pback_img pback_img_2">
                    <img className="pfront_img" src={price_2} alt="price" />
                  </div>
                  <h2>Secure</h2>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-4">
                <div className="price_main_card">
                  <div className="pback_img pback_img_3">
                    <img className="pfront_img" src={price_3} alt="price" />
                  </div>{" "}
                  <h2>Auditable</h2>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 gy-4">
                <div className="price_main_card">
                  <div className="pback_img pback_img_4">
                    <img
                      className="pfront_img position-relative"
                      style={{ marginLeft: "-10px" }}
                      src={pback0}
                      alt="price"
                    />
                    <img
                      className="pfront_img1 position-absolute"
                      style={{ marginLeft: "-5px", width: "60px" }}
                      src={price_4}
                      alt="price"
                    />
                  </div>{" "}
                  <h2>Governance</h2>
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
            <img src={watchVideo} alt="img" />
          </div>
        </div>
     
     
        <div className="pricing_section" id="price">
          <div className="price_container">
            <div className="price_text">
              <h2 className="text_darkblue fw-bold">PRICING</h2>
              <p className="text_lightgray">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos
              </p>
            </div>

            <div className="mobprice_view price_card_section">
              <Slider {...settings} className="pricing_slick">
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
                        </p>
                      </li>
                      <li>
                        <img src={priceTick} alt="tick" />
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonum
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
              </Slider>
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
