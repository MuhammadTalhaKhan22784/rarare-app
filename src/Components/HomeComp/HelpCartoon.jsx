import React from 'react'
import cartoon from '../../Assets/cartoon.png'
import smCarton from '../../Assets/Group 4694@2x.png'
import mic from '../../Assets/Icon awesome-microphone@2x.png'
import Button from '../Btn/Btn'


const HelpCartoon = () => {
    return (
        <div className='carton_container'>
            <div className='carton_div'>
                <img className='cartoonImg' src={cartoon} alt="" />
                <div className='helpChat_div'>
                    <div className='help_chat_head_div'>
                        <ul className='webName_ul'>
                            <li>
                                <img className='smCartoonImg' src={smCarton} alt="" />
                            </li>
                            <li>
                                <p className='webName'>RaRaRe</p>
                            </li>
                        </ul>
                        <ul className='mute_ul'>
                            <li>
                                <img className='smCartoonImg' src={smCarton} alt="" />
                            </li>
                            <li>
                                <img className='smCartoonImg' src={smCarton} alt="" />
                            </li>
                            <li>
                                <img className='smCartoonImg' src={smCarton} alt="" />
                            </li>

                        </ul>
                    </div>
                    <div className='help_msgs_div'>
                        <ul className='help_msg_ul'>
                            <li>
                                <img className='msg_smCartoonImg' src={smCarton} alt="" />
                                <p className='help_msg_para'>Hello there! Good morning!
                                <br/> It`s now 05:00 PM in Islamabad, Pakistan!</p>
                            </li>
                            <li>
                                <img className='msg_smCartoonImg' src={smCarton} alt="" />
                                <p className='help_msg_para'>Hello there! Good morning! it`s now 05:00 PM in Islamabad, Pakistan!</p>
                            </li>
                            <li>
                                <img className='msg_smCartoonImg' src={smCarton} alt="" />
                                <p className='help_msg_para'>Hello there! Good morning! it`s now 05:00 PM in Islamabad, Pakistan!</p>
                            </li>
                        </ul>
                        <p className='date'>12:45 PM</p>
                        <div className='buttonDiv'>
                            <Button className='chat_btn' value='Login' />
                            <Button className='chat_btn m_left'  value='Sign up' />
                        </div>
                    </div>
                        <div className='help_input_div'>
                            <img className='mic_img' src={mic} alt=""/>
                            <input className='help_input' type="text" placeholder='How can I help you?'/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCartoon
