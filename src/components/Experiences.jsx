import React, {useEffect} from 'react';
import '../assets/css/Experience.css';
import JPMC from '../assets/icons/JP Morgan.jpg';
import GEHC from '../assets/icons/gehc.jpg';
import HRC from '../assets/icons/highradius.png';
import KIITECELL from '../assets/icons/Ecell.jpg';
import GFGKIIT from '../assets/icons/gfg.jpg';
import Aos from 'aos';
import "aos/dist/aos.css"

function Experiences(){
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, [])
    return(
        <div id = "experiences">
            <p className = "why" style={{fontFamily: "Ubuntu"}}>.experiences()</p>
            <div className="experience" >
                <div className="container">
                    {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Resume</p>
                        <h2>Working Experience</h2>
                    </header> */}
                    <div className="timeline" style={{color: "rgb(29, 28, 28)"}}>
                        <div className="timeline-item left wow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Feb 2023 - May 2023</div>
                                <img src = {JPMC} className="timeline_logo" alt = "JPMC logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>Software Developer Intern</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>JP Morgan Chase & Co. </h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    Hyderabad, India
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow" data-aos="fade-left" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Sep 2022 - Jan 2023</div>
                                <img src = {GEHC} className="timeline_logo" alt = "GEHC logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>SWE Intern</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>GE Healthcare, Bengaluru, India</h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Jun 2022 - Jan 2023</div>
                                <img src = {HRC} className="timeline_logo" alt = "HRC logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>SDE Intern</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>Highradius, Bhubaneswar, India</h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    • Worked with HighRadius Collections (CLS) and HighRadius Credit (CRD) frontend team. Built functional responsive UI screen and implemented features. <br/>
                                    • Built mock APIs for Highradius Credit (CRD) using Node JS and Express JS. Performed manual testing and built test suites for different UI and APIs.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow" data-aos="fade-left" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Jan 2022 - Apr 2022</div>
                                <img src = {HRC} className="timeline_logo" alt = "HRC logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>Winter Intern</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>Highradius, Bhubaneswar, India</h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    Built a ML prediction model (accuracy: 77%) using Random Forest Regression algo. and a full-stack Invoice Management Application using React Js, Java, Servlets, JDBC, and MySql. It allows users to perform CRUD operations on Invoices. Users can perform search and advance searches also on invoices.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow" data-aos="fade-right" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Feb 2021 - Present</div>
                                <img src = {KIITECELL} className="timeline_logo" alt = "Ecell logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>React Developer</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>KIIT Entrepreneurship Cell</h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    Worked closely with the Ecell team and contributed to the <a target = "_blank" rel="noreferrer" href="https://ksk.ecell.org.in/">KIIT Startup Konclave website</a> as well as to the <a target = "_blank" rel="noreferrer" href="https://icamp.ecell.org.in/">Internship Camp</a> website by making the initial design, fixing bugs, and integrating APIs.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow "data-aos="fade-left" data-aos-duration="1000">
                            <div className="timeline-text">
                                <div className="timeline-date">Oct 2020 - Sep 2022</div>
                                <img src = {GFGKIIT} className="timeline_logo" alt = "GFG KIIT logo"/><br/><br/>
                                <h2 style={{fontFamily: "Ubuntu"}}>React and NEXT Developer</h2>
                                <h4 style={{fontFamily: "Ubuntu"}}>GeeksForGeeks KIIT</h4>
                                <p style={{fontFamily: "Ubuntu"}}>
                                    Developed responsive Landing and Projects pages using React JS and recently, I revamped its Home and Event pages with Next JS to improve image optimization, load speed, and SEO.
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