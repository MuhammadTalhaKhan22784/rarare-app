import React from 'react'
import slider1 from '../../Assets/Rectangle 95@3x.png'
import user from '../../Assets/user.png'


const RecentIssueCard = () => {

    return (
        <React.Fragment>
            <div className='recent_issue_card_container'>
                <div class="card" style={{ width: '18rem' }}>
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
            </div>
            <div className='recent_issue_card_container'>
                <div class="card" style={{ width: '18rem' }}>
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
            </div>
            <div className='recent_issue_card_container'>
                <div class="card" style={{ width: '18rem' }}>
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
            </div>
            {/* </div> */}
        </React.Fragment>
    )
}

export default RecentIssueCard
