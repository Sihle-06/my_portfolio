import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profilePic from "../assets/imageCode.png"; // Update with actual path

const Main = () => {
  return (
    <main className="flex items-center justify-center flex-1 min-h-screen p-10 text-white bg-gray-900">
      <div className="flex flex-col-reverse items-center max-w-6xl gap-12 md:flex-row">
        <motion.div 
          className="max-w-lg text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="text-sm tracking-widest text-orange-400 uppercase"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to my world
          </motion.p>
          <motion.h1 
            className="mt-4 text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Hi, I’m <span className="text-white">Sihle Ntshalintshali</span> <br />
            <span className="text-orange-400">A Junior Fullstack Developer</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-relaxed text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A results-driven Software Developer with expertise in full-stack development. 
            Proficient in multiple programming languages and Agile methodologies. Passionate about building scalable applications and contributing 
            to collaborative team environments.
          </motion.p>
          <Link to="/contact" className="block">
            <motion.button 
              className="px-6 py-3 mt-6 font-semibold text-white transition duration-300 bg-orange-500 rounded-lg shadow-md hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
          className="relative overflow-hidden border-4 border-orange-400 rounded-full shadow-lg w-72 h-72 md:w-96 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img 
            src={profilePic} 
            alt="Profile Picture" 
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Main;
