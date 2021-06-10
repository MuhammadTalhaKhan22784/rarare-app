import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Btn/Btn'
// assets 
import businesslogo from '../../Assets/businesslogo.png'
import './Bussines.css'

const AuthorityInfo = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bussines_container'>
            <div className='bussines_main_div'>
                <div className="bussine_top_img_div">
                    <img src={businesslogo} alt="lgLogo" />
                </div>
                <h5 className='bussines_head'><strong>Authority <strong style={{ color: '#19C2A0' }}> Registration!</strong></strong></h5>
                <div className="bussines_para">
                    <p>Please provide the following to complete registration!</p>
                </div>
                <div>
                    <h6><strong>Authority Details</strong></h6>
                </div>
                <div className="two_box_div ">
                    <div className='bussiness_info_div_inp authority_info_div'>
                        <input type="text" placeholder='Authority Name' />
                        <input type="text" placeholder='Authority Address' />
                        <div className="business_select_div">
                            <select className='region_slct' name="" id="">
                                <option value="Country">Region</option>
                            </select>
                            <select name="" id="">
                                <option value="Country">Country</option>
                            </select>
                        </div>
                        <input type="text" placeholder='Company registration number' />
                    </div>
                </div>
                <div className="two_box_div">
                    <div className='bussiness_info_div_inp'>
                        <h6><strong>Key Contact Information</strong></h6>
                        <input type="text" placeholder='Contact Name & Sur name' />
                        <input type="text" placeholder='Contact Email Address' />
                    </div>
                </div>
                <div className="business_btn_div authoryInfoBtn">
                    <Link to='/business-authority'>
                        <Button className='bussines_white_btn upload_back' value='Back' />
                    </Link>
                    <Link to='/business-confirm'>
                        <Button className='bussines_grn_btn' value='Submit' />
                    </Link>
                </div>
                <div className="busines_login_div">
                    <p className="busines_login_para">
                        Already a member ?
                    </p>
                    <Link className='busi_login_link text_bluegreen' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default AuthorityInfo