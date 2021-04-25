import React from 'react'
// import slider1 from '../../Assets/Rectangle 95@3x.png'
import user from '../../Assets/user.png'
import location from '../../Assets/location.png'
import timer from '../../Assets/Group 3624@2x.png'



const SurveyCard = () => {

    return (
        <React.Fragment>
            <div className='recent_issue_card_container'>
                <div class="card survey_card" style={{ width: '18rem' }}>
                    <div className='card_title_div'>
                        <h6><strong> Rising cataract issues in Nigeria! </strong></h6>
                    </div>
                    <div className="card-body issue_card_body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et
                                </p>
                    </div>
                    <div className='location_div survey_llocation'>
                        <img src={location} alt="" />
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <hr />
                    <div className='survey_main_time_div'>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>SURVEY TIME</p>
                            <p className='survey_grn'>2 Minutes</p>
                        </div>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>PARTICIPANTS</p>
                            <p className='survey_grn'>1,500+</p>
                        </div>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>REWARD</p>
                            <p className='survey_grn'>50</p>
                        </div>
                    </div>
                    <hr />
                    <div className='user_card_detail_div'>
                        <div>
                            <img src={user} alt="" />
                            <p>username</p>
                        </div>
                        <div>
                            <p>May, 1, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recent_issue_card_container'>
                <div class="card survey_card" style={{ width: '18rem' }}>
                    <div className='card_title_div'>
                        <h6><strong> Rising cataract issues in Nigeria! </strong></h6>
                    </div>
                    <div className="card-body issue_card_body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed
                            diam voluptua. At vero eos et
                                </p>
                    </div>
                    <div className='location_div survey_llocation'>
                        <img src={location} alt="" />
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <hr />
                    <div className='survey_main_time_div'>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>SURVEY TIME</p>
                            <p className='survey_grn'>2 Minutes</p>
                        </div>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>PARTICIPANTS</p>
                            <p className='survey_grn'>1,500+</p>
                        </div>
                        <div>
                            <img src={timer} alt="" />
                            <p className='survey_time'>REWARD</p>
                            <p className='survey_grn'>50</p>
                        </div>
                    </div>
                    <hr />
                    <div className='user_card_detail_div'>
                        <div>
                            <img src={user} alt="" />
                            <p>username</p>
                        </div>
                        <div>
                            <p>May, 1, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </React.Fragment>
    )
}

export default SurveyCard
