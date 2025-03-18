import { Home, Briefcase, BookOpen, Star, Folder, Award, Mail, Github, Linkedin } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/index.jpg'

const Sidebar = () => {
  return (
    <aside className="w-80 bg-gray-800 p-6 flex flex-col items-center h-screen">
      <img
        src={logo}
        alt="Profile"
        className="object-cover rounded-full w-32 h-32 border-4 border-gray-700 mt-6"
      />
      <h2 className="mt-4 text-xl font-semibold">Sihle Ntshalintshali</h2>
      <p className="text-sm text-gray-400">Junior Fullstack Developer</p>
      
      <nav className="my-6 mt-16 w-full">
        <ul className="space-y-3">
          <Link to="/" className="block">
            <NavItem icon={<Home size={20} />} label="Home" />
          </Link>
          <Link to="/work-history" className="block">
            <NavItem icon={<Briefcase size={20} />} label="Work History" />
          </Link>
          <Link to="/education" className="block">
            <NavItem icon={<BookOpen size={20} />} label="Education" />
          </Link>
          <Link to="/skills" className="block">
            <NavItem icon={<Star size={20} />} label="Skills" />
          </Link>
          <Link to="/projects" className="block">
            <NavItem icon={<Folder size={20} />} label="Projects" />
          </Link>
          <Link to="/certifications" className="block">
            <NavItem icon={<Award size={20} />} label="Certifications and Training" />
          </Link>
          <Link to="/contact" className="block">
            <NavItem icon={<Mail size={20} />} label="Contact" />
          </Link>
        </ul>
      </nav>
      
      {/* Social Links */}
      <div className="mt-auto flex space-x-4 pb-6">
        <a href="https://github.com/Sihle-06" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-gray-400 hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/sihle-ntshalintshali-811688194/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
        </a>
      </div>
      <Outlet />
    </aside>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;