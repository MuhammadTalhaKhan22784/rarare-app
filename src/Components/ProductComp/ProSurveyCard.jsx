import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteProbModal from "../Modal/DeleteProbModal";
// assstes 
import toggle from "../../Assets/Group 3659.png";
import edit from "../../Assets/Group 3655.png";

const ProSurveyCard = ({ list, className, data, togleImg }) => {
  // edit delete toggle state and function 

  let [togle, setTogle] = useState("");
  let [bool, setBool] = useState(false);
  const hanldeTogle = (e) => {
    setTogle(e);
    setBool(!bool);
  };
  

  return (
    <div>
      {/* list props pass if card use in any component  */}
      {!list ? (
        <div className="pro_proposal_card_container">
          {data &&
            data.map((val, i) => (
              <Link key={i} className="card_link" to={`survey/${val.id}`}>
                <div className={`proposal_card_body ${className}`}>
                  <div className="card_title_div proposal_Card_title">
                    <h5>
                      <strong> {val.title} </strong>
                    </h5>
                  </div>
                  <p className="card-text">{val.body}</p>
                  <div className="location_div proposal_loc">
                    <div>
                      <img src={val.locImg} alt="img" />
                      <span>{val.location}</span>
                    </div>
                  </div>
                  <div className="perticipant_div">
                    <div>
                      <img src={val.timer} alt="img" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <img src={val.users} alt="img" />
                      <span>{val.numUser}</span>
                    </div>
                    <div>
                      <img src={val.gift} alt="img" />
                      <span>{val.numGift}</span>
                    </div>
                  </div>
                  <p className="survey_hr" />
                  <div className="user_card_detail_div proposal_card_user pro_survey_user">
                    {val.proImg ?
                      <div>
                        <>
                          <img src={val.proImg ? val.img : null} alt="img" />
                          <p>{val.name}</p>
                        </>
                      </div>
                      : null
                    }
                    <div>
                      <p className='issue_dat_p'>{val.date}</p>
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
              <div key={i} className="proposal_list_body survey_list_style">
                <div className="card_title_div proposal_Card_title">
                  <h5>
                    <strong> {val.title} </strong>
                  </h5>
                  {togleImg ? (
                    <div className="toggle_div">
                      <img
                        onClick={() => hanldeTogle(val.id)}
                        src={toggle}
                        alt="img"
                      />
                      {togle === val.id && bool ? (
                        <div className="edit_div">
                          <img className="edit_img" src={edit} alt="img" />
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
                        <img src={val.proImg} alt="img" />
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
                    <img src={val.locImg} alt="img" />
                    <span>{val.location}</span>
                  </div>
                </div>
                <div className="pro_list_loc">
                  <div className="perticipant_div list_perticipant">
                    <div>
                      <img src={val.timer} alt="img" />
                      <span>{val.time}</span>
                    </div>
                    <div>
                      <img src={val.users} alt="img" />
                      <span>{val.numUser}</span>
                    </div>
                    <div>
                      <img src={val.gift} alt="img" />
                      <span>{val.numGift}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ProSurveyCard;
