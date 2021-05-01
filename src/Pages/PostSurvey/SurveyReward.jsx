import React from 'react'
import { useHistory } from 'react-router';
import "./PostSurvey.css";
// import "./Post.css"

// assets
import postIcon from "../../Assets/cn_logo.png";
import hoverImg from '../../Assets/Group 3531.png'
import i from '../../Assets/Icon awesome-info-circle.png'
import mobHover from '../../Assets/Group 5381.png'



const PostSurveyReward = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>

            <div className="post_home post_report post_survey_health">
                <div>
                    <div className="post_header">
                        <img src={postIcon} alt="posticon" />
                        <h2 className="text_darkblue">Post a <strong className="text_lightpurple">Survey!</strong> </h2>
                        <p className="text_lightgray">Get your ideas to other people. Post something that matters!</p>
                    </div>
                </div>
                <div className="pr_frorm">
                    <div className="head_reward">
                        <h6><strong>Participants & Reward!</strong></h6>
                        <p>Define the number o participants and reward points allocated per participant.</p>
                    </div>
                    <div className="input_div_reward">
                        <input type="text" placeholder='Total Participants' />
                        <span>
                            <img src={i} alt="img" />
                            <img src={hoverImg} className='hover_img' alt="img"/>
                            <img src={mobHover} className='mob_hover' alt="img"/>
                        </span>
                    </div>
                    <div className="input_div_reward">
                        <input type="text" placeholder='Reward Points per participants' />
                        <span>
                            <img src={i} alt="img" />
                            <img src={hoverImg} className='hover_img' alt="img"/>
                            <img src={mobHover} className='mob_hover' alt="img"/>

                        </span>
                    </div>
                    <div className="pcontinue_btn survey_submit">
                        <button className="voice_heard_btn_white rewrd_back"
                            onClick={() => { history.push("/survey-location") }}
                        >Back</button>
                         <button style={{marginLeft:'15px'}} className="text-white bg_lightgreen border_none"
                            onClick={() => { history.push("/survey-submit") }}
                        >Submit Survey</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PostSurveyReward
