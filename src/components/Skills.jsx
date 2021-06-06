import React from 'react';
import '../assets/css/Skills.css';

function Skills()
{
    return(
        <div id = "skillls">
            <p className = "skill">Skills</p>
            <div className = "gallery row">
                <div className = "skills">
                <img src = "Skill1.jpeg" className = "skill1" height = "150px" width = "230px" alt = "Random Images"></img>
                <p className = "skills-content">HTML, CSS & React JS</p>
                </div>
                <div className = "skills">
                <img src = "Skill2.jpeg" className = "skill2" height = "150px" width = "230px" alt = "Random Images"/>
                <p className = "skills-content">C, C++, Java & Python</p>
                </div>
                {/* <img src = {img1} alt = "Random Images"/>  */}
                <div className = "skills">
                <img src = "Skill3.jpeg" className = "skill3" height = "150px" width = "230px" alt = "Random Images"/> {/*self closing tag*/}
                <p className = "skills-content">Javascript & Firebase</p>
                </div>
                <div className = "skills">
                <img src = "skill4.png" className = "skill4" height = "150px" width = "230px" alt = "Random Images"/>
                <p className = "skills-content">Git & Github</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;