import React,{useLayoutEffect} from 'react'
import ProfileCard from '../../Components/ProfileComp/ProfileCard'
import AcountSetingCard from '../../Components/ProfileComp/AcountSetingCard'

const AccountSetting = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    return (
        <div className='acount_container'>
            <div className="acount_main_div">
                <ProfileCard />
                <AcountSetingCard />
            </div>
        </div>
    )
}

export default AccountSetting
