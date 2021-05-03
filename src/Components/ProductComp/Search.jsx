import React from 'react'
// assets 
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
                    <img src={search2} alt="img" />
                    <input type="text" placeholder='Search the community' />
                </div>
                <div className='search_div'>
                    <h5 className='search_head' ><strong>Search Results</strong></h5>
                    <img className='path_img' src={path} alt="img" />
                    <h6 className='search_head'><strong>Filter Results</strong></h6>
                    <ul className='search_main_ul'>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path2} alt="img" />
                                <img className='search_ul_imgs' src={search} alt="img" />
                            </div>
                            <p>All</p>
                        </li>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="img" />
                                <img className='search_ul_imgs' src={pro} alt="img" />
                            </div>
                            <p>Issues</p>
                        </li>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="img" />
                                <img className='search_ul_imgs' src={bulb} alt="img" />
                            </div>
                            <p>Proposal</p>
                        </li>
                        <ul className='search_sub_ul'>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="img" />
                                    <img className='search_ul_imgs' src={pols} alt="img" />
                                </div>
                                <p>Polls</p>
                            </li>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="img" />
                                    <img className='search_ul_imgs' src={farming} alt="img" />
                                </div>
                                <p>Consensus Forming</p>
                            </li>
                            <li>
                                <div className='search_uimg_div'>
                                    <img className='path2_img' src={path3} alt="img" />
                                    <img className='search_ul_imgs' src={cash} alt="img" />
                                </div>
                                <p>Participatory Budgets</p>
                            </li>
                        </ul>
                        <li>
                            <div className='search_uimg_div'>
                                <img className='path2_img' src={path3} alt="img" />
                                <img className='search_ul_imgs' src={survey} alt="img" />
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
