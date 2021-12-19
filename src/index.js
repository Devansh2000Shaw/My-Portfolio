import './assets/css/index.css';
import WhyMe from './components/WhyMe';
// import Skill from './components/Skill';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Intro from './components/Intro';
// import Footer from './components/Footer';
import Project from './components/Project';
import Experiences from './components/Experiences';
// import NavBar from './components/NavBar';
// import Recommendation from './components/Recommendation';
import Testimonial from './components/Testimonial';
import Education from './components/Education';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Nav from './components/Nav'

  ReactDOM.render(
    <>
      <Navigation/>
      {/* <Nav/> */}
      {/* <Navbar/> */}
      <Intro/>
      <WhyMe/>
      <Tech/>
      {/* <Skill/> */}
      <Experiences/>
      <Project/>
      <Education/>
      {/* <Recommendation/> */}
      <Testimonial/>
      <Contact/>
      {/* <Footer/> */}
    </>,
    document.getElementById('root')
  );


