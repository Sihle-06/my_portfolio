import { Home, Briefcase, BookOpen, Star, Folder, Award, Mail, User } from "lucide-react";
import logo from './profile.jpeg';


const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-4">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-gray-600"
        />
        <h2 className="mt-2 text-xl font-semibold">Sihle Ntshalintshali</h2>
        <p className="text-gray-400">Fullstack Developer</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<User size={20} />} label="Summary" />
        <NavItem icon={<Briefcase size={20} />} label="Work History" />
        <NavItem icon={<BookOpen size={20} />} label="Education" />
        <NavItem icon={<Star size={20} />} label="Skills" />
        <NavItem icon={<Folder size={20} />} label="Projects" />
        <NavItem icon={<Award size={20} />} label="Certifications & Training" />
        <NavItem icon={<Mail size={20} />} label="Contacts" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-700">
      {icon}
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default Sidebar;
