import React from 'react'
import { useHistory } from 'react-router';
import "./Post.css"

// assets
import receiveTick from "../../Assets/receive_tick.png"

const PostReceive = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <div className="post_receive">
                <div className="p_receive_main">
                    <img src={receiveTick} alt="tick" />
                    <h2 className="lh-base text_darkblue mt-4">Thankyou for making a <strong className="text_green">positive</strong> change to the community!</h2>
                    <p className="text_lightgray">Sit back and relax while we spread the word!</p>
                    <div className="pcontinue_btn">
                        <button className="text-white bg_lightgreen border_none mt-4"
                            onClick={() => { history.push("/post") }}
                        >Post another report</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostReceive
