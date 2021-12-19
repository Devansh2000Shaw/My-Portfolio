import React from 'react';
import '../assets/css/Navigation.css';

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "MERN Developer.", "Programmer.", "Flutter Developer.", "Open source Contributor.", "Data Science Enthusiast.", ""];
    function typeWriter(text, i, fnCallback) {

      if (i < (text.length)) {
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
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

function Navigation()
{
    return(
        <div className = "Home" id = "Hero">
            <nav>
                <input type="checkbox" id = "check"/>
                <label for = "check" class="checkbtn">
                    <i class="fa fa-bars"></i>
                </label>
                <label class = "logo">Design Portfolio</label>
                <ul>
                    <li><a class = "active" href="#" >HOME</a></li>
                    <li><a href="#Whyme" >WHY ME?</a></li>
                    <li><a href="#tech_tool" >SKILLS</a></li>
                    <li><a href="#project" >PROJECT</a></li>
                    <li><a href="#recommendation" >RECOMMENDATIONS</a></li>
                    <li><a href="#Contact" >CONTACT</a></li>
                </ul>
                <div class = "content">
                    <p className = "Name" style = {{marginBottom: "10px"}}>Devansh Shaw</p>
                    {/* <p className = "Slogan" style = {{marginBottom: "0px"}}>I am Front End Developer.</p> */}
                    I'm a <h2>Frontend Web Developer</h2>
                    <br/>
                    <form action="#">
                    <input type = "submit" id = "submit" value = "Know More" href = "#intro"/>
                    {/* <a href = "#intro" id = "submit" class = "button">Know More</a> */}
                    <a target = "_blank" href = "https://in.docworkspace.com/d/sIHbG3PotwfzuhAY" id = "cv" class = "button">Download CV</a>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;