import React, { useState } from 'react'
import TopicHead from './TopicHead'
import IssueCard from './IssueCard'
import Search from './Search'
import ProductProposalCard from './ProductProposalCard'
import ProSurveyCard from './ProSurveyCard'
import { SurveyCard } from '../../Pages/Profile/CardData'
// assets 
import grid from '../../Assets/Group 3602.png'
import listG from '../../Assets/list.png'
import gridG from '../../Assets/grid.png'
import liW from '../../Assets/liW.png'
import search2 from '../../Assets/Icon feather-search.png'



const SearchResultHead = () => {

    let [list, setList] = useState(false)

    return (
        <div>
            <div className='search_result_div'>
                
                <div className="blog_search_inp_div_mob">
                    <img src={search2} alt="img" />
                    <input type="text" placeholder='Search the community' />
                </div>
                <div className="search_filter_mob">
                    <div>
                        <span>Filter Results</span>
                        <p className='icon_filrt'>{'<'}</p>
                        <div className="mob_search_card_comp">
                            <Search />
                        </div>
                    </div>
                </div>
                <div className='search_result_head_div'>
                    <div className='search_reslut'>Showing result for <span> "Potholes" </span> , near <span> " Togo nigeria " </span></div>
                    <div className="list_card_veiw">
                        <img onClick={() => setList(false)} src={!list ? grid : gridG} alt="img" />
                        <img onClick={() => setList(true)} src={list ? listG : liW} alt="img" />
                    </div>
                </div>
                <TopicHead result='2 Result' head='Issues' />
                <IssueCard Cuser className='btn_lef' list={list} />
                <TopicHead result='1533 Result' head='Proposal' />
                <ProductProposalCard left='btn_lef' list={list} />
                <TopicHead result='1033 Result' head='Surveys' />
                <ProSurveyCard data={SurveyCard.all_user} left='btn_lef' list={list} />
            </div>
        </div>
    )
}

export default SearchResultHead
