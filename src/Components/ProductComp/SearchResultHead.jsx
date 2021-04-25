import React, { useState } from 'react'
import TopicHead from './TopicHead'
import IssueCard from './IssueCard'
import ProductProposalCard from './ProductProposalCard'
import ProSurveyCard from './ProSurveyCard'
import { SurveyCard } from '../../Pages/Profile/CardData'
import grid from '../../Assets/Group 3602.png'
import listG from '../../Assets/list.png'
import gridG from '../../Assets/grid.png'
import liW from '../../Assets/liW.png'


const SearchResultHead = () => {

    let [list, setList] = useState(false)

    return (
        <div>
            <div className='search_result_div'>
                <div className='search_result_head_div'>
                    <div className='search_reslut'>Showing result for <span> "Potholes" </span> , near <span> " Togo nigeria " </span></div>
                    <div className="list_card_veiw">
                        <img onClick={() => setList(false)} src={!list ? grid : gridG} alt="" />
                        <img onClick={() => setList(true)} src={list ? listG : liW} alt="" />
                    </div>
                </div>
                <TopicHead result='2 Result' head='Issues' />
                <IssueCard className='btn_left' list={list} />
                <TopicHead result='1533 Result' head='Proposal' />
                <ProductProposalCard left='btn_left' list={list} />
                <TopicHead result='1033 Result' head='Surveys' />
                <ProSurveyCard data={SurveyCard.all_user} left='btn_left' list={list} />

            </div>
        </div>
    )
}

export default SearchResultHead
