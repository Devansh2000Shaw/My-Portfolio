import React from 'react';
import './Footer.css';

function Footer()
{
    return(
        <div className = "footer-page">
            <p className = "foot">About</p>
            <p style = {{color: "white", textAlign: "center",paddingBottom: "20px"}}>A passionate and self-motivated individual, enthusiastically keen to learn and explore. </p>
            <div class="container">
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
	    </div>
    );
}

export default Footer;