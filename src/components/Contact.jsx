import React, { useState } from 'react';
import '../assets/css/Contact.css';

function displayFlex5()
{
    document.querySelector('.bg-modal5').style.display = 'flex';
}

function Contact()
{
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Message:''
  });

  let name, value;
  const handleForm = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({...data, [name]:value})
  }

  // Fetch Api

  const PostData = async (e) => {
    e.preventDefault();
    const { FirstName, LastName, Email, Message } = data;
    const res = await fetch("/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName, LastName, Email, Message
      })
    });

    const info = await res.json();

    // if(info.stat)
  }

    return(
        <div>
            <p className = "why" id = "Contact" style={{marginTop: "15px", marginBottom: "-50px"}}>.contact()</p>
            {/* <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-4"></div>
                                <div className="col-md-8">
                                    <div className="contact-form">
                                        <div id="success"></div>
                                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                            <div className="control-group">
                                                <input type="text" className="form-control" id="name" onChange={handleForm} value = {data.FirstName} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                                <p className="help-block"></p>
                                            </div>
                                            <div className="control-group">
                                                <input type="email" className="form-control" id="email" onChange={handleForm} value = {data.FirstName} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                                <p className="help-block"></p>
                                            </div>
                                            <div className="control-group">
                                                <input type="text" className="form-control" id="subject" onChange={handleForm} value = {data.FirstName} placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                                <p className="help-block"></p>
                                            </div>
                                            <div className="control-group">
                                                <textarea className="form-control" id="message" onChange={handleForm} value = {data.FirstName} placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                                <p className="help-block"></p>
                                            </div>
                                            <div>
                                                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> */}
        <div className="bg-modal5">
                    <div class="modal-content5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 mx-auto mt-5">
                                    <div class="payment">
                                        <div class="payment_header">
                                            <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                                        </div>
                                        <div class="popup_content">
                                            <h1>Payment Successful!!</h1>
                                            <p> You have been successfully registered for Internship Camp.</p><br/>
                                            <a className = "popup_button"href="/">Go to Home</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s" style={{marginTop: "-40px"}}>
              {/* <p className = "foot" style = {{fontSize: "20px", color: "#24acac", textAlign: "center"}}>ABOUT</p>
              <p style = {{color: "white", textAlign: "center",paddingBottom: "20px", fontSize: "18px"}}>A passionate and self-motivated individual, enthusiastically keen to learn and explore. </p> */}
              <div className="footer-item footer-contact">
                    {/* <p style = {{fontSize: "20px", color: "#24acac"}}>CONTACT  ME</p> */}
                    <p style = {{marginBottom: "0px", color: "white", fontSize: "18px", fontFamily: "Ubuntu", fontWeight: "500"}}><i className="fa fa-map-marker" aria-hidden="true"></i> Kolkata, India</p>
                    <p style = {{marginBottom: "0px", color: "white", fontSize: "18px"}}><i className="fa fa-envelope" aria-hidden="true"></i> akashshaw8783@gmail.com</p>
                    {/* <p style = {{marginBottom: "0px", color: "white", fontSize: "16px"}}><i className="fa fa-phone" aria-hidden="true"></i> +91 6290502415</p><br/> */}
                    <a href="https://www.linkedin.com/in/devansh-shaw"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    {/* <a href="https://instagram.com/shaw_devansh?igshid=1x3vs6w81h27i"><i className="fa fa-instagram" aria-hidden="true"></i></a> */}
                    <a href="https://github.com/Devansh2000Shaw"><i className="fa fa-github" aria-hidden="true"></i></a>
                    {/* <a href="tel:6290502415"><i className="fa fa-whatsapp" aria-hidden="true"></i></a> */}
                </div>
                <div className="footer-item footer-more made" >
                    <p style = {{fontSize: "20px", textAlign: "center", marginTop: "20px",  color: "white"}}>© Made by Devansh Shaw | All Rights Reserved<hr /> Made with ❤️ using 🖌️ Html, CSS &amp; Reactjs💻 </p>
                </div>
            </div><br /><br/>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s" style={{marginTop: "20px"}}>
              <form id="contact" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input type="name" name="FirstName" id="name" onChange={handleForm} value = {data.FirstName} placeholder="Name" autocomplete="on" required/>
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input type="surname" name="LastName" id="surname" onChange={handleForm} value = {data.LastName} placeholder="Surname" autocomplete="on" required/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input type="text" name="Email" id="email" pattern="[^ @]*@[^ @]*" onChange={handleForm} value = {data.Email} placeholder="Your Email" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="Message" type="text" className="form-control" id="message" onChange={handleForm} value = {data.Message} placeholder="Message" required=""></textarea>  
                    </fieldset>
                  </div>
                  <div className="col-lg-12" style={{textAlign: "center", marginTop: "10px"}}>
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button " onClick={PostData}>Send Message</button>
                    </fieldset>
                  </div>
                </div>
                <div className="contact-dec">
                  <img src="assets/images/contact-decoration.png" alt=""/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll up button */}
      <div id="back-top" >
          <a title="Go to Top" href="#Hero"><i class="fa fa-angle-double-up"></i></a>
      </div>

        </div>
    );
}

export default Contact;