import React from 'react'

const TopicHead = ({head,result,button}) => {
    return (
        <div>
            <div className='topic_head_div'>
                <h5><strong>{head}</strong></h5>
                <p>{result?result:null}</p>
                {button?button:null}
            </div>
        </div>
    )
}

export default TopicHead
