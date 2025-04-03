import { useState } from "react";
import { Home, Briefcase, BookOpen, Star, Folder, Award, Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/index.jpg";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-gray-800 w-64 p-6 flex flex-col transform transition-transform md:relative md:translate-x-0 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto">
          <img
            src={logo}
            alt="Profile"
            className="object-cover w-32 h-32 mt-6 border-4 border-gray-700 rounded-full mx-auto"
          />
          <h1 className="mt-4 text-xl font-bold text-center">Sihle Ntshalintshali</h1>
          <p className="text-sm text-gray-400 text-center">Junior Fullstack Developer</p>

          <nav className="w-full my-6 mt-16">
            <ul className="space-y-3">
              <NavItem to="/home" icon={<Home size={20} />} label="Home" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/work-history" icon={<Briefcase size={20} />} label="Work History" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/education" icon={<BookOpen size={20} />} label="Education" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/skills" icon={<Star size={20} />} label="Skills" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/projects" icon={<Folder size={20} />} label="Projects" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/certifications" icon={<Award size={20} />} label="Certifications and Training" currentPath={location.pathname} setIsOpen={setIsOpen} />
              <NavItem to="/contact" icon={<Mail size={20} />} label="Contact" currentPath={location.pathname} setIsOpen={setIsOpen} />
            </ul>
          </nav>
        </div>

        {/* Social Links at the Bottom */}
        <div className="flex justify-center pb-6 mt-auto space-x-4">
          <a href="https://github.com/Sihle-06" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-orange-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/sihle-ntshalintshali-811688194/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-orange-400 hover:text-white" />
          </a>
        </div>
      </aside>

      <Outlet />
    </>
  );
};

const NavItem = ({ to, icon, label, currentPath, setIsOpen }) => {
  const isActive = currentPath === to;
  return (
    <Link to={to} className="block" onClick={() => setIsOpen(false)}>
      <div className={`flex items-center p-2 space-x-3 rounded cursor-pointer 
        ${isActive ? "bg-orange-500 text-gray-700" : "bg-gray-700 text-gray-300"} 
        hover:bg-orange-400 hover:text-white transition`}>
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default Sidebar;
