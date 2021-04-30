import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Btn/Btn'
import dot from '../../Assets/dot.png'
import businesslogo from '../../Assets/businesslogo.png'

import './Bussines.css'


const Authority = () => {
    return (
        <div className='bussines_container'>
            <div className='bussines_main_div'>
                <div className="bussine_top_img_div">
                    <img src={businesslogo} alt="lgLogo" />
                </div>
                <h5 className='bussines_head'><strong>Authority/Business <strong style={{ color: '#19C2A0' }}> Registration!</strong></strong></h5>
                <div className="bussines_para">
                    <p>Please provide the following to complete registration!</p>
                </div>
                <div className="two_box_div">
                    <div className="_box_detail">
                        <div className="balnk_box">

                        </div>
                        <h6 style={{ color: '#1cc1a0' }}>I represent an authority</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores similique esse aut omnis,</p>
                    </div>
                    <div className="_box_detail">
                        <div className="blankBox_two">
                            <img src={dot} alt="" />
                        </div>
                        <h6 style={{ color: '#1cc1a0' }}>I represent a business</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores similique esse aut omnis,</p>
                    </div>

                </div>
                <div className="business_btn_div">
                    <Button className='bussines_white_btn' value='Back' />
                    <Link to='/business-info'>
                        <Button className='bussines_grn_btn' value='Continue' />
                    </Link>
                </div>
                <div className="busines_login_div">
                    <p className="busines_login_para">
                        Already a member ?
                    </p>
                    <Link className='busi_login_link'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Authority