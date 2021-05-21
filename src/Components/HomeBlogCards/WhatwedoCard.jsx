import React from 'react'
// assests 
import mask from '../../Assets/Group 3550.png'
import pools from '../../Assets/Group 3551.png'
import surwey from '../../Assets/Group 3553.png'
import provision from '../../Assets/Group 3552.png'
import proposal from '../../Assets/Group 3554.png'
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

                <div className='do_card_container' key={i}>
                    <div className="card myCcard" style={{ width: '18rem' }}>
                        <img style={{ width: "100px" }} src={val.img} className="card-img-top" alt="..." />
                        <div>
                            <h5><strong> {val.head}</strong></h5>
                        </div>
                        <div className="card-body">
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
