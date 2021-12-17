import React from 'react';
import C from '../assets/icons/C.webp';
import CPLUS from '../assets/icons/C++.png';
import JAVA from '../assets/icons/Java.jpg';
import PYTHON from '../assets/icons/Pthon.png';
import HTML from '../assets/icons/html.png';
import CSS from '../assets/icons/css.png';
import SASS from '../assets/icons/sass.png';
import BOOTSTRAP from '../assets/icons/bootstrap.png';
import JAVASCRIPT from '../assets/icons/javaScript.png';
import JQUERY from '../assets/icons/jquery.webp';
import NODE from '../assets/icons/nodejs.png';
import REACT from '../assets/icons/react.png';
import MONGODB from '../assets/icons/mongodb.png';
import MYSQL from '../assets/icons/mysql.png';
import FIREBASE from '../assets/icons/firebase.png';
import ADOBEXD from '../assets/icons/adobeXD.png';
import GIT from '../assets/icons/git.png';
import EXPRESS from '../assets/icons/expressjs.png';
import POSTMAN from '../assets/icons/postman.png';
import NETLIFY from '../assets/icons/netlify.png';
import '../assets/css/tech.css';


function Tech() {
      return (
        <div className="tech_tool" id="tech_tool">
            <p class="why"> Tech. and Tools I use </p>
            <br/><br/>
            {/* <div className="tech_tool_title">Languages</div> */}
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={C} alt="tech_tools" className="tech_logo" /><span className="title_track">C</span></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CPLUS} alt="tech_tools" className="tech_logo" /><span className="title_track">C++</span></a>
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVA} alt="tech_tools" className="tech_logo" /><span className="title_track">Java</span></a>
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={PYTHON} alt="tech_tools" className="tech_logo" /><span className="title_track">Python</span></a>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            {/* <div className="tech_tool_title">Front-End</div> */}
            {/* <br/> */}
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={HTML} alt="tech_tools" className="tech_logo" /><span className="title_track">HTML 5</span></a>
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CSS} alt="tech_tools" className="tech_logo" /><span className="title_track">CSS 3</span></a>
            <a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={SASS} alt="tech_tools" className="tech_logo" /><span className="title_track">Sass</span></a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={BOOTSTRAP} alt="tech_tools" className="tech_logo" /><span className="title_track">Bootstrap</span></a>
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVASCRIPT} alt="tech_tools" className="tech_logo" /><span className="title_track">JavaScript</span></a>
            <a href="https://www.w3schools.com/jquery/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JQUERY} alt="tech_tools" className="tech_logo" /><span className="title_track">jQuery</span></a>
            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={REACT} alt="tech_tools" className="tech_logo" /><span className="title_track">React Js</span></a>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            {/* <div className="tech_tool_title1">Back-End & Databases</div> */}
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NODE} alt="tech_tools" className="tech_logo" /><span className="title_track">Node Js</span></a>
            <a href="https://devdocs.io/express/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={EXPRESS} alt="tech_tools" className="tech_logo" /><span className="title_track">Express Js</span></a>
            <a href="https://firebase.google.com/docs/guides" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={FIREBASE} alt="tech_tools" className="tech_logo" /><span className="title_track">FIREBASE</span></a>
            <a href="https://docs.mongodb.com/drivers/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MONGODB} alt="tech_tools" className="tech_logo" /><span className="title_track">MongoDB</span></a>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MYSQL} alt="tech_tools" className="tech_logo" /><span className="title_track">MySQL</span></a>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            {/* <div className="tech_tool_title2">Version Control & Hostings</div> */}
            {/* <a href="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=Cj0KCQiAx9mABhD0ARIsAEfpavTOtZsSWvwIbCQE-MRMvKzJlVMGkZOzf463TBGk-H_viInR13GXJ5waAjdbEALw_wcB:G:s&s_kwcid=AL!3085!3!394015010050!e!!g!!adobe%20xd!1641846448!65452677551" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={ADOBEXD} alt="tech_tools" className="tech_logo" /><span className="title_track">Adobe XD</span></a> */}
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={GIT} alt="tech_tools" className="tech_logo" /><span className="title_track">Git</span></a>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={POSTMAN} alt="tech_tools" className="tech_logo" /><span className="title_track">Postman</span></a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NETLIFY} alt="tech_tools" className="tech_logo" /><span className="title_track">Netlify</span></a>
        </div>
      )
}

export default Tech;