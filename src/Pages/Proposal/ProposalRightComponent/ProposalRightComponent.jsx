import React from 'react'
import Card from '@material-ui/core/Card';
import "./ProposalRightComponent.css"
import Chart from "./Chart"

function ProposalRightComponent() {
    return (
        <div className="proposalRightComponent">
           <Card className="card">
               <h4 >Result</h4>
            
               <Chart />
           </Card>
        </div>
    )
}

export default ProposalRightComponent
