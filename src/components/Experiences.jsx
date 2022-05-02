import React, {useEffect} from 'react';
import '../assets/css/Experience.css';
import KIIT from '../assets/icons/KIIT.png';
import Aos from 'aos';
import "aos/dist/aos.css"

function Experiences(){
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, [])
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
                        <div className="timeline-item left wow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Jan 2022 - Apr 2022</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Winter Internship</h2>
                                <h4>HighRadius, India</h4>
                                <p>
                                    Built a ML prediction model (accuracy: 77%) using Random Forest Regression algo. and a full-stack Invoice Management Application using React Js, Java, Servlets, JDBC, and MySql.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow" data-aos="fade-left" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Aug 2020 - Present</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>React & Next Developer</h2>
                                <h4>GeeksforGeeks KIIT</h4>
                                <p>
                                    Developed responsive Landing and Projects pages using React JS and recently, I revamped its Home and Event pages with Next JS to improve image optimization, load speed, and SEO.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Feb 2021 - Present</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>React Developer</h2>
                                <h4>KIIT Entrepreneurship Cell</h4>
                                <p>
                                    Worked closely with the Ecell team and contributed to the <a target = "_blank" href="https://ksk.ecell.org.in/">KIIT Startup Konclave website</a> as well as to the <a target = "_blank" href="https://icamp.ecell.org.in/">Internship Camp</a> website by making the initial design, fixing bugs, and integrating APIs.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow "data-aos="fade-left" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Mar 2021 - Present</div>
                                <img src = {KIIT} className="timeline_logo"/><br/><br/>
                                <h2>Event Organizer</h2>
                                <h4>KIIT Entrepreneurship Cell</h4>
                                <p>
                                I collaborated with the other members to make this event <a target = "_blank" href="https://icamp.ecell.org.in/">Internship Camp</a> successful, and I fulfilled all deadlines as the Point of Contact (POC) for the organizations visiting during the internship drive.
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