import React,{useState} from 'react'
import Button from '../Btn/Btn'
import dot from '../../Assets/dot.png'
import location from '../../Assets/location.png'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import toggle from '../../Assets/Group 3659.png'
import edit from '../../Assets/Group 3655.png'
import delt from '../../Assets/Group 3654.png'

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" className='main_line' alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress className='progres_line' variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography className='back_clr' variant="body2" color="textSecondary"></Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const ProfileProposalCard = ({ className, list }) => {

    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);
    let [togle,setTogle] = useState(false)

    return (
        <React.Fragment>
            {!list ?
                <div className='profile_proposal_conatiner'>
                    <div className="card profile_proposal_card" >
                        <div className='head_div_grid'>
                            <h5 className='proposal_card_head'><strong>Title of the Proposal</strong></h5>
                            <div className="tagle_div">
                                <img src={toggle} onClick={()=>setTogle(!togle)} alt=""/>
                                {togle?
                                <div className="edit_div_2">
                                    <img className='edit_img' src={edit} alt=""/>
                                    <hr className='togle_hr'/>
                                    <img className='dlt_img' src={delt} alt=""/>
                                </div>
                                :null
                                }
                            </div>
                        </div>
                        <div className='ongoing_btn_div2'>
                            <button className='voice_heard_btn_white ongoin'><img src={dot} alt="" /> Ongoing</button>
                        </div>
                        <div className='location_div'>
                            <img src={location} alt="" />
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        <div className='progres_main_div'>
                            <div className='progress_div'>
                                <p>Progress</p>
                                <p className='percnt'> {progress}%</p>
                            </div>
                            <div className={classes.root}>
                                <LinearProgressWithLabel />
                            </div>
                        </div>
                        <div className='duration_div'>
                            <div>
                                <p className='duration_date'>START DATE</p>
                                <p className='duration_grn'>April 5</p>
                                <p className='duration_date'>PARTICIPANTS</p>
                                <p className='duration_grn'>1500+</p>
                            </div>
                            <div>
                                <p className='duration_date'>END DATE DATE</p>
                                <p className='duration_grn'>April 5</p>
                                <p className='duration_date'>ACCESS</p>
                                <p className='duration_grn'>Private</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="card list_profile_proposal" >
                    <div className='head_profile_proposal'>
                        <h5 className='proposal_card_head'><strong>Title of the Proposal</strong></h5>
                        <button className='voice_heard_btn_white ongoin'><img src={dot} alt="" /> Ongoing</button>
                    </div>
                    <div className='ongoing_btn_div'>
                    </div>
                    <div className='location_div profile_proposal_loc_div'>
                        <img src={location} alt="" />
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='progres_main_div'>
                        <div className='progress_div'>
                            <p>Progress</p>
                            <p className='percnt'> {progress}%</p>
                        </div>
                        <div className={classes.root}>
                            <LinearProgressWithLabel />
                        </div>
                    </div>
                    <div className='duration_div profile_duration_div'>
                        <div>
                            <p className='duration_date'>START DATE</p>
                            <p className='duration_grn'>April 5</p>
                        </div>
                        <div>
                            <p className='duration_date'>PARTICIPANTS</p>
                            <p className='duration_grn'>1500+</p>
                        </div>
                        <div>
                            <p className='duration_date'>END DATE DATE</p>
                            <p className='duration_grn'>April 5</p>
                        </div>
                        <div>
                            <p className='duration_date'>ACCESS</p>
                            <p className='duration_grn'>Private</p>
                        </div>
                    </div>
                </div>
            }

        </React.Fragment>
    )
}

export default ProfileProposalCard
