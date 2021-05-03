import React,{useLayoutEffect} from "react";
import './Blog.css'
import BlogCard from '../../Components/HomeBlogCards/BlogCard'
import UpcomingEvent from '../../Components/BlogComp/UpcomingEvent'
import SocialFeed from '../../Components/BlogComp/SocialFeed'
import { BlogSlider } from '../../Components/BlogComp/BlogSlider'
// assets 
import search from '../../Assets/Icon feather-search@2x.png'

const Blog = () => {
    
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='blog_container'>
            <div className="blog_main_div">
                <div className="blog_head_search_div">
                    <h3><strong style={{ color: '#1cc1a0' }}> Rarare Blog!</strong></h3>
                    <div className="blog_search_inp_div">
                        <img src={search} alt="img" />
                        <input type="text" placeholder='Search Blog' />
                    </div>
                </div>
                <div className='event_slider_div'>
                    <BlogSlider />
                    <UpcomingEvent />
                </div>
                <div className='blog_card_socail_feed_div margin_top'>
                    <BlogCard />
                    <SocialFeed />
                </div>
            </div>

        </div>
    )
}

export default Blog
