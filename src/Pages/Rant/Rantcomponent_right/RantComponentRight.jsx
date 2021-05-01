import React from "react";
import "./RantComponentRight.css";
// assets
import image from "../../../Assets/Rectangle 108.png";
import image1 from "../../../Assets/Rectangle 111.png";
import image2 from "../../../Assets/Rectangle 110.png";
import image3 from "../../../Assets/Rectangle 109.png";
function ProposalComponentRight() {
  return (
    <>
      <div className="Rant_component_right">
        <div className="slider_div">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                className="active rounded-circle"
                style={{
                  borderRadius: "50px 50px 50px 50px ",
                  height: "10px",
                  width: "10px",
                }}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                className="rounded-circle"
                style={{
                  borderRadius: "50px 50px 50px 50px ",
                  height: "10px",
                  width: "10px",
                }}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                className="rounded-circle"
                style={{
                  borderRadius: "50px 50px 50px 50px ",
                  height: "10px",
                  width: "10px",
                }}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image} className="d-block img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
                <img
                  src={image}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="slider_down_images">
          <div className="slider_down_border" style={{ display: "flex" }}>
            <img className="slider_down_image1" src={image1} alt="..."></img>
            <img className="slider_down_image1" src={image2} alt="..."></img>
            <img className="slider_down_image1" src={image3} alt="..."></img>
            <img className="slider_down_image1" src={image1} alt="..."></img>
            <img className="slider_down_image1" src={image2} alt="..."></img>
            <img className="slider_down_image1" src={image2} alt="..."></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProposalComponentRight;
