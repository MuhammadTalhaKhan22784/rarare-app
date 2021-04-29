import React from 'react'
import search from '../../Assets/Icon awesome-search.png'
import search2 from '../../Assets/Icon feather-search.png'
import path from '../../Assets/Path 6563.png'
import path2 from '../../Assets/Path 6896.png'
import path3 from '../../Assets/Rectangle 871.png'
import pro from '../../Assets/Icon material-report-problem.png'
import bulb from '../../Assets/Icon awesome-lightbulb.png'
import pols from '../../Assets/Icon metro-chart-bars.png'
import farming from '../../Assets/Icon awesome-hand-paper.png'
import cash from '../../Assets/Icon ionic-md-cash.png'
import survey from '../../Assets/Icon ionic-ios-paper.png'

const Search = () => {
    return (
        <div>
            <div className='sarch_comp_div'>
                <div className="blog_search_inp_div">
                    <img src={search2} alt="" />
                    <input type="text" placeholder='Search the community' />
                </div>
                <div className='search_div'>
                    <h5 className='search_head' ><strong>Search Results</strong></h5>
                    <img className='path_img' src={path} alt="" />
                    {/* <hr className='search_hr' /> */}
                    <h6 className='search_head'><strong>Filter Results</strong></h6>
                    <ul className='search_main_ul'>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path2} alt="" />
                                <img className='search_ul_imgs' src={search} alt="" />
                            </div>
                            <p>All</p>
                        </li>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="" />
                                <img className='search_ul_imgs' src={pro} alt="" />
                            </div>
                            <p>Issues</p>
                        </li>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="" />
                                <img className='search_ul_imgs' src={bulb} alt="" />
                            </div>
                            <p>Proposal</p>
                        </li>
                        <ul className='search_sub_ul'>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="" />
                                    <img className='search_ul_imgs' src={pols} alt="" />
                                </div>
                                <p>Polls</p>
                            </li>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="" />
                                    <img className='search_ul_imgs' src={farming} alt="" />
                                </div>
                                <p>Consensus Forming</p>
                            </li>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="" />
                                    <img className='search_ul_imgs' src={cash} alt="" />
                                </div>
                                <p>Participatory Budgets</p>
                            </li>
                        </ul>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="" />
                                <img className='search_ul_imgs' src={survey} alt="" />
                            </div>
                            <p>Surveys</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
