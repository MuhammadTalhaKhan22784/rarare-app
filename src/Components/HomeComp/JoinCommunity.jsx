import React from 'react'
import Button from '../Btn/Btn'
import "../../Pages/Home/Home.css"
const JoinCommunity = () => {
    return (
        <div>
            <div className=''>
                <div className='what_we_do_sub_div join_community_main_div'>
                    <div>
                        <h3 className='what_we_do_head'><strong>Join our community</strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head join_community_para'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d

                        </p>
                    </div>
                    <div className='input_div'>
                         <div className='join_input_div'>
                             <input type="text" placeholder='Enter email address'/>
                             <Button className='join_btn' value='Join'/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity
