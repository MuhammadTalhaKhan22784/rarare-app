import React,{useState} from 'react'
import Button from '../Btn/Btn'
import upload from '../../Assets/Group 3675.png'
import { useHistory } from 'react-router-dom'
import back from '../../Assets/Icon-arrow-right.png'



const ProfileSettingCard = () => {

    const history = useHistory()
    let [img,setImg] = useState('')

    const handelUlr = (e)=>{
      let url = URL.createObjectURL(e.target.files[0])
      setImg(url)
    }

    return (
        <div className='profile_setting_card_container'>
            <div className="profile_seting_card_div">
                <div className="proSetting_head_div">
                    <div onClick={() => history.push('/account-setting')}>
                        {/* <Link to='/account-setting'> */}
                        {/* <p>{'<-'}</p> */}
                        <img src={back} alt=""/>
                        <h6>Profile Settings</h6>
                        {/* </Link> */}
                    </div>
                    <Button className='upcoming_btn' value='Save Changes' />
                </div>
                <div className='profile_setting_inps_div'>
                    <div className='profile_setting_inps'>
                        <h6>User Details</h6>
                        <div className='name_inps'>
                            <input type='text' placeholder='First Name' />
                            <input type='text' placeholder='last Name' />
                        </div>
                        <input type='email' placeholder='email' />
                        <select name="gender" id="gender">
                            <option value="male">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <textarea name="address" id="" rows='5' placeholder='Address'></textarea>
                        <select name="Municipality" id="Municipality">
                            <option value="Municipality">Municipality</option>
                        </select>
                        <select name="Region" id="Region">
                            <option value="Region">Region</option>
                        </select>
                        <select name="Country" id="Country">
                            <option value="Country">Country</option>
                        </select>
                    </div>
                    <div className='profile_setting_inp_img'>
                        <h6>Profile Image</h6>
                        <label htmlFor="profile">
                            <img src={!img? upload : img} alt="" />
                        </label>
                        <input type="file" name="profile" onChange={(e)=>handelUlr(e)} id="profile" />
                        <Button className='upcoming_btn upload_profile' value='Upload Image' />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default ProfileSettingCard