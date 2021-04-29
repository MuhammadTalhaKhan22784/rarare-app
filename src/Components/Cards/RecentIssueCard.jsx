import React from 'react'
import Slider from 'react-slick'
import slider1 from '../../Assets/Rectangle 95@3x.png'
import user from '../../Assets/user.png'
import next from '../../Assets/Group 3603.png'
import prev from '../../Assets/Group 3604.png'
import '../../Pages/Home/Home.css'


function SampleNextArrow(props) {
    const { className,  onClick } = props;
    return (
        <img src={next} onClick={onClick} className={`${className} custon_arr`} />
    );
}

function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
        <img src={prev} onClick={onClick} className={`${className} custon_arr`} />

    );
}

const RecentIssueCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
            {/* <div className='recent_issue_card_container'> */}
            <Slider {...settings} className='slick_slider' >
                <div class="card home_issue" style={{ width: '18rem' }}>
                    <img src={slider1} class="card-img-top" alt="..." />
                    <div className='card_title_div'>
                        <h5><strong> Title of issues </strong></h5>
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
                <div class="card home_issue" style={{ width: '18rem' }}>
                    <img src={slider1} class="card-img-top" alt="..." />
                    <div className='card_title_div'>
                        <h5><strong> Title of issues </strong></h5>
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
                <div class="card home_issue" style={{ width: '18rem' }}>
                    <img src={slider1} class="card-img-top" alt="..." />
                    <div className='card_title_div'>
                        <h5><strong> Title of issues </strong></h5>
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
                <div class="card home_issue" style={{ width: '18rem' }}>
                    <img src={slider1} class="card-img-top" alt="..." />
                    <div className='card_title_div'>
                        <h5><strong> Title of issues </strong></h5>
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

            </Slider>
            {/* </div> */}
        </React.Fragment>
    )
}

export default RecentIssueCard
