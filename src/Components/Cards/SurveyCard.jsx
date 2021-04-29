import React from 'react'
import Slider from "react-slick";
// import Slider from "react-slick";
// import slider1 from '../../Assets/Rectangle 95@3x.png'
import user from '../../Assets/user.png'
import location from '../../Assets/location.png'
import timer from '../../Assets/Group 3624@2x.png'
import next from '../../Assets/Group 3603.png'
import prev from '../../Assets/Group 3604.png'


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img src={next} onClick={onClick} className={`${className} custon_arr`} />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img src={prev} onClick={onClick} className={`${className} custon_arr`} />

    );
}


const SurveyCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <React.Fragment>
            <Slider {...settings} className='slick_slider_survey'>

                {/* <div className='recent_issue_card_container'> */}
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
                {/* </div> */}
                {/* </div> */}
            </Slider>

        </React.Fragment>
    )
}

export default SurveyCard
