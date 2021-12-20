import React from 'react';
import SJV from '../assets/icons/SJV.jpeg';
import GBV from '../assets/icons/GBV.png';
import KIIT from '../assets/icons/KIIT.png';
import GFG from '../assets/icons/GFG.png';

import '../assets/css/Education.css';

export default function Education() {
    return (
        <div className="journey" id="journey">
            {/* <div className="journey_title">JOURNEY</div>
            <div className="journey_sub_division">
                <div className="journey_sub_title">Education</div>
                <div className="timeline">
                    <a href="https://kiit.ac.in/" target="_blank" rel="noopener noreferrer"><img src={KIIT} alt="logo" className="timeline_logo1"/></a>
                    <div className="line"></div>
                    <a href="https://sssjs.com/shree-jain-vidyalaya-kolkata/" target="_blank" rel="noopener noreferrer"><img src={SJV} alt="logo" className="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://www.gyanbharati.com/" target="_blank" rel="noopener noreferrer"><img src={GBV} alt="logo" className="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title">Kalinga Institute of Industrial Technology,</div>
                    <div className="institute_location">Bhubaneshwar, Odisha, India.</div>
                    <li className="details">Pursuing B-tech in Computer Science & Engineering</li>
                    <li className="details">Batch : 2019 - 2023</li>
                </div>
                <div className="timeline_detail_vvrs">
                    <div className="institute_title">Vidya Vihar Residential School,</div>
                    <div className="institute_location">Purnea, Bihar, India.</div>
                    <li className="details">Senior Secondary Education,CBSE</li>
                    <li className="details">Batch : 2016 - 2018</li>
                    <li className="details">Stream : PCM + Computer Science</li>
                    <li className="details">Percentage : 73.4%</li> 
                </div>
                <div className="timeline_detail_bps">
                    <div className="institute_title">Bijendra Public School,</div>
                    <div className="institute_location">Purnea, Bihar, India.</div>
                    <li className="details">Secondary Education,CBSE</li>
                    <li className="details">Batch : 2014 - 2016</li>
                    <li className="details">CGPA : 10 (i.e. 95%)</li> 
                </div>
            </div> */}
            <div className="journey_sub_division_exp">
                <div className="journey_sub_title">Educational Journey</div>
                <div className="timeline">
                <a href="https://kiit.ac.in/" target="_blank" rel="noopener noreferrer"><img src={KIIT} alt="logo" className="timeline_logo1"/></a>
                    <div className="line"></div>
                    <a href="https://sssjs.com/shree-jain-vidyalaya-kolkata/" target="_blank" rel="noopener noreferrer"><img src={SJV} alt="logo" className="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://www.gyanbharati.com/" target="_blank" rel="noopener noreferrer"><img src={GBV} alt="logo" className="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title">Kalinga Institute of Industrial Technology</div>
                    <div className="institute_location">Bhubaneshwar, Odisha, India.</div>
                    <li className="details">Pursuing B-tech in Computer Science & Engineering</li>
                    <li className="details">Batch : 2019 - 2023</li>
                </div>
                <div className="timeline_detail_sjv">
                    <div className="institute_title">Shree Jain Vidyalaya</div>
                    <div className="institute_location">Phusraj Bachhawat Path, Sukeas Ln, B.B.D. Bagh, Kolkata</div>
                    <li className="details">Senior Secondary Education, WBCHSE</li>
                    <li className="details">Stream : PCM + Computer Science</li>
                    <li className="details">Batch : 2016 - 2018</li>
                </div>
                <div className="timeline_detail_gbv">
                    <div className="institute_title">Gyan Bharati Vidyalaya</div>
                    <div className="institute_location">Nimtala Ghat St, Ahiritola, Jorabagan, Kolkata</div>
                    <li className="details">Higher Secondary, WBBSE</li>
                    <li className="details">Batch : 2014 - 2016</li>
                </div>
            </div>
        </div>
    )
}
