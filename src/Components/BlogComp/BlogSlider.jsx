import Slider from "react-slick";
import Button from "../Btn/Btn";

// assets 

import blogSliderImg from "../../Assets/tope-a-asokere-aWc0hP9OoVI-unsplash.png";
import blogSliderImg2 from '../../Assets/Group 3711.png'

import next from "../../Assets/Group 3603.png";
import prev from "../../Assets/Group 3604.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={next}
      onClick={onClick}
      className={`${className} custon_arr slider_arr`}
      alt="img"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={prev}
      onClick={onClick}
      className={`${className} custon_arr slider_arr`}
      alt="img"
    />
  );
}

export const BlogSlider = () => {
  const settings = {
    dots: true,
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
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="blog_slick_slidr">
      <div>
        <img className="slider_img" src={blogSliderImg} alt="img" />
        <div className="upcomin_head_div slider_absolute">
          <div>
            <h6 className="upcoming_head">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </strong>
            </h6>
            <p className="upcoming_data">june 30 2020 {" | "} 3:00 PM</p>
            <Button className="upcoming_btn" value="Learn more" />
          </div>
        </div>
      </div>
      <div>
        <img className="slider_img" src={blogSliderImg} alt="img" />
        <div className="upcomin_head_div slider_absolute">
          <div>
            <h6 className="upcoming_head">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </strong>
            </h6>
            <p className="upcoming_data">june 30 2020 {" | "} 3:00 PM</p>
            <Button className="upcoming_btn" value="Learn more" />
          </div>
        </div>
      </div>
    </Slider>
  );
};
