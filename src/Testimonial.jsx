import React from 'react';
import './Testimonial.css';
// import './Recommendation.css'
// import $ from 'jquery';


function Testimonial(){
    return(
        <div id="recommendation">
            <p style = {{marginBottom: "50px"}} class = "skill" >Recommendations</p>
            <div>
                <img src="https://i.imgur.com/gZ5HY0U.png" class="img-responsive quote-image"/>
            </div>
            {/* Carousel Start below */}
            <div id="carousel1" class="carousel slide testimonial-style" data-ride="carousel">
              {/* Indicators */}
                <ol class="carousel-indicators">
                  <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel1" data-slide-to="1"></li>
                  <li data-target="#carousel1" data-slide-to="2"></li>
                </ol>
              {/* Wrapper for slides */}
              <div class="carousel-inner">
                <div class="item active">
                  <div class="carousel-caption testimonial-caption-style">
                    <div class="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img class="" src="comment_2.png" alt="First slide" style={{textAlign: "center"}}/>
                    </div>
                    <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very proficient in his design skills and innovative thinking capabilities makes him ever better from others.
                            Keep working on things untill they gets perfect and his team working abilities are also key points.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                    </p>
                    <p class="testimonial-authors">Person 1</p>
                    <a href="https://www.linkedin.com/in/jrabhishek/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i class="fa fa-github" aria-hidden="true"></i></a>
                  </div><br />
                </div>
                <div class="item">
                  <div class="carousel-caption testimonial-caption-style">
                    <div class="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img class="" src="comment_1.png" alt="First slide" style={{textAlign: "center"}}/>
                      </div>
                      <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very passionate about his Web Development skills. He is very innovative and creative person.
                            He is a calm minded person who takes his responsibilities seriously and completes them before time.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                      </p>
                    <p class="testimonial-authors">Person 2</p>
                    <a href="https://www.linkedin.com/in/jrabhishek/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i class="fa fa-github" aria-hidden="true"></i></a>
                  </div><br />
                </div>
                <div class="item">
                  <div class="carousel-caption testimonial-caption-style">
                    <div class="carousel-testimonial-img p-1 rounded-circle m-auto">
                        <img class="" src="comment_3.png" alt="First slide" style={{textAlign: "center"}}/>
                      </div>
                      <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is an ingenious boy. He is amazing in front-end Web development.
                            He knows when to be calm and when to be tough according to the situation which makes him different.
                            Keep up your good work and stay positive like this.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                      </p>
                    <p class="testimonial-authors">Person 3</p>
                    <a href="https://www.linkedin.com/in/jrabhishek/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/__abhishekraj/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/jrabhishek"><i class="fa fa-github" aria-hidden="true"></i></a>
                  </div><br />
                </div>
              </div>
          
              {/* Controls */}
              <br/><br/>
              <a class="left carousel-control" href="#carousel1" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
              <a class="right carousel-control" href="#carousel1" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
            </div>
    </div>
    );
}

export default Testimonial;