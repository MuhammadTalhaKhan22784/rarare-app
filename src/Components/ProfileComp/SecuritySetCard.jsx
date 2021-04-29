import React, { useState } from 'react'
import Button from '../Btn/Btn'
import { useHistory } from 'react-router-dom'
import Switch from '@material-ui/core/Switch'
import back from '../../Assets/Icon-arrow-right.png'


const SecuritySettingCard = () => {

    const history = useHistory()
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className='profile_setting_card_container'>
            <div className="profile_seting_card_div">
                <div className="proSetting_head_div security_seting_head_div">
                    <div onClick={() => history.push('/account-setting')}>
                        {/* <p>{'<-'}</p> */}
                        <img src={back} alt="" />
                        <h6 className='seting_head_desktop'>Security & Notification Settings</h6>
                        <h6 className='seting_head_mob_view'>Security Settings</h6>
                    </div>
                    <Button className='upcoming_btn' value='Save Changes' />
                </div>
                <div className='profile_setting_inps_div change_pas_inp_div'>
                    <div className='profile_setting_inps security_change_pass'>
                        <h6>Change Password</h6>
                        <input type='password' placeholder='Old Password' />
                        <input type='password' placeholder='New Password' />
                        <input type='password' placeholder='Confirm New Password' />
                        <Button className='upcoming_btn' value='Save Changes' />

                    </div>
                    <div className='profile_setting_inp_img notifications_main_div'>
                        <h6>Notification Settings</h6>
                        <ul className="notification_ul">
                            <li>
                                <div className="head_select_div">
                                    <h6>Rants</h6>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga </p>
                            </li>
                            <li>
                                <div className="head_select_div">
                                    <h6>Raves</h6>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga </p>
                            </li>
                            <li>
                                <div className="head_select_div">
                                    <h6>Surveys</h6>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SecuritySettingCard