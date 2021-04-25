// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Button from '../Btn/Btn'

// Import Swiper styles
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination])
export const BlogSlider = () => {
    return (
        <Swiper
            pagination
            // navigation
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img className='slider_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src="https://images.cloudflareapps.com/uNHha5iLSg28858aqQTL_social%20feed%201%20(1)%20(3).png" alt="" />
                <div className='upcomin_head_div slider_absolute'>
                    <div>
                        <h6 className='upcoming_head'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></h6>
                        <p className='upcoming_data'>june 30 2020 {' | '} 3:00 PM</p>
                        <Button className='upcoming_btn' value='Learn more' />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};