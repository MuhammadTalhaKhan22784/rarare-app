import React from 'react'
import bulb from '../../Assets/bulb.png'
import group1 from '../../Assets/red-group (2).png'
import group2 from '../../Assets/w-group (2).png'
import magnet from '../../Assets/magnet.png'
import appstore from '../../Assets/app-store (2).png'
import Button from '../Btn/Btn'

const GetInspired = () => {
    return (
        <div className='getinspired_container'>
            <div className='getinspired_main_div'>
                <div className='get_inspire_div'>
                    <div className='get_inspire_detail'>
                        <div className='head_blb_div'>
                            <img src={bulb} alt="" />
                            <h5><strong>Get inspired!</strong></h5>
                        </div>
                        <div className='get_detail_para'>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo d
                           </p>
                        </div>
                        <Button className='getInsp_btn' value='Lorem Ipsum' />
                    </div>
                    <div className='get_inspire_img_div'>
                        <img src={group1} alt="" />
                    </div>
                </div>
                <div className='get_inspire_div'>
                        <div className='get_inspire_img_div'>
                            <img src={group2} alt="" />
                        </div>
                    <div className='get_inspire_detail staye_connect'>
                        <div className='head_magnet_div'>
                            <h5><strong>Stay connected</strong></h5>
                            <img src={magnet} alt="" />
                        </div>
                        <div className='get_detail_para'>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo d
                           </p>
                        </div>
                        {/* <Button className='getInsp_btn' value='Lorem Ipsum' /> */}
                        <div className='app_store_div'>

                        <img src={appstore} className='appstore_img' alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetInspired
