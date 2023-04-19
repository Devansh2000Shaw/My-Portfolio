import React from 'react';
import '../assets/css/Navigation.css';

window.onload = function() {
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "MERN Developer.", "Programmer.", "Open source Contributor.", ""];
    function typeWriter(text, i, fnCallback) {

      if (i < (text.length)) {
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<em aria-hidden="true"></em>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }

    StartTextAnimation(0);
  });
}
function Navigation()
{
    return(
        <div className = "Home" id = "Hero">
            <nav>
                {/* <input type="checkbox" id = "check"/>
                <label for = "check" class="checkbtn">
                    <i class="fa fa-bars"></i>
                </label> */}
                <label class = "logo">DS</label>
                <ul>
                    <li><a class = "active" href="#Hero">HOME</a></li>
                    <li><a href="#Whyme">WHY ME?</a></li>
                    <li><a href="#tech_tool">SKILLS</a></li>
                    <li><a href="#experiences">EXPERIENCE</a></li>
                    <li><a href="#project">PROJECT</a></li>
                    <li><a href="#Contact">CONTACT</a></li>
                </ul>
                <div class = "content">
                    <p className = "Name" style = {{marginBottom: "10px"}}>Devansh Shaw</p>
                    {/* <p className = "Slogan" style = {{marginBottom: "0px"}}>I am Front End Developer.</p> */}
                    <span style={{fontFamily: "cursive", fontSize: "20px"}}>I'm a </span> <h2 style={{fontFamily: "Ubuntu"}}>Full-Stack Web Developer</h2>
                    <br/>
                    <form action="#">
                    <input type = "submit" id = "submit" value = "Know More" href = "#intro"/>
                    <a target = "_blank" href = "https://in.docworkspace.com/d/sIHbG3PotwfzuhAY" id = "cv" rel="noreferrer">Download CV</a>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;