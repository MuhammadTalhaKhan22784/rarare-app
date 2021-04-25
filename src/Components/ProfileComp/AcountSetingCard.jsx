import React from 'react'
import userSet from '../../Assets/undraw_profile_pic_ic5t.png'
import security from '../../Assets/Group 4911.png'
import notification from '../../Assets/Group 4941.png'
import {useHistory} from 'react-router-dom'
import more from '../../Assets/Icon feather-arrow-right.png'

const AcountSetingCard = () => {
    const history = useHistory()
    return (
        <div className='acount_seting_card_container'>
            <div className="account_seting_card_div">
                <h5><strong>Account Setting</strong></h5>
                <div className="seting_cards_div">
                   <div className="acount_seting_card" onClick={()=>history.push('/profile-setting')}>
                       <img src={userSet} alt=""/>
                       <div className="seting_para">
                           <h6><strong>Account Setting</strong></h6>
                           <p>Manage Profile Settings Such As Profile Image, Name, Email, Address Etrc</p>
                           <img className='arrow_icon_seting' src={more} alt=""/>
                           {/* <p className='arrow_icon_seting'>{'->'}</p> */}
                       </div>
                   </div>
                   <div className="acount_seting_card" onClick={()=>history.push('/security-setting')}>
                       <img src={security} alt=""/>
                       <div className="seting_para">
                           <h6><strong>Security Setting</strong></h6>
                           <p>Manage Settings Such As password email change and notification setting.</p>
                           <img className='arrow_icon_seting' src={more} alt=""/>
                           {/* <p className='arrow_icon_seting'>{'->'}</p> */}
                       </div>
                   </div>
                   <div className="acount_seting_card" onClick={()=>history.push('/notification-setting')}>
                       <img src={notification} alt=""/>
                       <div className="seting_para">
                           <h6><strong>Notification Setting</strong></h6>
                           <p>Manage Settings Such As password email change and notification setting.</p>
                           {/* <p className='arrow_icon_seting'>{'->'}</p> */}
                           <img className='arrow_icon_seting' src={more} alt=""/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AcountSetingCard
