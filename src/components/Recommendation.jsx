import React from 'react';

function Developer()
{
    return(
        <div id="recommendation">
            <p style = {{marginBottom: "50px", marginTop: "600px", fontFamily: "Ubuntu"}} className = "skill" >.recommendations()</p>
            <div className="container" style = {{marginTop: "100px", backgroundColor: "black"}}>
                
            </div>
            <div class="row" style = {{textAlign: "center", backgroundColor: "black"}}>
                <div class="col-sm-4">
                    <div class="card" style = {{backgroundColor: "black"}}>
                    <div class="card-body">
                        <img src="5.jpg" alt="" width="140px" height="140px" style = {{borderRadius: "50%", border: "5px solid #2f363e"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px", color: "white",}}>Abhishek Raj</p>
                        <p class="card-text" style = {{color: "#24CAAC"}}>Backend and API</p>
                        <a href="https://www.linkedin.com/in/jrabhishek/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/__abhishekraj/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/jrabhishek"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very proficient in his design skills and innovative thinking capabilities makes him ever better from others.
                            Keep working on things untill they gets perfect and his team working abilities are also key points.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" style = {{backgroundColor: "black"}}>
                    <div class="card-body">
                        <img src="7.jpg" alt="" width="140px" height="140px" style = {{borderRadius: "50%", border: "5px solid #2f363e"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px", color: "white"}}>Ria Singh</p>
                        <p class="card-text" style = {{color: "#24CAAC"}}>Backend and API</p>
                        <a href="https://www.linkedin.com/in/ria-singh-a401aa192"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://github.com/RiaSingh2000"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is very passionate about his Web Development skills. He is very innovative and creative person.
                            He is a calm minded person who takes his responsibilities seriously and completes them before time.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" style = {{backgroundColor: "black"}}>
                    <div class="card-body">
                        <img src="zzz.jpg" alt="" width="140px" height="140px" style = {{borderRadius: "50%", border: "5px solid #2f363e"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px", color: "white"}}>Muskan Gupta</p>
                        <p class="card-text" style = {{color: "#24CAAC"}}>Frontend Developer</p>
                        <a href="https://www.linkedin.com/in/muskan-gupta-648a47183"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/_.im_happiness._"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/guptamuskan988"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <p style = {{color: "white"}}> <i class="fa fa-quote-left" aria-hidden="true" style = {{color: "#EAA023", marginRight: "5px"}}></i>
                            Devansh is an ingenious boy. He is amazing in front-end Web development.
                            He knows when to be calm and when to be tough according to the situation which makes him different.
                            Keep up your good work and stay positive like this.
                            <i class="fa fa-quote-right" aria-hidden="true" style = {{color: "#EAA023", marginLeft: "5px"}}></i>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            {/* <div class="row" style = {{textAlign: "center", marginTop: "100px"}}>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Aarushi Shanker.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Aarushi Shanker</p>
                        <p class="card-text">React Developer</p>
                        <a href="https://www.linkedin.com/in/aarushi-shanker-0b19181a5/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/__aarushiiiii/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/aarushi31"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Devansh Shaw.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Devansh Shaw</p>
                        <p class="card-text">Frontend Developer</p>
                        <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://github.com/Devansh2000Shaw"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" style = {{marginTop: "100px"}}>
                    <div className="col-sm-8 col-sm-offset-2 mb-100 text-center">
                    <h1 className="title">App Developers</h1>
                    {/* <p className="title-lead mt-10">
                        We are bringing you the perfect combination of content and
                        experience to ignite your <br />
                        heart equip your mind and spark your skill.
                    </p>
                    </div>
                </div>
            </div>
            <div class="row" style = {{textAlign: "center"}}>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Sumit Kumar Sahoo.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Sumit Kumar Sahu</p>
                        <p class="card-text">Flutter Developer</p>
                        <a href="https://www.linkedin.com/in/sumit-kumar-sahu-b97675196/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/sumit_ku_sahu_/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/SumitKuSahu"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Ritik Shah.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Ritik Shah</p>
                        <p class="card-text">Flutter Developer</p>
                        <a href="https://www.instagram.com/ritik.__.shah/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/ritik-1302"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Arnab Dan.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Arnab Dan</p>
                        <p class="card-text">Cloud</p>
                        <a href="https://www.linkedin.com/in/arnab-dan-a1a07b204/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/dan_arnab/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/arnab8335"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row" style = {{textAlign: "center", marginTop: "100px", marginBottom: "100px"}}>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Avik Kundu.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Avik Kundu</p>
                        <p class="card-text">Cloud</p>
                        <a href="https://www.linkedin.com/in/avik-kundu-0b837715b"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/avik6028"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/Lucifergene/"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Ayush Raj.jpeg" alt="" width="140px" height="140px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Ayush Raj</p>
                        <p class="card-text">Native App Developer</p>
                        <a href="www.linkedin.com/in/ayustark/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://instagram.com/ayustark1435"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="www.github.com/AYUSTARK"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <img src="img/other/Pranab Das.jpeg" alt="" width="140px" height="10px" style = {{borderRadius: "50%"}}/> <br/><br/>
                        <p class="card-title" style = {{fontSize: "25px"}}>Pranab Das</p>
                        <p class="card-text">Native App Developer</p>
                        <a href="https://www.linkedin.com/in/pranab-das-75982918a/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/pranab.das_/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://github.com/pranab99"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div> 
                </div>*/}
        </div>
    );
}

export default Developer;