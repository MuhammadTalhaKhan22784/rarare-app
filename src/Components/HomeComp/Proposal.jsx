import React from 'react'
import Button from '../Btn/Btn'
import Group from '../../Assets/Group 4728@2x.png'
import ProposalCard from '../Cards/ProposalCard'
import {useHistory} from 'react-router-dom'

const Proposal = () => {
    const history = useHistory()

    return (
        <div className='proposal_container'>
            <div className='proposal_main_div'>
                <div className='what_we_do_sub_div'>
                    <img src={Group} alt=""/>
                    <div>
                        <h3 className='what_we_do_head'><strong> Proposals</strong></h3>
                    </div>
                    <div className='dp_para_div'>
                        <p className='dp_para_head'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo d

                      </p>
                    </div>
                    <div className='voice_heard_btn_div'>

                        <Button onClick={()=>history.push('/consensus')} className='voice_heard_btn_grn' value='Post a proposal' />
                        <Button onClick={()=>history.push('/product')} className='voice_heard_btn_white' value='View all proposals' />
                    </div>
                </div>
                <div className='proposal_card_main_div'>
                    <ProposalCard />
                </div>
                <div className='view_all_div'>
                    <p>View all</p>
                </div>
            </div>
        </div>
    )
}

export default Proposal
