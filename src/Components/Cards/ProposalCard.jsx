import React from 'react'
import Button from '../Btn/Btn'
import dot from '../../Assets/dot.png'
import location from '../../Assets/location.png'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

const ProposalCard = () => {

    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);

    //   React.useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);

    return (
        <React.Fragment>

            <div className='proposal_card_container d-flex'>
                    <div className="card proposal_card" style={{ width: '18rem' }}>
                        <div>
                            <h5 className='proposal_card_head'><strong>Title of the Proposal</strong></h5>
                        </div>
                        <div className='ongoing_btn_div'>
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
                        <Button className='voice_heard_btn_grn proposal_btn' value='Lorem Ipsum' />
                    </div>
                    <div className="card proposal_card" style={{ width: '18rem' }}>
                        <div>
                            <h5 className='proposal_card_head'><strong>Title of the Proposal</strong></h5>
                        </div>
                        <div className='ongoing_btn_div'>
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
                        <Button className='voice_heard_btn_grn proposal_btn' value='Lorem Ipsum' />
                    </div>
                    <div className="card proposal_card" style={{ width: '18rem' }}>
                        <div>
                            <h5 className='proposal_card_head'><strong>Title of the Proposal</strong></h5>
                        </div>
                        <div className='ongoing_btn_div'>
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
                        <Button className='voice_heard_btn_grn proposal_btn' value='Lorem Ipsum' />
                    </div>
                </div>
        </React.Fragment>
    )
}

export default ProposalCard
