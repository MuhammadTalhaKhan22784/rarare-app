// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Button from '../Btn/Btn'
import blogSliderImg from '../../Assets/tope-a-asokere-aWc0hP9OoVI-unsplash.png'

// Import Swiper styles
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css';

import next from '../../Assets/Group 3603.png'
import prev from '../../Assets/Group 3604.png'


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img src={next} onClick={onClick} className={`${className} custon_arr slider_arr`} />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img src={prev} onClick={onClick} className={`${className} custon_arr slider_arr`} />

    );
}

SwiperCore.use([Pagination])
export const BlogSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            }
        ]
    };

    return (
        // <Swiper
        //     pagination
        //     // navigation
        //     spaceBetween={50}
        //     slidesPerView={1}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        // >
        //     <SwiperSlide>
        //         <img className='slider_img' src={blogSliderImg} alt="" />
        //         <div className='upcomin_head_div slider_absolute'>
        //             <div>
        //                 <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
        //                 <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
        //                 <Button className='upcoming_btn' value='Learn more' />
        //             </div>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img className='slider_img' src={blogSliderImg} alt="" />
        //         <div className='upcomin_head_div slider_absolute'>
        //             <div>
        //                 <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
        //                 <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
        //                 <Button className='upcoming_btn' value='Learn more' />
        //             </div>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img className='slider_img' src={blogSliderImg} alt="" />
        //         <div className='upcomin_head_div slider_absolute'>
        //             <div>
        //                 <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
        //                 <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
        //                 <Button className='upcoming_btn' value='Learn more' />
        //             </div>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img className='slider_img' src={blogSliderImg} alt="" />
        //         <div className='upcomin_head_div slider_absolute'>
        //             <div>
        //                 <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
        //                 <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
        //                 <Button className='upcoming_btn' value='Learn more' />
        //             </div>
        //         </div>
        //     </SwiperSlide>
        // </Swiper>
        <Slider {...settings} className='blog_slick_slidr'>
            <div>
                <img className='slider_img' src={blogSliderImg} alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </div>
            <div>
                <img className='slider_img' src={blogSliderImg} alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </div>
        </Slider>
    );
};