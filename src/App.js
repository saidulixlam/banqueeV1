import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/heroSection';
import Features from './components/Features';
import Describe from './components/Describe';
import Open from './components/OpenAccount';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Signup from './components/Signup';

const MainLayout = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex-grow mt-0">
      <HeroSection />
    </div>
    <div className='mx-2'>
      <Features />
    </div>
    <Describe />
    <Open />
    <Testimonials />
    <Contact />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/login" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
