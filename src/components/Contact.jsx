import React, { useState, useEffect } from 'react';
import '../assets/css/Contact.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import my from '../assets/img/my.jpg';
import Linkedin from '../assets/img/Updated linkedin.svg';
import Github from '../assets/img/Github Updated.svg';
import Email from '../assets/img/Email Updated.svg';
import Location from '../assets/img/Revised location.svg';
import Love from '../assets/img/love.svg';
import Music from '../assets/img/mus.svg';

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

  useEffect( ()=>{
    Aos.init({duration: 2000});
  }, [])

    const d = new Date();
    const currYear = d.getFullYear();

    return(
        <div>
            <p className = "why" id = "Contact" style={{ fontFamily: "Ubuntu"}}>.contact()</p>
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
                <div className="col-lg-6 align-self-center wow" data-aos="fade-up" style={{marginTop: "-40px"}}>
                  <div className="Contact_img">
                    <img className="" src={my} alt=""/>
                  </div>
                  <br/><br/>
                  <div className="footer-item footer-contact">
                        <p style = {{marginBottom: "0px", color: "white", fontSize: "22px", fontFamily: "Ubuntu", fontWeight: "500"}}><img src = {Location} height="30px" width="30px" /> <span style={{paddingLeft:"10px"}}> Kolkata, India </span></p><br/>
                        <a href="mailto:akashshaw8783@gmail.com" style = {{marginBottom: "0px", color: "white", fontSize: "22px", fontFamily: "Ubuntu", fontWeight: "500"}}><img src = {Email} height="30px" width="30px"/> <span style={{paddingLeft:"10px"}}> akashshaw8783@gmail.com </span></a><br/>
                        {/* <p style = {{marginBottom: "0px", color: "white", fontSize: "16px"}}><i className="fa fa-phone" aria-hidden="true"></i> +91 6290502415</p><br/> */}
                        <br/>
                        <a href="https://www.linkedin.com/in/devansh-shaw"><img src = {Linkedin} height="65px" width="65px"/></a>
                        <span style={{paddingLeft: "20px"}}></span>
                        <a href="https://github.com/Devansh2000Shaw"><img src = {Github} height="45px" width="45px" /></a>
                        <p style = {{fontSize: "20px", textAlign: "center", marginTop: "20px", fontFamily: "Ubuntu", color: "white"}}> Copyright © {currYear} | All Rights Reserved <hr /> Made with <img src = {Love} height="40px" width="40px" />  and <img src = {Music} height="40px" width="40px" /> by Devansh Shaw</p>

                        {/* <a href="tel:6290502415"><i className="fa fa-whatsapp" aria-hidden="true"></i></a> */}
                    </div>
                </div><br /><br/>
                <div className="col-lg-6 wow" data-aos="fade-up" style={{marginTop: "20px"}}>
                  <p style={{textAlign: "center", color: 'white', fontFamily: "Ubuntu", fontSize: "25px"}}>Hit me Up</p><br/>
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