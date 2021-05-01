import React from 'react'
import more from '../../Assets/Group 3537@2x.png'
import WhatwedoCard from '../Cards/WhatwedoCard'
import maskGroup from '../../Assets/Mask Group 2@2x.png'
import polygon2 from '../../Assets/Polygon 2@2x.png'


const WhatWeDo = () => {
    return (
        <div className='what_we_do_container'>
            <div className='what_we_do_main_div'>
                <div className='what_we_do_sub_div'>

                    <div className='do_more_img_div'>
                        <img className='do_more_img' src={more} alt="img" />
                    </div>
                    <div>
                        <h3 className='what_we_do_head'><strong> What We Do</strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                            RaRaReTM is a civic app that enables access and collaboration between people and relevant authorities to drive positive
                            change. RaRaReTM enables a free, easy, way to report civic issues, track them to resolution, create opinion polls and get
                            rewarded for participation
                    </p>
                    </div>
                </div>
                <div className='card_and_dot_img_div'>
                    <div>
                    <img className='do_polygon1_img' src={polygon2} alt="img" />
                    </div>
                    <div className='whatwedo_cards_div'>
                        <WhatwedoCard />
                    </div>
                    <div className='dot_img_div'>
                        <img className='dot_img_circle' src={maskGroup} alt="img" />
                    </div>
                </div>
                <div className='do_polygon2_img_div'>
                <img className='do_polygon2_img' src={polygon2} alt="img" />

                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
