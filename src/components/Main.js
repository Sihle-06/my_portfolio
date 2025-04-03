import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profilePic from "../assets/imageCode.png"; // Update with actual path

const Main = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <main className="flex items-center justify-center min-h-screen px-6 py-12 text-white bg-gray-900">
        <div className="flex flex-col-reverse items-center max-w-6xl gap-8 md:grid md:grid-cols-2 md:items-center">
          
          {/* TEXT CONTENT */}
          <motion.div 
            className="max-w-md text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p 
              className="text-xs tracking-widest text-orange-400 uppercase md:text-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Welcome to my world
            </motion.p>
            <motion.h1 
              className="mt-3 text-3xl font-extrabold leading-snug md:text-5xl md:leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Hi, I’m <span className="text-white">Sihle Ntshalintshali</span> <br />
              <span className="text-orange-400">A Junior Fullstack Developer</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm leading-relaxed text-gray-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              A results-driven Software Developer with expertise in full-stack development. 
              Passionate about building scalable applications and contributing to collaborative team environments.
            </motion.p>
            <Link to="/contact" className="block">
              <motion.button 
                className="px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-300 bg-orange-500 rounded-lg shadow-md md:px-6 md:py-3 md:text-base hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div 
            className="relative overflow-hidden border-4 border-orange-400 rounded-full shadow-lg w-48 h-48 md:w-80 md:h-80 md:mx-auto"
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
    </div>
  );
};

export default Main;
