import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import '../assets/css/Projects.css';
import img1 from '../assets/img/img2.png';
import MP from '../assets/img/MusicPlayer.png';
import img2 from '../assets/img/ma_logo.png';
import prog from '../assets/img/todo.png';
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
    useEffect( ()=>{
        Aos.init({duration: 2000});
    }, [])
    return(
        <div id = "project" style = {{marginBottom: "-20px"}}>
            <p className = "why" style={{fontFamily: "Ubuntu", marginLeft: "-2%"}}>.projects()</p>
            <div className="slogan_project" >
                    <h2>Projects I have</h2>
                    <h2>done in the past</h2>
            </div>
            <div className="row">
                <div className="image1"  id = "click1" data-aos="zoom-in">
                    <img alt="images" src={img1} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image2" data-aos="zoom-in">
                    <img alt="images" src={img2} onClick={displayFlex2} className="image2" />
                </div>
                <div className="image3" data-aos="zoom-in">
                    <img alt="images" src={MP} onClick={displayFlex3} className="image3" />
                </div>
                <div className="image4" data-aos="zoom-in">
                    <img alt="images" src={prog} onClick={displayFlex4} className="image4" />
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
                <div className="bg-modal2">
                    <div class="modal-content2">
                        <div id="popup_top_image2">
                            <div className="cross">
                                <div className="list-item" onClick={displayNone2} ><img alt="images" src={cross} className="fa-times"/></div>
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
                        <div id="popup_top_image3">
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
                <div className="bg-modal4">
                    <div class="modal-content4">
                        <div id="popup_top_image4">
                            <div className="cross">
                                <div className="list-item" onClick={displayNone4} ><img alt="images" src={cross} className="fa-times"/></div>
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