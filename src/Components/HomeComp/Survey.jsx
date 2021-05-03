import React from 'react'
import Button from '../Btn/Btn'
import SurveyCard from '../HomeBlogCards/SurveyCard'
import { useHistory } from 'react-router-dom'
// assets 
import pen from '../../Assets/Group 4726@2x.png'


const Survey = () => {
    const history = useHistory()

    return (
        <div className='survey_container'>
            <div className='recent_issues_main_div'>
                <div className='what_we_do_sub_div'>
                    <div className='do_more_img_div'>
                        <img className='do_more_img' src={pen} alt="img" />
                    </div>
                    <div>
                        <h3 className='what_we_do_head'><strong> Top surveys in your community </strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d
                        </p>
                    </div>
                    <div className='voice_heard_btn_div'>
                        <Button
                            onClick={() => history.push('/post-survey-tamplate')}
                            className='voice_heard_btn_grn'
                            value='Post a survey!'
                        />
                    </div>
                </div>
                <div className='survey_card_div'>
                    <SurveyCard />
                </div>
                <div className='view_all_div'>
                    <p>View all</p>
                </div>
            </div>
        </div>
    )
}

export default Survey
