import React,{useLayoutEffect} from 'react'
import ProfileCard from '../../Components/ProfileComp/ProfileCard'
import ProfileSettingCard from '../../Components/ProfileComp/ProfileSettingCard'

const ProfileSetting = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    return (
        <div>
            <div className='acount_container'>
                <div className="acount_main_div">
                    <ProfileCard />
                    <ProfileSettingCard />
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
