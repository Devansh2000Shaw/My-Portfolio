import React from "react";

function Developer() {
  return (
    <div id="recommendation">
      <p
        style={{
          marginBottom: "50px",
          marginTop: "600px",
          fontFamily: "Ubuntu",
        }}
        className="skill"
      >
        .recommendations()
      </p>
      <div
        className="container"
        style={{ marginTop: "100px", backgroundColor: "black" }}
      ></div>
      <div
        class="row"
        style={{ textAlign: "center", backgroundColor: "black" }}
      >
        <div class="col-sm-4">
          <div class="card" style={{ backgroundColor: "black" }}>
            <div class="card-body">
              <img
                src="5.jpg"
                alt=""
                width="140px"
                height="140px"
                style={{ borderRadius: "50%", border: "5px solid #2f363e" }}
              />{" "}
              <br />
              <br />
              <p
                class="card-title"
                style={{ fontSize: "25px", color: "white" }}
              >
                Abhishek Raj
              </p>
              <p class="card-text" style={{ color: "#24CAAC" }}>
                Backend and API
              </p>
              <a href="https://www.linkedin.com/in/jrabhishek/">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/__abhishekraj/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/jrabhishek">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <p style={{ color: "white" }}>
                {" "}
                <i
                  class="fa fa-quote-left"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginRight: "5px" }}
                ></i>
                Devansh is very proficient in his design skills and innovative
                thinking capabilities makes him ever better from others. Keep
                working on things untill they gets perfect and his team working
                abilities are also key points.
                <i
                  class="fa fa-quote-right"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginLeft: "5px" }}
                ></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style={{ backgroundColor: "black" }}>
            <div class="card-body">
              <img
                src="7.jpg"
                alt=""
                width="140px"
                height="140px"
                style={{ borderRadius: "50%", border: "5px solid #2f363e" }}
              />{" "}
              <br />
              <br />
              <p
                class="card-title"
                style={{ fontSize: "25px", color: "white" }}
              >
                Ria Singh
              </p>
              <p class="card-text" style={{ color: "#24CAAC" }}>
                Backend and API
              </p>
              <a href="https://www.linkedin.com/in/ria-singh-a401aa192">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/RiaSingh2000">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <p style={{ color: "white" }}>
                {" "}
                <i
                  class="fa fa-quote-left"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginRight: "5px" }}
                ></i>
                Devansh is very passionate about his Web Development skills. He
                is very innovative and creative person. He is a calm minded
                person who takes his responsibilities seriously and completes
                them before time.
                <i
                  class="fa fa-quote-right"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginLeft: "5px" }}
                ></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style={{ backgroundColor: "black" }}>
            <div class="card-body">
              <img
                src="zzz.jpg"
                alt=""
                width="140px"
                height="140px"
                style={{ borderRadius: "50%", border: "5px solid #2f363e" }}
              />{" "}
              <br />
              <br />
              <p
                class="card-title"
                style={{ fontSize: "25px", color: "white" }}
              >
                Muskan Gupta
              </p>
              <p class="card-text" style={{ color: "#24CAAC" }}>
                Frontend Developer
              </p>
              <a href="https://www.linkedin.com/in/muskan-gupta-648a47183">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/_.im_happiness._">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/guptamuskan988">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              <p style={{ color: "white" }}>
                {" "}
                <i
                  class="fa fa-quote-left"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginRight: "5px" }}
                ></i>
                Devansh is an ingenious boy. He is amazing in front-end Web
                development. He knows when to be calm and when to be tough
                according to the situation which makes him different. Keep up
                your good work and stay positive like this.
                <i
                  class="fa fa-quote-right"
                  aria-hidden="true"
                  style={{ color: "#EAA023", marginLeft: "5px" }}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
