import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import CEOFounderSection from './CEOFounderSection';
import ServicesSection from './services';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ServicesSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <Testimonials />
      <CEOFounderSection/>
      <Footer/>
      
    </div>
  );
}

export default App;