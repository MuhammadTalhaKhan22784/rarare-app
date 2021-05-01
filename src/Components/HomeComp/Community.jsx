import React from 'react'
import cros2 from '../../Assets/Group 25@3x.png'
import Button from '../Btn/Btn'
import eye from '../../Assets/eye.png'
import square from '../../Assets/Group 33@2x.png'
import maskGroup from '../../Assets/Mask Group 2@2x.png'
import polygon2 from '../../Assets/Polygon 2@2x.png'
import cros1 from '../../Assets/Group 26@2x.png'




const Community = () => {
    return (
        <div className='community_container'>
            <div className='community_main_div'>

                <div className='what_we_do_sub_div'>
            <img className='eye_img2' src={eye} alt="img"/>
  
                    <div>
                        <h3 className='what_we_do_head'><strong> We are on a mission to end <strong style={{ color: '#1cc1a0 ' }}> blindness </strong> </strong></h3>
                        <h3 style={{marginTop:'-15px'}} className='what_we_do_head'><strong>our community!</strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                           <img className='community_cors1' src={cros2} alt="img"/>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d
                       </p>
                    </div>
                    <div className='voice_heard_btn_div'>

                        <Button className='voice_heard_btn_grn' value='Learn More' />
                        <Button className='voice_heard_btn_white' value='Partner with us' />
                    </div>
                </div>
                <div className='eye_main_div'>
                      <div className='eye_img_div'>
                             <img className='eye_img' src={eye} alt="img"/>
                             <img className='community_cros2' src={cros1} alt="img"/>
                            <img className='polygon_community' src={polygon2} alt="img"/>
                      </div>
                      <div className='dot_square_div'>
                      <div className='square_div'>
                        <img className='square_img' src={square} alt="img"/>
                      </div>
                      <div className='dot_img_circle_div'>
                          <img className='dotImgCIrcle' src={maskGroup} alt="img"/>
                      </div>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Community
