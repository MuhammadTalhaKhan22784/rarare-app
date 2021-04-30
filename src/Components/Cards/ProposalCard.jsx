import React from "react";
import Slider from "react-slick";
import Button from "../Btn/Btn";
import dot from "../../Assets/dot.png";
import location from "../../Assets/location.png";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import next from "../../Assets/Group 3603.png";
import prev from "../../Assets/Group 3604.png";
import user from "../../Assets/user.png";
import path3 from "../../Assets/Rectangle 871.png";
import farming from "../../Assets/Icon awesome-hand-paper.png";
import { useHistory } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={next} onClick={onClick} className={`${className} custon_arr`} />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={prev} onClick={onClick} className={`${className} custon_arr`} />
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" className="main_line" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          className="progres_line"
          variant="determinate"
          {...props}
        />
      </Box>
      <Box minWidth={35}>
        <Typography
          className="back_clr"
          variant="body2"
          color="textSecondary"
        ></Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const ProposalCard = () => {
  const history = useHistory();

  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <Slider {...settings} className="slick_slider_proposal">
        <div
          onClick={() => history.push("/proposal")}
          className="card proposal_card"
          style={{ width: "18rem" }}
        >
          <div className="card_title_div proposal_Card_title">
            <h5>
              <strong> Title of issues </strong>
            </h5>
            <div className="ongoing_btn_div">
              <button className="voice_heard_btn_white ongoin">
                <img src={dot} alt="" /> Ongoing
              </button>
            </div>
          </div>
          <div className="user_card_detail_div proposal_card_user">
            <div>
              <div className="search_uimg_div">
                <img className="path2_img" src={path3} alt="" />
                <img className="search_ul_imgs" src={farming} alt="" />
              </div>
              <p className="farming_card_p">Consensus Farming</p>
            </div>
          </div>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
          <div className="home_proposal_card_loc">
            <div>
              <img src={location} alt="" />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div>
              <p>May, 1, 2021</p>
            </div>
          </div>
          <div className="home_prop_btn_div">
            <Button
              className="voice_heard_btn_grn proposal_btn"
              value="Lorem Ipsum"
            />
          </div>
        </div>
        <div
          className="card proposal_card"
          onClick={() => history.push("/proposal")}
          style={{ width: "18rem" }}
        >
          <div className="card_title_div proposal_Card_title">
            <h5>
              <strong> Title of issues </strong>
            </h5>
            <div className="ongoing_btn_div">
              <button className="voice_heard_btn_white ongoin">
                <img src={dot} alt="" /> Ongoing
              </button>
            </div>
          </div>
          <div className="user_card_detail_div proposal_card_user">
            <div>
              <div className="search_uimg_div">
                <img className="path2_img" src={path3} alt="" />
                <img className="search_ul_imgs" src={farming} alt="" />
              </div>
              <p className="farming_card_p">Consensus Farming</p>
            </div>
          </div>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
          <div className="home_proposal_card_loc">
            <div>
              <img src={location} alt="" />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div>
              <p>May, 1, 2021</p>
            </div>
          </div>
          <div className="home_prop_btn_div">
            <Button
              className="voice_heard_btn_grn proposal_btn"
              value="Lorem Ipsum"
            />
          </div>
        </div>
        <div
          className="card proposal_card"
          onClick={() => history.push("/proposal")}
          style={{ width: "18rem" }}
        >
          <div className="card_title_div proposal_Card_title">
            <h5>
              <strong> Title of issues </strong>
            </h5>
            <div className="ongoing_btn_div">
              <button className="voice_heard_btn_white ongoin">
                <img src={dot} alt="" /> Ongoing
              </button>
            </div>
          </div>
          <div className="user_card_detail_div proposal_card_user">
            <div>
              <div className="search_uimg_div">
                <img className="path2_img" src={path3} alt="" />
                <img className="search_ul_imgs" src={farming} alt="" />
              </div>
              <p className="farming_card_p">Consensus Farming</p>
            </div>
          </div>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
          <div className="home_proposal_card_loc">
            <div>
              <img src={location} alt="" />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div>
              <p>May, 1, 2021</p>
            </div>
          </div>
          <div className="home_prop_btn_div">
            <Button
              className="voice_heard_btn_grn proposal_btn"
              value="Lorem Ipsum"
            />
          </div>
        </div>
        <div
          className="card proposal_card"
          onClick={() => history.push("/proposal")}
          style={{ width: "18rem" }}
        >
          <div className="card_title_div proposal_Card_title">
            <h5>
              <strong> Title of issues </strong>
            </h5>
            <div className="ongoing_btn_div">
              <button className="voice_heard_btn_white ongoin">
                <img src={dot} alt="" /> Ongoing
              </button>
            </div>
          </div>
          <div className="user_card_detail_div proposal_card_user">
            <div>
              <div className="search_uimg_div">
                <img className="path2_img" src={path3} alt="" />
                <img className="search_ul_imgs" src={farming} alt="" />
              </div>
              <p className="farming_card_p">Consensus Farming</p>
            </div>
          </div>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
          <div className="home_proposal_card_loc">
            <div>
              <img src={location} alt="" />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div>
              <p>May, 1, 2021</p>
            </div>
          </div>
          <div className="home_prop_btn_div">
            <Button
              className="voice_heard_btn_grn proposal_btn"
              value="Lorem Ipsum"
            />
          </div>
        </div>
      </Slider>
    </React.Fragment>
  );
};

export default ProposalCard;
