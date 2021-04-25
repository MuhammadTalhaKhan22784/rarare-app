import React from 'react'
import edit from '../../Assets/Component 29 – 1.png'
import user from '../../Assets/Repeat Grid 11.png'
import BalanceCard from './BalanceCard'
import RedeemCard from './RedeemCard'
import {useHistory} from 'react-router-dom'

const ProfileCard = () => {
    const history = useHistory()
    return (
        <div className='profile_card_container'>
            <div className="profile_card_main_div">
                <div className="user_name_div">
                    <div className="userInfo">
                        <img src={user} alt="" />
                        <h5><strong>Salman Altaf</strong></h5>
                        <p>salmanaltaf@gamil.com</p>
                    </div>
                    <img className='edit_img' onClick={()=>history.push('/account-setting')} src={edit} alt="" />
                </div>
                <hr className='profile_hr' />
                <BalanceCard />
                <div className="redeem_head">
                    <h5><strong>Redeem Points</strong></h5>
                </div>
                <div className="redem_cards_scroll">
                    <RedeemCard />
                    <RedeemCard />
                    <RedeemCard />
                    <RedeemCard />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
