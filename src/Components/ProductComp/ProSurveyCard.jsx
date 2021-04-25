import React, { useState } from "react";
import Button from "../Btn/Btn";
import dot from "../../Assets/dot.png";
import user from "../../Assets/user.png";
import location from "../../Assets/location.png";
import timer from "../../Assets/timer.png";
import users from "../../Assets/Group 3626.png";
import gift from "../../Assets/Icon awesome-gift.png";
import { Link } from "react-router-dom";
import toggle from "../../Assets/Group 3659.png";
import edit from "../../Assets/Group 3655.png";
import delt from "../../Assets/Group 3654.png";
import DeleteProbModal from "../Modal/DeleteProbModal";

const ProSurveyCard = ({ list, className, left, data, togleImg }) => {
  let [togle, setTogle] = useState("");
  let [bool, setBool] = useState(false);
  // let [list, Setlist] = useState(true)
  const hanldeTogle = (e) => {
    setTogle(e);
    setBool(!bool);
  };
  const closeTogle = (e) => {
    setTogle(e);
    console.log(e);
  };
  return (
    <div>
      {!list ? (
        <div className="pro_proposal_card_container">
          {data &&
            data.map((val, i) => (
              <Link className="card_link" to={`survey/${val.id}`}>
                <div className={`proposal_card_body ${className}`}>
                  <div className="card_title_div proposal_Card_title">
                    <h5>
                      <strong> {val.title} </strong>
                    </h5>
                  </div>
                  <p className="card-text">{val.body}</p>
                  <div className="location_div proposal_loc">
                    <div>
                      <img src={val.locImg} alt="" />
                      <span>{val.location}</span>
                    </div>
                  </div>
                  <div className="perticipant_div">
                    <div>
                      <img src={val.timer} alt="" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <img src={val.users} alt="" />
                      <span>{val.numUser}</span>
                    </div>
                    <div>
                      <img src={val.gift} alt="" />
                      <span>{val.numGift}</span>
                    </div>
                  </div>
                  <p className="survey_hr" />
                  <div className="user_card_detail_div proposal_card_user pro_survey_user">
                    <div>
                      <img src={val.proImg} alt="" />
                      <p>{val.name}</p>
                    </div>
                    <div>
                      <p>{val.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        // {/* survey list style  */}
        <>
          {data &&
            data.map((val, i) => (
              // <Link className='card_link' to={`/survey/${val.id}`} key={i}>
              <div className="proposal_list_body">
                <div className="card_title_div proposal_Card_title">
                  <h5>
                    <strong> {val.title} </strong>
                  </h5>
                  {togleImg ? (
                    <div className="toggle_div">
                      <img
                        onClick={() => hanldeTogle(val.id)}
                        src={toggle}
                        alt=""
                      />
                      {togle === val.id && bool ? (
                        <div className="edit_div">
                          <img className="edit_img" src={edit} alt="" />
                          <hr className="togle_hr" />
                          <DeleteProbModal
                            name="Delete Survey?"
                            para="Are you sure you want to delete this survey?"
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="user_card_detail_div proposal_card_user pro_survey_user list_user">
                      <div>
                        <img src={val.proImg} alt="" />
                        <p>{val.name}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <p className="card-text">{val.body} </p>
                </div>
                <div className="proposal_list">
                  <div>
                    <img src={val.locImg} alt="" />
                    <span>{val.location}</span>
                  </div>
                </div>
                <div className="pro_list_loc">
                  <div className="perticipant_div list_perticipant">
                    <div>
                      <img src={val.timer} alt="" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <img src={val.users} alt="" />
                      <span>{val.numUser}</span>
                    </div>
                    <div>
                      <img src={val.gift} alt="" />
                      <span>{val.numGift}</span>
                    </div>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
        </>
      )}
    </div>
  );
};

export default ProSurveyCard;
