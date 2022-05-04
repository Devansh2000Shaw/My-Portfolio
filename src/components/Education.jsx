import React from 'react';
import SJV from '../assets/icons/SJV.jpeg';
import GBV from '../assets/icons/GBV.png';
import KIIT from '../assets/icons/KIIT.png';
import GFG from '../assets/icons/GFG.png';

import '../assets/css/Education.css';

export default function Education() {
    return (
        <div className="journey" id="journey">
            <div className="journey_sub_division_exp">
                <div className = "why" style={{fontFamily: "Ubuntu"}} >.education()</div>
                <div className="education_timeline">
                <a href="https://kiit.ac.in/" target="_blank" rel="noopener noreferrer"><img src={KIIT} alt="logo" className="timeline_logo1"/></a>
                    <div className="line"></div>
                    <a href="https://sssjs.com/shree-jain-vidyalaya-kolkata/" target="_blank" rel="noopener noreferrer"><img src={SJV} alt="logo" className="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://www.gyanbharati.com/" target="_blank" rel="noopener noreferrer"><img src={GBV} alt="logo" className="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title" style={{fontFamily: "Ubuntu"}}>Kalinga Institute of Industrial Technology</div>
                    <div className="institute_location" style={{fontFamily: "Ubuntu"}}>Bhubaneshwar, Odisha, India.</div>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Pursuing B-tech in Computer Science & Engineering</li>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Batch : 2019 - 2023</li>
                </div>
                <div className="timeline_detail_sjv">
                    <div className="institute_title" style={{fontFamily: "Ubuntu"}}>Shree Jain Vidyalaya</div>
                    <div className="institute_location" style={{fontFamily: "Ubuntu"}}>Phusraj Bachhawat Path, Sukeas Ln, B.B.D. Bagh, Kolkata</div>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Senior Secondary Education, WBCHSE</li>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Stream : PCM + Computer Science</li>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Batch : 2016 - 2018</li>
                </div>
                <div className="timeline_detail_gbv">
                    <div className="institute_title" style={{fontFamily: "Ubuntu"}}>Gyan Bharati Vidyalaya</div>
                    <div className="institute_location" style={{fontFamily: "Ubuntu"}}>Nimtala Ghat St, Ahiritola, Jorabagan, Kolkata</div>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Higher Secondary, WBBSE</li>
                    <li className="details" style={{fontFamily: "Ubuntu"}}>Batch : 2014 - 2016</li>
                </div>
            </div>
        </div>
    )
}
