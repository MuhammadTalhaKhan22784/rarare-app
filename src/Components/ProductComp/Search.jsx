import React from 'react'
import search from '../../Assets/Icon feather-search@2x.png'


const Search = () => {
    return (
        <div>
            <div className='sarch_comp_div'>
                <div className="blog_search_inp_div">
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search the community' />
                </div>
                <div className='search_div'>
                    <h5 className='search_head search_hr' ><strong>Search Results</strong></h5>
                    <hr className='search_hr' />
                    <h6 className='search_head'><strong>Filter Results</strong></h6>
                    <ul className='search_main_ul'>
                        <li>
                            <img className='search_ul_imgs' src={search} alt="" />
                            <p>All</p>
                        </li>
                        <li>
                            <img className='search_ul_imgs' src={search} alt="" />
                            <p>Issues</p>
                        </li>
                        <li>
                            <img className='search_ul_imgs' src={search} alt="" />
                            <p>Proposal</p>
                        </li>
                        <ul className='search_sub_ul'>
                            <li>
                                <img className='search_ul_imgs' src={search} alt="" />
                                <p>Polls</p>
                            </li>
                            <li>
                                <img className='search_ul_imgs' src={search} alt="" />
                                <p>Consensus Forming</p>
                            </li>
                            <li>
                                <img className='search_ul_imgs' src={search} alt="" />
                                <p>Participatory Budgets</p>
                            </li>
                        </ul>
                        <li>
                            <img className='search_ul_imgs' src={search} alt="" />
                            <p>Surveys</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
