import React from 'react'
import Button from '../Btn/Btn'
// assets 
import social1 from '../../Assets/Rarare Social-06.png'
import social2 from '../../Assets/social2.png'
import social3 from '../../Assets/social3.png'
import social4 from '../../Assets/social4.png'
import social5 from '../../Assets/social5.png'
import social6 from '../../Assets/social6.png'
import fb from '../../Assets/Icon awesome-facebook-f.png'
import insta from '../../Assets/Icon awesome-instagram.png'

const SocialFeed = () => {
    return (
        <div className='socail_feed_conatiner'>
            <div className="social_feed_div">
                <div className="feed_div">
                    <h4><strong>Facebook Feed</strong></h4>
                    <img className='socail_feed_img' src={social1} alt="img" />
                    <img className='socail_feed_img' src={social2} alt="img" />
                    <img className='socail_feed_img' src={social3} alt="img" />
                    <img className='socail_feed_img' src={social4} alt="img" />
                    <img className='socail_feed_img' src={social5} alt="img" />
                    <img className='socail_feed_img' src={social6} alt="img" />
                    <button className='socail_button'>
                        <img src={fb} alt="img" />
                        <p>Follow on Facebook</p>
                    </button>
                </div>
                <div className="instagram_div">
                    <div className="feed_div">
                        <h4><strong>Instagram Feed</strong></h4>
                        <img className='socail_feed_img' src={social1} alt="img" />
                        <img className='socail_feed_img' src={social2} alt="img" />
                        <img className='socail_feed_img' src={social3} alt="img" />
                        <img className='socail_feed_img' src={social4} alt="img" />
                        <img className='socail_feed_img' src={social5} alt="img" />
                        <img className='socail_feed_img' src={social6} alt="img" />
                        <button className='socail_button insta'>
                            <img src={insta} alt="img" />
                            <p>Follow on Instagram</p>
                        </button>
                    </div>
                </div>
                <div className="subscribe_news_div">
                    <h6><strong>Subscribe to our news letter!</strong></h6>
                    <div className="subscribe_para">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio numquam similique cumque, 
                            sequi fuga porro, 
                        </p>
                    </div>
                    <div className="subscribe_inp">
                        <input type="text" placeholder='Enter emial address'/>
                    </div>
                    <Button className='voice_heard_btn_grn' value='Subscribe' />
                </div>
            </div>

        </div>
    )
}

export default SocialFeed
