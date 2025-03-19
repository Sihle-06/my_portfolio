import { Home, Briefcase, BookOpen, Star, Folder, Award, Mail, Github, Linkedin } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/index.jpg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="flex flex-col items-center h-screen p-6 bg-gray-800 w-80">
      <img
        src={logo}
        alt="Profile"
        className="object-cover w-32 h-32 mt-6 border-4 border-gray-700 rounded-full"
      />
      <h1 className="mt-4 text-xl font-bold">Sihle Ntshalintshali</h1>
      <p className="text-sm text-gray-400">Junior Fullstack Developer</p>

      <nav className="w-full my-6 mt-16">
        <ul className="space-y-3">
          <NavItem to="/home" icon={<Home size={20} />} label="Home" currentPath={location.pathname} />
          <NavItem to="/work-history" icon={<Briefcase size={20} />} label="Work History" currentPath={location.pathname} />
          <NavItem to="/education" icon={<BookOpen size={20} />} label="Education" currentPath={location.pathname} />
          <NavItem to="/skills" icon={<Star size={20} />} label="Skills" currentPath={location.pathname} />
          <NavItem to="/projects" icon={<Folder size={20} />} label="Projects" currentPath={location.pathname} />
          <NavItem to="/certifications" icon={<Award size={20} />} label="Certifications and Training" currentPath={location.pathname} />
          <NavItem to="/contact" icon={<Mail size={20} />} label="Contact" currentPath={location.pathname} />
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex pb-6 mt-auto space-x-4">
        <a href="https://github.com/Sihle-06" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-orange-400 hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/sihle-ntshalintshali-811688194/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-orange-400 hover:text-white" />
        </a>
      </div>
      <Outlet />
    </aside>
  );
};

const NavItem = ({ to, icon, label, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to} className="block">
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
