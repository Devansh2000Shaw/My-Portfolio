import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import WhyMe from './components/WhyMe';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Project from './components/Project';
import Experiences from './components/Experiences';
import Testimonial from './components/Testimonial';
// import Education from './components/Education';
import Tech from './components/Tech'

  ReactDOM.render(
    <>
      <Navigation/>
      <Intro/>
      <WhyMe/>
      <Tech/>
      <Experiences/>
      <Project/>
      {/* <Education/> */}
      <Testimonial/>
      <Contact/>
    </>,
    document.getElementById('root')
  );


