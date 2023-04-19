import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import '../assets/css/Projects.css';
import img1 from '../assets/img/img2.png';
import IM from '../assets/img/HRC_1.jpeg';
import img2 from '../assets/img/ma_logo.png';
import prog from '../assets/img/todo.png';
import cross from '../assets/img/cross.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import github from '../assets/img/github.png';
import react from '../assets/img/react.png';
import javascript from '../assets/img/javaScript.png';
import python from '../assets/img/phython.png';
import JAVA from "../assets/icons/Java.png";
import JQUERY from "../assets/icons/jquery.webp";
import EXPRESS from "../assets/icons/expressjs1.png";

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
                    <img alt="images" src={IM} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image2" data-aos="zoom-in">
                    <img alt="images" src={img1} onClick={displayFlex2} className="image2" />
                </div>
                <div className="image3" data-aos="zoom-in">
                    <img alt="images" src={img2} onClick={displayFlex3} className="image3" />
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
                            
                            <div id="popup_card_project_title">Invoice Management Application</div>
                            <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={javascript} class="popup_bottom_lang_logo" title="JavaScript" />
                                <img alt="images" src={python} class="popup_bottom_lang_logo" title="Python" />
                                <img alt="images" src={JAVA} class="popup_bottom_lang_logo" title="Java" />
                            <lable class="popup_bottom_frame">Framework Used:</lable>
                                <img alt="images" src={react} class="popup_bottom_lang_logo reactlogo" title="React" />
                            </div>
                        </div>
                        <div class="popup-context">
                            Developed an ML model to predict the payment date of an invoice. Achieved accuracy of 77% using Random Forest Regression.
                            Built a full-stack Invoice Management Application React web app that allows users to perform CRUD operations on Invoices. Users can perform search and advance searches on invoices. Built back-end using Java, JDBC, Servlets, and MySQL to show invoices on React web.
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
                                <a href="" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://hotel-manage.netlify.app/" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">Crowne Plaza</div>
                            <div class="popup_card_bottom">
                                <lable class="popup_card_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={javascript} class="popup_card_bottom_lang_logo" title="JavaScript" />
                                <img alt="images" src={react} class="popup_card_bottom_lang_logo" title="React" />
                                <img alt="images" src={EXPRESS} class="popup_card_bottom_lang_logo" title="Express JS" />
                            </div>
                        </div>
                        <div class="popup-context">
                            It is a website with options for ordering food, booking tables & renting rooms. It uses JWT authentication and Bcrypt hashing algorithm for secured login. 
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
                                <a href="https://github.com/Devansh2000Shaw/Mental-Awarness" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://devansh2000shaw.github.io/Mental-Awarness/" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">Mentify</div>
                            <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={html} class="popup_bottom_lang_logo" title="HTML" />
                                <img alt="images" src={css} class="popup_bottom_lang_logo" title="CSS" />
                                <img alt="images" src={javascript} class="popup_bottom_lang_logo" title="JavaScript" /><br/>
                            <lable class="popup_bottom_frame">Framework Used:</lable>
                                <img alt="images" src={react} class="popup_bottom_lang_logo reactlogo" title="React" />
                                <img alt="images" src={JQUERY} class="popup_bottom_lang_logo reactlogo" title="Jquery" />
                            </div>
                        </div>
                        <div class="popup-context">
                        It's a website dedicated to assisting those who are mentally. It includes a section on identifying symptoms, prognostic procedures & allows users to consult doctors as well as read, music, and food recommendations.
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
                            <div id="popup_card_project_title">Todo App</div>
                            <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={html} class="popup_bottom_lang_logo" title="HTML" />
                                <img alt="images" src={css} class="popup_bottom_lang_logo" title="CSS" />
                                <img alt="images" src={javascript} class="popup_bottom_lang_logo" title="JavaScript" /><br/>
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