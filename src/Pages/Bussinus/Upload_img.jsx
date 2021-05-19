import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Btn/Btn";
// assets
import businesslogo from "../../Assets/businesslogo.png";
import uploadImg from "../../Assets/upload-img.png";

import "./Bussines.css";

const BusinessUploadImg = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // upload img state and function

  let [img, setImg] = useState([]);

  const handleUrl = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setImg([url, ...img]);
  };

  const dltImg = (e) => {
    let filter = img.filter((val) => val !== e);
    setImg(filter);
  };

  return (
    <div className="bussines_container">
      <div className="bussines_main_div">
        <div className="bussine_top_img_div">
          <img src={businesslogo} alt="lgLogo" />
        </div>
        <h5 className="bussines_head">
          <strong>
            Business{" "}
            <strong style={{ color: "#19C2A0" }}> Registration!</strong>
          </strong>
        </h5>
        <div className="bussines_para mt-3">
          <p>Please provide the following to complete registration!</p>
        </div>
        <div>
          <h6 className="mb-3">
            <strong>Upload Incorporation Certificate</strong>
          </h6>
        </div>
        <div className="upload_div">
          <label htmlFor="upload_logo">
            <img className="upload_img" src={uploadImg} alt="img" />
          </label>
          <input
            type="file"
            onChange={(e) => handleUrl(e)}
            name="upload_logo"
            id="upload_logo"
          />
        </div>
        <div className="main_upload_img_div mb-5">
          {img &&
            img.map((val, i) => (
              <div className="upload_result" key={i}>
                <p className="upload_delete" onClick={() => dltImg(val)}>
                  &times;
                </p>
                <img className="upload_img_result" src={val} alt="img" />
              </div>
            ))}
        </div>
        <div className="business_btn_div">
          <Link to="/business-info">
            <Button className="bussines_white_btn upload_back" value="Back" />
          </Link>
          <Link to="/authority-info">
            <Button
              className="bussines_grn_btn bus_submit"
              value="Submit for varification"
            />
          </Link>
        </div>
        <div className="busines_login_div">
          <p className="busines_login_para">Already a member ? </p>
          <Link className="busi_login_link text-decoration-none" to="/login">
             Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessUploadImg;
