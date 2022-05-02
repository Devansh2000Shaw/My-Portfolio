import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import WhyMe from './components/WhyMe';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Project from './components/Project';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Testimonial from './components/Testimonial';
import Tech from './components/Tech';
import AnimatedCursor from "react-animated-cursor"
// import Navigation from './components/NavBar';
// import BackToTop from './components/BackToTop';
  ReactDOM.render(
    <>
      <AnimatedCursor 
        innerSize={15}
        outerSize={40}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.6}
        outerScale={2}
        trailingSpeed={7}/>
      <Navigation/>
      <Intro/>
      <WhyMe/>
      <Tech/>
      <Experiences/>
      <Education/>
      <Project/>
      <Testimonial/>
      <Contact/>
      {/* <BackToTop/> */}
    </>,
    document.getElementById('root')
  );


