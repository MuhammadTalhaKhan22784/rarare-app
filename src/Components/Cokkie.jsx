import React,{useState} from 'react'
import cokkie from '../Assets/undraw_cookie_love_ulvn.png'

const Cokkie = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='cokkie_main_div' style={{display:show === true ? "none" : "block"}}>
            <div className="cokkie_div">
                <img className='cokkie_img' src={cokkie} alt="" />
                <div className="cokkie_para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Excepturi quidem voluptatibus enim repellat alias magni dolorum natus 
                        voluptate id nesciunt modi eveniet hic recusandae corrupti laudantium cumque est,
                         autem accusamus.</p>
                </div>
                <div className="cokkie_btn_div">
                    <button className='cokkie_grn' onClick={()=>{setShow(true)}}>Accept</button>
                    <button className='cokkie_white' onClick={()=>{setShow(true)}}>Decline</button>
                </div>
            </div>
        </div>
    )
}

export default Cokkie
