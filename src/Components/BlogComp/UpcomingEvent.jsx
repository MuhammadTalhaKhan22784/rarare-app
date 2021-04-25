import React from 'react'
import Button from '../Btn/Btn'

const UpcomingEvent = () => {
    return (
        <div className='upcomin_event_container'>
            <div className="upcoming_event_div">
                <img className='upcomint_img' src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt="" />
                <div className='upcomin_head_div'>
                    <div>
                        <h5 className='upcoming_head'> Upcoming Event</h5>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                    </div>
                    <Button className='upcoming_btn' value='Learn more' />
                </div>
            </div>
            <div className="upcoming_event_div second_event">
                <img className='upcomint_img' src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt="" />
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
