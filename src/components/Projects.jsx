import React from 'react';
import img from './skill4.png';
// import './assets/css/Projects.css';

function Recommendation()
{
    return(
        <div id = "Projects" style = {{marginBottom: "100px"}}>
                <p className = "why">Projects</p>
                {/* <br/>
                <br/>
                <br/> */}
                
                <div className="row">
                    <div className="col"  style = {{marginLeft: "2.5%", color: "white", backgroundColor: "black"}}>
                    <div className="card" style = {{backgroundColor: "black"}}>
                        <img src="img 1.jpeg" style = {{height: "163px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">GITHUB</h5>
                        <p className="card-text">Learnt github by actually performing git clone, fetching files, making some changes 
                            and merging them with remote code. Learnt about commands like push, pull, branching, status.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col" style = {{color: "white", backgroundColor: "black"}}>
                    <div className="card" style = {{backgroundColor: "black"}}>
                        <img src="img 2.jpeg" style = {{height: "163px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">HTML & CSS</h5>
                        <p className="card-text">Have You ever wondered, a site without HTML & CSS. Well I know the answer is no,because
                            As we know that HTML provides the structure of the page, CSS provides (visual and aural) layout.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col" style = {{color: "white"}}>
                    <div className="card" style = {{backgroundColor: "black"}}>
                        <img src="img 3.jpeg" style = {{height: "163px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">JAVASCRIPT</h5>
                        <p className="card-text">You can’t hate Javascript, there is no reason to hate or ignore Javascript, You can only love JavaScript
                            because it is really easy to use and we can do amazing stuffs with Javascript.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col" style = {{marginRight: "1.5%", color: "white", backgroundColor: "black"}}>
                    <div class="card" style = {{backgroundColor: "black"}}>
                        <img src="img 4.jpeg" style = {{height: "163px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">FIREBASE</h5>
                        <p className="card-text">Got to know about how to deploy your website using firebase console. Here we deployed
                            our personal portfolio which can be accessed by anyone using the link.
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Recommendation;