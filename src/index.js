import './assets/css/index.css';
// import List from './List';
import WhyMe from './components/WhyMe';
import Skills from './components/Skills';
import Skill from './components/Skill';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Project from './components/Project';
import Experiences from './components/Experiences';
// import NavBar from './components/NavBar';
import Recommendation from './components/Recommendation';
import Testimonial from './components/Testimonial';
// import Final from './components/Final';
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


