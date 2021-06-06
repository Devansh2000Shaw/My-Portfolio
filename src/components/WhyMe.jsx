import React from 'react';
import '../assets/css/WhyMe.css';
import BrushIcon from '@material-ui/icons/Brush';
import LaptopIcon from '@material-ui/icons/Laptop';
import CodeIcon from '@material-ui/icons/Code';

function WhyMe()
{
    return(
        <div id = "Whyme">
            <p className = "why">Why Me?</p>
            <br />
            <br />
            <div className = "whyme row">
                <div className = "whyme1 animate__animated animate__fadeInDown">
                    {/* <i class="fa fa-thumb-tack" aria-hidden="true"></i> */}
                    <CodeIcon style={{fontSize: "20px"}}/>
                    <p style = {{fontSize: "18.72px", paddingTop: "20px", fontFamily: "sans-serif"}}>Exceptional Results</p>
                    <p className = "whyme-content">I possess a combination of skills and experience that makes me stand out.
                    Hiring me will make your life colorful & easier.</p>
                </div>
                <div className = "whyme2 animate__animated animate__fadeInUp">
                    {/* <i class="fa fa-paint-brush" aria-hidden="true"></i> */}
                    <BrushIcon style={{fontSize: "20px"}}/>
                    <p style = {{fontSize: "18.72px", paddingTop: "20px", fontFamily: "sans-serif"}}>Creave</p>
                    <p className = "whyme-content">I communicate ideas to inspire and inform consumers and I ensure that the 
                    designs accurately reflect the desired message.</p>
                </div>
                <div className = "whyme3 animate__animated animate__fadeInDown">
                    {/* <i class="fa fa-laptop" aria-hidden="true"></i> */}
                    <LaptopIcon style={{fontSize: "20px"}}/>
                    <p style = {{fontSize: "18.72px", paddingTop: "20px", fontFamily: "sans-serif"}}>Energetic and Attentive</p>
                    <p className = "whyme-content">I incorporate changes recommended by the clients into the design and Advise
                    clients on strategies to reach a particular audience.</p>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}

export default WhyMe;