import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./Post.css"

// assets
import postIcon from "../../Assets/post_icon.png";
import undrawFeeling from "../../Assets/undraw_feeling.png";
import undrawHappy from "../../Assets/undraw_happy.png";
import greenDot from "../../Assets/greendot.png"

const PostHome = () => {
    const [show, setShow] = useState("1");
    const history = useHistory();

    return (
        <React.Fragment>

            <div className="post_home">
                <div>
                    <div className="post_header">
                        <img src={postIcon} alt="posticon" />
                        <h2 className="text_darkblue">Post a <strong className="text_lightpurple">Report!</strong> </h2>
                        <p className="text_lightgray">Get your ideas to other people. Post something that matters!</p>
                    </div>
                    <div className="category_select">
                        <div className="cs_text">
                            <h2 className="text_darkblue">Select a Category</h2>
                        </div>
                        <div className="cs_tabs_main">
                            <div className="cs_tab">
                                <div onClick={() => { setShow("1") }} className={show === "1" ? "cs_tab_box border_solid green_border" : "cs_tab_box"}>
                                    <img className="c_dot" style={{ display: show === "1" ? "block" : "none" }} src={greenDot} alt="" />
                                    <img src={undrawFeeling} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Rant</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                            <div className="cs_tab">
                                <div onClick={() => { setShow("2") }} className={show === "2" ? "cs_tab_box border_solid green_border" : "cs_tab_box"}>
                                    <img className="c_dot" style={{ display: show === "2" ? "block" : "none" }} src={greenDot} alt="" />
                                    <img src={undrawHappy} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Rave</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                        </div>
                        <div className="pcontinue_btn">
                            <button className="text-white bg_lightgreen border_none"
                                onClick={() => { history.push(show === "1" ? "/post-report" : "/post") }}
                            >Continue</button>
                        </div>

                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default PostHome
