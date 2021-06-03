import React from 'react';
import './Contact.css';

function Contact()
{
    return(
        <div>
            <div id = "Contact">
                <p className = "why">Contact Us</p>
                {/* <br/>
                <br/>
                <center>
                    <form>
                        <input type="text" name = "fname" id = "fname" placeholder = "First Name" style= {{width: "35%", height: "40px"}} required />
                        <input type="text" name = "lname" id = "lname" placeholder = "Last Name" style= {{width: "35%", height: "40px"}} required/><br/><br/><br/>
                        <input type="text" name = "email" id = "email" placeholder = "Email Id" style= {{width: "35%", height: "40px"}} required/>
                        <input type="text" name = "mobile" id = "mobile" placeholder = "Contact No." style= {{width: "35%", height: "40px"}} required/><br/><br/><br/>
                        <input type="text" name = "state" id = "state" placeholder = "State" style= {{width: "35%", height: "40px"}} required/>
                        <input type="text" name = "country" id = "country" placeholder = "Country" style= {{width: "35%", height: "40px"}} required/><br/><br/><br/>
                        <input type="text" name = "subject" id = "subject" placeholder = "Subject of Contact" style= {{width: "72.5%", height: "40px"}}  required/><br/><br/><br/>
                        <input type="text" name = "subject" id = "question" placeholder = "Your Question" style= {{width: "72.5%", height: "40px"}} required/><br/>
                        <br/>
                        <br/>
                        <input type="button" name = "button" id = "btn" value="Submit" onclick = "AddRow()"/>
                    </form>
                </center> */}
            </div>
            {/* <div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-4"></div>
                                <div class="col-md-8">
                                    <div class="contact-form">
                                        <div id="success"></div>
                                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                            <div class="control-group">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                                <p class="help-block"></p>
                                            </div>
                                            <div class="control-group">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                                <p class="help-block"></p>
                                            </div>
                                            <div class="control-group">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                                <p class="help-block"></p>
                                            </div>
                                            <div class="control-group">
                                                <textarea class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                                <p class="help-block"></p>
                                            </div>
                                            <div>
                                                <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> */}

<div id="contact" class="contact-us section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s" style={{marginTop: "-125px"}}>
              <p className = "foot">About</p>
              <p style = {{color: "white", textAlign: "center",paddingBottom: "20px"}}>A passionate and self-motivated individual, enthusiastically keen to learn and explore. </p>
              <div class="footer-item footer-contact">
                    <p style = {{fontSize: "18.72px"}}>CONTACT  ME</p>
                    <p style = {{marginBottom: "0px"}}><i class="fa fa-map-marker" aria-hidden="true"></i> Kolkata, India</p>
                    <p style = {{marginBottom: "0px"}}><i class="fa fa-envelope" aria-hidden="true"></i> akashshaw8783@gmail.com</p>
                    <p style = {{marginBottom: "0px"}}><i class="fa fa-phone" aria-hidden="true"></i> +91 6290502415</p>
                    <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://instagram.com/shaw_devansh?igshid=1x3vs6w81h27i"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://github.com/Devansh2000Shaw"><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href="tel:6290502415"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                </div>
                <div class="footer-item footer-more">
                    <p style = {{fontSize: "20px", margin: "0px"}}>© Devansh Shaw <hr/> Made with ❤️ using 🖌️ Html, CSS &amp; Reactjs💻 </p>
                </div>
            </div>
            <div class="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s" style={{marginTop: "20px"}}>
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required/>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button ">Send Message</button>
                    </fieldset>
                  </div>
                </div>
                <div class="contact-dec">
                  <img src="assets/images/contact-decoration.png" alt=""/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


        </div>
    );
}

export default Contact;