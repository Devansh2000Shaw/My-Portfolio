import './index.css';
// import List from './List';
import WhyMe from './WhyMe';
import Skills from './Skills';
import Skill from './Skill';
import Navigation from './Navigation';
import Contact from './Contact';
import Intro from './Intro';
import Footer from './Footer';
import Project from './Project';
import Experiences from './Experiences';
// import NavBar from './NavBar';
import Recommendation from './Recommendation';
import Testimonial from './Testimonial';
// import Final from './Final';
// const { createElement } = require('react');
// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react'
import ReactDOM from 'react-dom';


  ReactDOM.render(
    <>
      <Navigation/>
      <Intro/>
      <WhyMe/>
      <Skill/>
      {/* <Skills/> */}
      <Experiences/>
      <Project/>
      {/* <Recommendation/> */}
      <Testimonial/>
      <Contact/>
      {/* <Footer/> */}
    </>,
    document.getElementById('root')
  );


