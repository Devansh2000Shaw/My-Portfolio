import React from 'react';
import '../assets/css/Projects.css';
import img1 from '../assets/img/img 1.jpeg';
import img3 from '../assets/img/img 3.jpeg';
import cross from '../assets/img/cross.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import github from '../assets/img/github.png';
import react from '../assets/img/react.png';
import javascript from '../assets/img/javaScript.png';
import python from '../assets/img/phython.png';

function displayFlex1()
            {
                document.querySelector('.bg-modal1').style.display = 'flex';
            }
            function displayFlex2()
            {
                document.querySelector('.bg-modal2').style.display = 'flex';
            }
            function displayFlex3()
            {
                document.querySelector('.bg-modal3').style.display = 'flex';
            }
            function displayFlex4()
            {
                document.querySelector('.bg-modal4').style.display = 'flex';
            }
            function displayNone1()
            {
                document.querySelector('.bg-modal1').style.display = 'none';
            }
            function displayNone2()
            {
                document.querySelector('.bg-modal2').style.display = 'none';
            }
            function displayNone3()
            {
                document.querySelector('.bg-modal3').style.display = 'none';
            }
            function displayNone4()
            {
                document.querySelector('.bg-modal4').style.display = 'none';
            }

function Project()
{
    return(
        <div id = "project" style = {{marginBottom: "-20px"}}>
            <p className = "why">Projects</p>
            {/* <div class="card mb-3" style={{width: "96%", marginLeft: "2%", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", backgroundColor: "black", color: "white"}}>
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="1.jpg" alt = "" style = {{marginLeft: "20px", marginRight: "20px", width: "300px", height: "200px", alt: "Random"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h3 class="card-title">My Experience</h3>
                    <p class="card-text">I had amazing learning experinece with 30 Days of Web-Development,Entire Team was Very Helpful and Supportive.</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="card mb-3" style={{width: "96%", marginLeft: "2%", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", backgroundColor: "black", color: "white"}}>
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="4.jpg" alt = "" style = {{marginLeft: "20px", marginRight: "20px", width: "300px", height: "200px", alt: "Random"}}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h3 class="card-title">About Members and Community</h3>
                    <p class="card-text"> 30 Days of Web Development was really helpful !! I have learned a lot through this program,I grasped new concepts and enjoyed this learning journey a lot.I got to see the practical applications of web-development,am really looking forward to apply these learnings in the near future.
                    </p>
                    </div>
                </div>
                </div>
            </div> */}
            <div className="row">
                <div className="image1 animate__animated animate__backInUp"  id = "click1">
                    <img alt="images" src={img1} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image3 animate__animated animate__backInRight">
                    <img alt="images" src={img3} onClick={displayFlex3} className="image3" />
                </div>
            </div>
                {/* <!-- POPUP --> */}
                <div className="bg-modal1">
                    <div class="modal-content1">
                        <div id="popup_top_image1">
                            <div className="cross">
                                <div className="list-item" onClick={displayNone1} ><img alt="images" src={cross} className="fa-times"/></div>
                            </div>
                        </div>
                        <div class="popup_card">
                            <div>
                                <a href="https://github.com/GFG-CLUB-KIIT/" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://github.com/GFG-CLUB-KIIT/thegeekbot" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">The Geek Bot</div>
                            <div class="popup_card_bottom">
                                <lable class="popup_card_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={python} class="popup_card_bottom_lang_logo" title="Phython" />
                            </div>
                        </div>
                        <div class="popup-context">
                            Our App-Dev Team started working on their 1st project, the Geek Bot. It possesses a programmer’s search feature that enables the users to search various programming concepts. It also gives the list of top articles from the GeeksforGeeks website along with their respective links. Besides, it even returns the list of all ongoing coding events all around the world when called.
                        </div>
                    </div>
                </div>
                <div className="bg-modal3">
                    <div class="modal-content3">
                        <div id="popup_top_image2">
                            <div className="cross">
                                <div className="list-item" onClick={displayNone3} ><img alt="images" src={cross} className="fa-times"/></div>
                            </div>
                        </div>
                        <div class="popup_card1">
                            <div>
                                <a href="https://github.com/GFG-CLUB-KIIT/" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">GFG Website</div>
                            <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={html} class="popup_bottom_lang_logo" title="HTML" />
                                <img alt="images" src={css} class="popup_bottom_lang_logo" title="CSS" />
                                <img alt="images" src={javascript} class="popup_bottom_lang_logo" title="JavaScript" /><br/>
                            <lable class="popup_bottom_frame">Framework Used:</lable>
                                <img alt="images" src={react} class="popup_bottom_lang_logo reactlogo" title="React" />
                            </div>
                        </div>
                        <div class="popup-context">
                            Our Web-Dev Team started working on their 1st project, Geeksforgeeks KIIT Student Club Website. It possesses a programmer’s search feature that enables the users to search various programming concepts. Besides, it even returns the list of all ongoing coding events all around the world when called. It also has been administered with a profanity filter that identifies unparliamentary language by any user and purges them.
                        </div>
                    </div>
                </div>
    </div>
    );
}

export default Project;