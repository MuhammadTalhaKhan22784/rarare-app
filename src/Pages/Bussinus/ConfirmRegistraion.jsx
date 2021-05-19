import React,{useLayoutEffect} from 'react'
import './Bussines.css'
// assets 
import businesslogo from '../../Assets/businesslogo.png'
import edit from '../../Assets/Icon awesome-edit.png'


const ConfirmRegistration = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);

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
                    <p className="text_darkblue">salman.altaf@gamil.com</p>
                    <img src={edit} alt="edit"/>
                    {/* <p className='edit_icon'>edit</p> */}
                </div>
            </div>
        </div>
    )
}

export default ConfirmRegistration