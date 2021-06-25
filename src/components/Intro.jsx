import React from 'react';
import '../assets/css/Intro.css';
// import myself from '../assets/img/myself.jpeg';
// import Image from '../assets/img/Image.png';
// import Myself from '../assets/img/Myself1-removebg.png';
import myself from '../assets/img/Programming.gif';
import Image from '../assets/img/Version control.gif';
import Myself from '../assets/img/Developer activity.gif';

function Intro()
{
    return(
        <div  id = "intro">
            <p class="why"> Intro </p>
            {/* <div class = "intro">
                <img src="image.png" class = "myself" alt="Myself"/>
                <p class = "description">I am Devansh Shaw. Currently, I am pursuing Computer Science Engineering(CSE) from Kalinga Institute of Industrial Technology. 
                I am skilled in SQL, C++, Cascading Style Sheets (CSS), C (Programming Language), Javascript and HTML.
                Strong operations professional with a Bachelor's degree focused in Computer Science from Kalinga Institute 
                of Industrial Technology. Front Web Designer at Kindle Coding club. Used HTML, CSS, Javascript programming languages and react js
                library to create effective website landing pages, dashboards and applications.</p>
            </div> */}
            
            <section class="tours spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-lg-1 animate__animated animate__slideInLeft">
                            <div class="tours__item__text">
                                <h2 style={{color: "#EAA023"}}>Your daily meal plan</h2>
                                <div class="tours__text__desc">
                                    <p style={{color: "white", fontFamily: "sans-serif", fontSize: "16px", textAlign: "left", marginLeft: "10px"}}>I am Devansh Shaw. Currently, I am pursuing Computer Science Engineering(CSE) from Kalinga Institute of Industrial Technology. 
                                    I am skilled in SQL, C++, Cascading Style Sheets (CSS), C (Programming Language), Javascript and HTML.
                                    Strong operations professional with a Bachelor's degree focused in Computer Science from Kalinga Institute 
                                    of Industrial Technology. Front Web Designer at Kindle Coding club. Used HTML, CSS, Javascript programming languages and react js
                                    library to create effective website landing pages, dashboards and applications.</p>
                                </div>
                                <a href="#" class="primary-btn border-btn" style={{color: "white", textAlign: "left"}}>Read More</a>
                            </div>
                        </div>
                    <div className="col-lg-6 order-lg-2 animate__animated animate__slideInRight">
                        <div className="tours__item__pic">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Myself} height="500px" width="150px" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image} height="500px" width="150px" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={myself} height="500px" width="150px" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Intro;