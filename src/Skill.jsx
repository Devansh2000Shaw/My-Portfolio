import React from 'react';
import './skill.css';

function Skill()
{
  return(
    <div id="skill">
      <div className="container">
      <p className = "why">Skills</p>
    <div className="row py-5">
                  <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                    <div className="card shadow text-center">
                      <div className="position-relative rounded-top progress-wrapper" style={{backgroundColor: "#E44D26", color: "#fdb157"}}>
                        <div className="wave" data-progress="90%" style={{bottom: "90%"}}></div>
                      </div>
                      <div className="card-footer bg-white">
                        <h4 className="card-title" style={{color: "black"}}>HTML (98%)</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                      <div className="card shadow text-center">
                        <div className="position-relative rounded-top progress-wrapper" style={{backgroundColor: "#285FF0", color: "#bdecf6"}}>
                          <div className="wave" data-progress="80%" style={{bottom: "80%"}}></div>
                        </div>
                        <div className="card-footer bg-white">
                          <h4 className="card-title" style={{color: "black"}}>CSS (95%)</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                      <div className="card shadow text-center">
                        <div className="position-relative rounded-top progress-wrapper" style={{backgroundColor: "#563D7C", color: "#ffbcaa"}}>
                          <div className="wave" data-progress="70%" style={{bottom: "70%"}}></div>
                        </div>
                        <div className="card-footer bg-white">
                          <h4 className="card-title" style={{color: "black"}}>BOOTSTRAP (80%)</h4>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                    <div className="card shadow text-center">
                      <div className="position-relative rounded-top progress-wrapper" data-color="#9473e6" style={{backgroundColor: "#F4D001"}}>
                        <div className="wave" data-progress="60%" style={{bottom: "60%"}}></div>
                      </div>
                      <div className="card-footer bg-white">
                        <h4 className="card-title" style={{color: "black"}}>JAVASCRIPT (40%)</h4>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default Skill;