import React from 'react'
// import { Link } from 'react-router-dom'
import businesslogo from '../../Assets/businesslogo.png'

// import Button from '../../components/btn/btn'
// import dot from '../../Assets/dot.png'

import './Bussines.css'


const ConfirmRegistration = () => {
    return (
        <div className='bussines_container'>
            <div className='bussines_main_div confirm_registration_div'>
                <div className="bussine_top_img_div">
                    <img src={businesslogo} alt="lgLogo" />
                </div>
                <h5 className='bussines_head'><strong style={{ color: '#19C2A0' }}>Confirm Registration!</strong></h5>
                <div className="bussines_para">
                    <p>We sent a link to the following email address . Please click on the link to confirm your registration</p>
                </div>
                <div className="confrim_email_div">
                    <p>salman.altaf@gamil.com</p>
                    <p className='edit_icon'>edit</p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRegistration