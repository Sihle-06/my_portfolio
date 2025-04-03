import React from "react";
import { Database, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    details: [
      "Designed a CRUD-based system allowing users to add, update, and delete employee records with built-in validation for data integrity.",
      "Integrated with a local SQL Server database for secure and efficient data handling.",
      "Included image upload functionality and Gravatar integration for profile management.",
      "Implemented robust error handling to enhance user experience."
    ],
    icon: <Database size={28} className="text-orange-400" />,
  },
  {
    title: "Ecommerce - Marketplace",
    details: [
      "Developed an e-commerce application enabling secure transactions between buyers and service providers.",
      "Implemented user authentication and verification features to enhance platform security.",
      "Integrated payment processing, order tracking, and a rating system to improve user experience.",
      "Utilized Spring Boot for backend services and PostgreSQL for efficient data management.",
      "Built the frontend with Angular to ensure a responsive and user-friendly interface."
    ],
    icon: <Smartphone size={28} className="text-orange-400" />,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 text-white bg-gray-900 flex flex-col">
      <h1 className="pb-4 mb-6 text-3xl md:text-4xl font-extrabold text-center text-orange-400">
        Projects
      </h1>
      <div className="overflow-auto max-h-[calc(100vh-100px)] px-2">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-xl md:rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-xl md:rounded-t-2xl"></div>
              <div className="flex items-center mb-2 space-x-3">
                {project.icon}
                <h2 className="text-lg md:text-2xl font-bold text-white">{project.title}</h2>
              </div>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                {project.details.map((detail, i) => (
                  <li key={i} className="leading-relaxed text-sm md:text-base">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
