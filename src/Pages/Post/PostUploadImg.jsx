import React, { useState ,useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Btn/Btn";
import postIcon from "../../Assets/post_icon.png";
import uploadImg from "../../Assets/upload-img.png";

import "../Bussinus/Bussines.css";

const PostUploadImg = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

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
          <img src={postIcon} alt="lgLogo" />
        </div>
        <h5 className="bussines_head">
          <strong>
            Post a <strong style={{ color: "#19c2a0" }}> Report!</strong>
          </strong>
        </h5>
        <div className="bussines_para mb-4">
          <p>Please provide the following to complete registration!</p>
        </div>
        <div>
          <h6 className="mb-3">
            <strong>Upload Images</strong>
          </h6>
        </div>
        <div className="upload_div">
          <label htmlFor="upload_logo">
            <img
              className="upload_img"
              src={uploadImg}
              alt="img"
            />
          </label>
          <input
            type="file"
            onChange={(e) => handleUrl(e)}
            name="upload_logo"
            id="upload_logo"
          />
        </div>
        <div className="main_upload_img_div">
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
        <div className="business_btn_div post_btn_div mt-5" style={{width:"max-content", margin:"0 auto"}}>
          <Link to="/post-report">
            <Button className="bussines_white_btn upload_back" value="Back" />
          </Link>
          <Link to="/post-receive">
            <Button
              className="bussines_grn_btn post_grn_btn bus_submit"
              value="Submit Issue"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostUploadImg;
