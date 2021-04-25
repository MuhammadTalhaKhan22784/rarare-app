import React from 'react'
import Button from '../Btn/Btn'
import step from '../../Assets/step.png'
import proposal2 from '../../Assets/proposal2 (2).png'
import voice from '../../Assets/voice_step.png'
import smile from '../../Assets/smile.png'
import group from '../../Assets/groupicon.png'
import result from '../../Assets/result.png'

const VoiceHeard = () => {
    return (
        <div className='voice_heard_container'>
            <div className='voice_heard_main_div'>
                <div className='what_we_do_sub_div'>

                    <div>
                        <h3 className='what_we_do_head'><strong> Let your <strong style={{ color: '#1cc1a0 ' }}> voice </strong> be heard!</strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d

                       </p>
                    </div>
                    <div className='voice_heard_btn_div'>

                        <Button className='voice_heard_btn_grn' value='View current proposals' />
                        <Button className='voice_heard_btn_white' value='Propose a deliberation' />
                    </div>
                </div>
                <div className='voice_step_div'>
                    <div className='main_steps_div'>
                        <div className="step1_div">
                            <h6><strong>Proposal Generation</strong></h6>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                            <img className='proposal2_img' src={proposal2} alt=""/>
                        </div>
                        <div className="step2_div">
                            <h6><strong>Your voice</strong></h6>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                            <img className='step_voice_img' src={voice} alt=""/>
                        </div>
                        <div className="step3_div">
                            <h6><strong>Implementation</strong></h6>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                            <img className='step_smile' src={smile} alt=""/>
                        </div>
                    </div>
                    <img src={step} alt="" />
                    <div className='main_steps_div'>
                        <div className="step4_div">
                            <img className='step_group' src={group} alt=""/>
                            <h6><strong>Participants Verification</strong></h6>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                        </div>
                        <div className="step5_div">
                            <img className='step_result' src={result} alt=""/>
                            <h6><strong>Result Analysis</strong></h6>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoiceHeard
