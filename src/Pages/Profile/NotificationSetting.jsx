import React,{useLayoutEffect} from 'react'
import ProfileCard from '../../Components/ProfileComp/ProfileCard'
import NotificationSettingCard from '../../Components/ProfileComp/NotificationnCard'

const NotificationSetting = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);
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
