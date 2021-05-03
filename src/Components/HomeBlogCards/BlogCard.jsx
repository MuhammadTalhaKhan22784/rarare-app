import React from 'react'
import { Link } from 'react-router-dom'
import { blog_card_data } from '../../Pages/Blogs/cardData'

const BlogCard = () => {
    return (
        <div className='blog_card_container'>
            <div className="blog_card_div">
                {blog_card_data.map((val) => (
                    <div className="card" style={{ width: '18.8rem',marginTop:'10px' }} key={val.id}>
                        <img src={val.img} className="card-img-top" alt="..." />
                        <div className='card_title_div'>
                            <h6><strong> {val.title} </strong></h6>
                        </div>
                        <div className="blog_data_div">
                            <p>{val.date}</p>
                        </div>
                        <div className='blog_user_card_detail_div'>
                            <img src={val.bloger_img} alt="img" />
                            <div>
                                <p className='bloger_name'>{val.name}</p>
                                <p className='bloger_email'>{val.email}</p>
                            </div>
                        </div>
                        <div className="card-body blog_card_body">
                            <p className="card-text">
                                {val.para}
                            </p>
                        </div>
                        <div className='read_more_div'>
                            <Link className='read_link' to={`/blog/${val.id}`} >Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCard
