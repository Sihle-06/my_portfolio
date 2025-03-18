import React from "react";
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex">
        <Routes>
          <Route path="/" element={<Main  />} className="items-center justify-center p-5"/>
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/education" element= {<Education/>} />
          <Route path="/skills" element = {<Skills/>} />
          <Route path="/certifications" element = {<Certificate/>} />
          <Route path="/contact" element = {<Contact/>} />
        </Routes>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default Portfolio;
