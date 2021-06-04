import React from "react";
// assets
import dot from "../../Assets/dot.png";
import location from "../../Assets/location.png";
import path3 from "../../Assets/Rectangle 871.png";
import farming from "../../Assets/Icon awesome-hand-paper.png";
import { useHistory } from "react-router";

const ProductProposalCard = ({ list, left, className }) => {
  const history = useHistory();

  return (
    <div>
      {/* list props pass if card use in any component  */}

      {!list ? (
        <div className="pro_proposal_card_container">
          <div
            className={`proposal_card_body ${className}`}
            onClick={() => {
              history.push("/proposal");
            }}
          >
            <div className="card_title_div proposal_Card_title">
              <h5>
                <strong> Title of issues </strong>
              </h5>
              <div className="ongoing_btn_div2">
                <button className="voice_heard_btn_white ongoin">
                  <img src={dot} alt="img" /> Ongoing
                </button>
              </div>
            </div>
            <div className="user_card_detail_div proposal_card_user">
              <div>
                <div className="search_uimg_div">
                  <img className="path2_img" src={path3} alt="img" />
                  <img className="search_ul_imgs" src={farming} alt="img" />
                </div>
                <p className="farming_card_p">Consensus Farming</p>
              </div>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
            <div className="location_div proposal_loc">
              <div>
                <img src={location} alt="img" />
                <span>Lorem ipsum dolor sit</span>
              </div>
              <div>
                <p>May, 1, 2021</p>
              </div>
            </div>
          </div>
          <div
            className={`proposal_card_body ${className} ${left}`}
            onClick={() => {
              history.push("/proposal");
            }}
          >
            <div className="card_title_div proposal_Card_title">
              <h5>
                <strong> Title of issues </strong>
              </h5>
              <div className="ongoing_btn_div2">
                <button className="voice_heard_btn_white ongoin">
                  <img src={dot} alt="img" /> Ongoing
                </button>
              </div>
            </div>
            <div className="user_card_detail_div proposal_card_user">
              <div>
                <div className="search_uimg_div">
                  <img className="path2_img" src={path3} alt="img" />
                  <img className="search_ul_imgs" src={farming} alt="img" />
                </div>
                <p className="farming_card_p">Consensus Farming</p>
              </div>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
            <div className="location_div proposal_loc">
              <div>
                <img src={location} alt="img" />
                <span>Lorem ipsum dolor sit</span>
              </div>
              <div>
                <p>May, 1, 2021</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // {/*proposal list style  */}
        <div className={`proposal_list_body`}>
          <div className="card_title_di proposal_Card_title_list">
            <h5>
              <strong> Title of issues </strong>
            </h5>
            <div className="ongoing_btn_div">
              <button className="voice_heard_btn_white2">
                <img src={dot} alt="img" /> Ongoing
              </button>
            </div>
          </div>
          <div className="proposal_list_farming">
            <div>
              <div className="search_uimg_div">
                <img className="path2_img" src={path3} alt="img" />
                <img className="search_ul_imgs" src={farming} alt="img" />
              </div>
              <p className="farming_card_p">Consensus Farming</p>
            </div>
          </div>
          <div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
          </div>
          <div className="pro_list_loc">
            <div className="proposal_list">
              <div>
                <img src={location} alt="img" />
                <span>Lorem ipsum dolor sit</span>
              </div>
            </div>
            <div className="list_date">
              <div>
                <p>May, 1, 2021</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductProposalCard;
