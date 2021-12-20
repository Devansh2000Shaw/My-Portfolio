import React from 'react';
import comment_1 from '../assets/img/comment_1.png';
import comment_2 from '../assets/img/comment_2.png';
import comment_3 from '../assets/img/comment_3.png';
import '../assets/css/Testimonial.css';
// import './assets/css/Recommendation.css';


function Testimonial(){
    return(
        <div id="recommendation">
            <p style = {{marginBottom: "50px"}} className = "skill" >Recommendations</p>
            <div>
                <img src="https://i.imgur.com/gZ5HY0U.png" className="img-responsive quote-image"/>
            </div>
            {/* Carousel Start below */}
            <div id="carousel1" className="carousel slide testimonial-style" data-ride="carousel">
              {/* Indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel1" data-slide-to="1"></li>
                  <li data-target="#carousel1" data-slide-to="2"></li>
                </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <div className="carousel-caption testimonial-caption-style">
                    <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img className="" src={comment_2} alt="First slide" style={{textAlign: "center"}}/>
                    </div>
                    <p style = {{color: "white", marginTop: "50px"}}> <i className="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very proficient in his design skills and innovative thinking capabilities makes him ever better from others.
                            Keep working on things untill they gets perfect and his team working abilities are also key points.
                            <i className="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                    </p>
                    <p className="testimonial-authors">Person 1</p>
                    {/* <a href="https://www.linkedin.com/in/jrabhishek/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i className="fa fa-github" aria-hidden="true"></i></a> */}
                  </div><br />
                </div>
                <div className="item">
                  <div className="carousel-caption testimonial-caption-style">
                    <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img className="" src={comment_1} alt="First slide" style={{textAlign: "center"}}/>
                      </div>
                      <p style = {{color: "white", marginTop: "50px"}}> <i className="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very passionate about his Web Development skills. He is very innovative and creative person.
                            He is a calm minded person who takes his responsibilities seriously and completes them before time.
                            <i className="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                      </p>
                    <p className="testimonial-authors">Person 2</p>
                    {/* <a href="https://www.linkedin.com/in/jrabhishek/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i className="fa fa-github" aria-hidden="true"></i></a> */}
                  </div><br />
                </div>
                <div className="item">
                  <div className="carousel-caption testimonial-caption-style">
                    <div className="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img className="" src={comment_3} alt="First slide" style={{textAlign: "center"}}/>
                      </div>
                      <p style = {{color: "white", marginTop: "50px"}}> <i className="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is an ingenious boy. He is amazing in front-end Web development.
                            He knows when to be calm and when to be tough according to the situation which makes him different.
                            Keep up your good work and stay positive like this.
                            <i className="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                      </p>
                    <p className="testimonial-authors">Person 3</p>
                    {/* <a href="https://www.linkedin.com/in/jrabhishek/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i className="fa fa-github" aria-hidden="true"></i></a> */}
                  </div><br />
                </div>
              </div>
          
              {/* Controls */}
              <br/><br/>
              <a className="left carousel-control" href="#carousel1" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"></span> </a>
              <a className="right carousel-control" href="#carousel1" data-slide="next"> <span className="glyphicon glyphicon-chevron-right"></span> </a>
            </div>
        </div>
    );
}

export default Testimonial;