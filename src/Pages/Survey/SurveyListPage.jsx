import React from 'react'
import {  useParams } from 'react-router-dom'
import { surveyResultList } from '../../Data/SurveyResultLIstData'
import Button from '../../Components/Btn/Btn'


const SurveyListPage = () => {
    const {id}= useParams()
    return (
        <div>
            <div className="survey_page_main_div">
                    <div className="survey_links_div">
                        <div className='get_blog_one_link textGrey'>
                            Search Result {' > '} Survey {'>'} <span>{id}</span>
                        </div>
                        <Button className='participate_btn' value='Participate Now!' />
                    </div>
                <div className='survey_list_div'>
                    <ul className="health_analysis_ul  full_page_list">
                        {surveyResultList.list.map((val, i) => (
                            <li key={i} >
                                <p>{val.p}</p>
                                <div className='health_checkbox'>
                                    <input type="checkbox" name="" id="" />
                                    <span >{val.check1}</span>
                                </div>
                                <div className='health_checkbox'>
                                    <input type="checkbox" name="" id="" />
                                    <span>{val.check2}</span>
                                </div>
                                <div className='health_checkbox'>
                                    <input type="checkbox" name="" id="" />
                                    <span>{val.check3}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="submitIusse_btn">
                    <Button className='white_btn' value='Back' />
                    <Button className='grn_btn' value='Submit Issue' />
                </div>
            </div>
        </div>
    )
}

export default SurveyListPage
