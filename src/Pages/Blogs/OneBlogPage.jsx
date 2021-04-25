import React from 'react'
import search from '../../Assets/Icon feather-search@2x.png'
import SocialFeed from '../../Components/BlogComp/SocialFeed'
import { useParams } from 'react-router-dom'
import { blog_card_data } from './cardData'


const SelectBlog = () => {

    const { id } = useParams()
    const filter = blog_card_data.filter((val) => id === val.id)

    return (
        <div>
            <div className='blog_container'>
                <div className="blog_main_div">
                    <div className="blog_head_search_div">
                        <h3><strong style={{ color: '#1cc1a0' }}> Rarare Blog!</strong></h3>
                        <div className="blog_search_inp_div">
                            <img src={search} alt="" />
                            <input type="text" placeholder='Search Blog' />
                        </div>
                    </div>
                    <div className='get_blog_one_link'>
                        Blogs {' > '} <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
                    </div>
                    <img className='id_blog_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                    <div className="select_blog_para_data">
                        <h5><strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</strong></h5>
                        <div className="blog_data_div">
                            <p>june 20-3-2020 | 3:00 Pm</p>
                        </div>
                    </div>
                    <div className='blog_card_socail_feed_div'>
                        {filter.map((val, i) => (
                            <div className='select_blog_more_main_div' key={i}>

                                <div className="select_blog_user_info" >
                                    <img src={val.bloger_img} alt="" />
                                    <ul className='blog_social_icons_ul'>
                                        <li>
                                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="https://raw.githubusercontent.com/MuhammadTalhaKhan22784/rarare-master/main/src/Assets/fb_icon.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="select_blog_more_para">
                                    <p >
                                        {val.para1 ? val.para1 : null}
                                    </p>
                                    <p >
                                        {val.para2 ? val.para2 : null}
                                    </p>
                                    <p >
                                        {val.para3 ? val.para3 : null}
                                    </p>
                                </div>
                            </div>
                        ))}
                        < SocialFeed />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SelectBlog
