import React from 'react'
import ProfileCard from '../../Components/ProfileComp/ProfileCard'
import NotificationSettingCard from '../../Components/ProfileComp/NotificationnCard'


const NotificationSetting = () => {
    return (
        <div>
            <div className='acount_container'>
                <div className="acount_main_div">
                    <ProfileCard />
                    <NotificationSettingCard />
                </div>
            </div>
        </div>
    )
}

export default NotificationSetting
