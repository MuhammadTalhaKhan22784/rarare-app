import React, { useLayoutEffect } from "react";
import "./Post.css";

// assets
import receiveTick from "../../Assets/receive_tick.png";
import { Link } from "react-router-dom";

const PostReceive = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="post_receive">
        <div className="p_receive_main">
          <img src={receiveTick} alt="tick" />
          <h2 className="lh-base text_darkblue mt-4">
            Thankyou for making a{" "}
            <strong className="text_green">positive</strong> change to the
            community!
          </h2>
          <p className="text_lightgray">
            Sit back and relax while we spread the word!
          </p>
          <div className="pcontinue_btn">
            <Link className="text-decoration-none" to="/post">
              {" "}
              <button
                className="text-white bg_lightgreen border_none mt-4"
              >
                Post another report
              </button>
            </Link>
          </div>
          <div>
            <button className='post_share_btn'>Share on social</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostReceive;
