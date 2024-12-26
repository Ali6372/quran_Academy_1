import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Service/Services';
import QuranPrograms from '../components/Programs/QuranPrograms';
import Contact from '../components/contact/Contact';
import AnimatedSidebar from '../components/sidebar/AnimatedSidebar';
import WebSidebar from '../components/webSidebar/WebSidebar';

const Home = () => {
  return (
    <>
    <WebSidebar/>
      {/* <Header/> */}
      <Hero/>
      <About/>
      <Services/>
      <QuranPrograms/>
      <Contact/>
      {/* <AnimatedSidebar/> */}
    </>
  );
}

export default Home;
