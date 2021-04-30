import React from 'react'
import girl from '../../Assets/girl.png'
import polygon1 from '../../Assets/Polygon 3@2x.png'
import polygon2 from '../../Assets/Polygon 2@2x.png'
import cros1 from '../../Assets/Group 26@2x.png'
import cros2 from '../../Assets/Group 25@3x.png'
import Button from '../Btn/Btn'
import {useHistory} from 'react-router-dom'


const Reinvite = () => {
    const history = useHistory()

    return (
        <div className='reinvite_container'>
            <div className="reinvite_main_div">
                <div className='reinvite_head_div'>
                    <div className='img_detail_div'>
                        <img className='polygon1_img' src={polygon1} alt="" />
                        <div className='reinvite_detail_div'>
                            <h2 className='reinventing_head'>Reinventing
                             <strong style={{ color: "#19c2a0", marginLeft: '5px' }}>
                                    Citizen
                            </strong> Engagement
                        </h2>
                            <p className='reinventing_para'>
                                We are delivering citizen benefits remotely and at scale to
                                improve quality of life for people in cities and rural areas
                                across Sub-Sahara Africa

                        </p>
                            <Button value='Sign Up today' onClick={()=>history.push('/signup')} className='Sign_up_today_btn' />
                            <img className='polygon2_img' src={polygon2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='reinvite_img_div'>
                    <div className='cros_img_div'>
                        <img className='cros1_home' src={cros1} alt="" />
                        <img className='cros2_home' src={cros2} alt="" />
                    </div>
                    <img className='girl_img' src={girl} alt="" />
                    <img className='polygon2_img2' src={polygon2} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Reinvite
