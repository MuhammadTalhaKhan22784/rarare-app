import React from 'react'
import mob from '../../Assets/Group 3564@2x.png'
import appstore from '../../Assets/app-store (2).png'


const Report = () => {
    return (
        <div>
            <div className='getinspired_main_div'>
                <div className='get_inspire_div'>
                    <div className='get_inspire_img_div report_mob_img_div'>
                        <img className='mob1' src={mob} alt="" />
                        <img className='mob2' src={mob} alt="" />
                        <img className='mob3' src={mob} alt="" />
                    </div>
                    <div className='get_inspire_detail staye_connect report_issue_div'>
                        <div className='head_magnet_div'>
                            <h5><strong style={{ color: '#1cc1a0' }}>Report an Issue</strong> <strong>on the go!</strong></h5>
                        </div>
                        <div className='get_detail_para report_para'>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo d
                           </p>
                        </div>
                        {/* <Button className='getInsp_btn' value='Lorem Ipsum' /> */}
                        <div className='app_store_div'>

                            <img src={appstore} className='appstore_img' alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Report
