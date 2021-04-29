import React from 'react'
import Button from '../Btn/Btn'
import event1 from '../../Assets/nnaemeka-ugochukwu-XHAC9622m5w-unsplash.png'
import event2 from '../../Assets/tope-a-asokere-jBpnifE9JUw-unsplash.png'

const UpcomingEvent = () => {
    return (
        <div className='upcomin_event_container'>
            <div className="upcoming_event_div">
                <img className='upcomint_img' src={event1} alt="" />
                <div className='upcomin_head_div'>
                    <div>
                        <h5 className='upcoming_head'> Upcoming Event</h5>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                    </div>
                    <Button className='upcoming_btn' value='Learn more' />
                </div>
            </div>
            <div className="upcoming_event_div second_event">
                <img className='upcomint_img' src={event2} alt="" />
                <div className='upcomin_head_div'>
                    <div>
                        <h5 className='upcoming_head'> Upcoming Event</h5>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                    </div>
                    <Button className='upcoming_btn' value='Learn more' />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent
