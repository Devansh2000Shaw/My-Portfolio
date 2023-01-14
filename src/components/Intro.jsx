import React, {useEffect} from 'react';
import '../assets/css/Intro.css';
import Aos from 'aos';
import "aos/dist/aos.css"
// import myself from '../assets/img/myself.jpeg';
// import Image from '../assets/img/Image.png';
// import Myself from '../assets/img/Myself1-removebg.png';
import myself from '../assets/img/Programming.gif';
import Image from '../assets/img/Version control.gif';
import Myself from '../assets/img/Developer activity.gif';

function Intro()
{
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, [])
    return(
        <div  id = "intro">
            <p class="why" style={{fontFamily: "Ubuntu"}}> .about() </p>
            <br /><br />
            
            <section class="tours spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-lg-1" data-aos="fade-right">
                            <div class="tours__item__text">
                                {/* <h2 style={{color: "#EAA023"}}>Your daily meal plan</h2> */}
                                <div class="tours__text__desc">
                                    <p style={{color: "white", textAlign: "left", marginLeft: "10px", fontSize: "20px"}} className="intro_text">
                                        I’m Devansh, a Final year B.Tech CSE, undergraduate student at Kalinga Institute of Industrial Technology, BBSR, India.
                                         🎓 I'm a passionate full-stack web developer and a competitive coder. If I talk about my professional experience, I've interned at a couple of reputed firms and have indepth knowledge about developing products..
                                          Apart from this, I love being part of different communities and engaging myself in different community works.
                                           Some of the technologies and tools used by me include <span></span><span style={{color: "rgb(59, 216, 245)"}}>ReactJS</span>,
                                             <span></span><span> Next.js</span>,  <span></span><span style={{color: "rgb(255, 166, 17)"}}> Firebase</span>,
                                               <span></span><span style={{color: "rgb(118, 74, 188)"}}> Redux</span>, 
                                                 <span></span><span style={{color: "rgb(60, 135, 58)"}}> NodeJS</span>, 
                                                   <span></span><span style={{color: "rgb(243, 79, 41)"}}> Git .</span>
                                    </p>
                                </div>
                                {/* <a href="#" className="primary-btn border-btn" style={{color: "white", textAlign: "left"}}>Read More</a> */}
                            </div>
                        </div>
                    <div className="col-lg-6 order-lg-2" data-aos="fade-left">
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
                                        <h5> </h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image} height="500px" width="150px" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5> </h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={myself} height="500px" width="150px" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5> </h5>
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