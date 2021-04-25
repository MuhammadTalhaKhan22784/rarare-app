import React from 'react'
import Button from '../Btn/Btn'

const SocialFeed = () => {
    return (
        <div className='socail_feed_conatiner'>
            <div className="social_feed_div">
                <div className="feed_div">
                    <h4><strong>Facebook Feed</strong></h4>
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <button className='socail_button'>
                        <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                        <p>Follow on Facebook</p>
                    </button>
                </div>
                <div className="instagram_div">
                    <div className="feed_div">
                        <h4><strong>Instagram Feed</strong></h4>
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <img className='socail_feed_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                        <button className='socail_button insta'>
                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
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
