import React from "react";

const Certifications = () => {
  const certifications = [
    { title: "IBM Python for Data Science Training", year: "2024" },
    { title: "AWS Cloud Practitioner Essentials", year: "2023" },
    { title: "Microsoft Power Platform Fundamentals", year: "2021", score: "793" },
    { title: "Microsoft Azure Fundamentals", year: "2021", score: "715" },
    { title: "Blue Prism Developer Certification", year: "2021", score: "82%" },
    
  ];

  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      <h1 className="pb-4 mb-10 text-4xl font-extrabold text-center text-orange-400">
        Certifications & Training
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-2xl"></div>
            <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
            <p className="mt-2 text-gray-400">
              <span className="font-medium text-orange-300">Year:</span> {cert.year} 
              {cert.score && (
                <span className="ml-4 font-medium text-orange-300">
                  | Score: {cert.score}
                </span>
              )}
              {cert.date && (
                <span className="ml-4 font-medium text-orange-300">
                  | Date: {cert.date}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
