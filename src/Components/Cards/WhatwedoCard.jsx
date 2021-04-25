import React from 'react'
import mask from '../../Assets/Group 3550@2x.png'
import pools from '../../Assets/pools.png'
import surwey from '../../Assets/surwey.png'
import provision from '../../Assets/provision.png'
import proposal from '../../Assets/proposal.png'
import './card.css'

const cardData = [
    { img: mask, head: 'Civic issue reporting' },
    { img: pools, head: 'Polls' },
    { img: surwey, head: 'Surveys' },
    { img: provision, head: 'Managed Services Provision' },
    { img: proposal, head: 'Proposals' },
]

const WhatwedoCard = () => {
    return (
        <React.Fragment>
            {cardData.map((val, i) => (

                <div className='do_card_container'>
                    <div className="card myCcard" style={{ width: '18rem' }}>
                        <img style={{ width: "100px" }} src={val.img} class="card-img-top" alt="..." />
                        <div>
                            <h5><strong> {val.head}</strong></h5>
                        </div>
                        <div class="card-body">
                            <p className="card-text do_card_para">
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos
                         </p>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default WhatwedoCard
