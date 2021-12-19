import React from 'react';
import '../assets/css/Experience.css';
import KIIT from '../assets/icons/KIIT.png';

function Experiences(){
    return(
        <div id = "experience">
            <p className = "why">Experiences</p>
            <div className="experience" id="experience">
                <div className="container">
                    {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Resume</p>
                        <h2>Working Experience</h2>
                    </header> */}
                    <div className="timeline" style={{color: "rgb(29, 28, 28)"}}>
                        <div className="timeline-item left wow animate__animated animate__slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2045 - 2050</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Web Developer</h2>
                                <h4>Soft Agency, San Francisco, CA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow animate__animated animate__slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2045 - 2050</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Web Developer</h2>
                                <h4>Soft Agency, San Francisco, CA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow animate__animated animate__slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2045 - 2050</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Web Developer</h2>
                                <h4>Soft Agency, San Francisco, CA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow animate__animated animate__slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2045 - 2050</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Web Developer</h2>
                                <h4>Soft Agency, San Francisco, CA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;