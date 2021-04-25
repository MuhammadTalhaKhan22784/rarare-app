import React from 'react'
import Button from '../Btn/Btn'

const RedeemCard = () => {
    return (
        <div>
            <div className="redeem_card_maindiv">
                <h5><strong>Title of the offer</strong></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incid</p>
                <div className='r_points_div'>
                    <div>
                        <h5><strong>2,000</strong></h5>
                        <p>LOCO POINTS</p>
                    </div>
                    <Button className='blnce_btn' value='Redeem Points' />
                </div>
            </div>
        </div>
    )
}

export default RedeemCard
