import React from 'react'
import ProfileCard from '../../Components/ProfileComp/ProfileCard'
import SecuritySettingCard from '../../Components/ProfileComp/SecuritySetCard'


const SecuritySetting = () => {
    return (
        <div>
            <div className='acount_container'>
                <div className="acount_main_div">
                    <ProfileCard />
                    <SecuritySettingCard />
                </div>
            </div>
        </div>
    )
}

export default SecuritySetting
