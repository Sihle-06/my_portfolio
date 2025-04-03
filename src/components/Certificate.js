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
    <div className="min-h-screen p-4 md:p-8 text-white bg-gray-900 flex flex-col">
      <h1 className="pb-4 mb-6 text-3xl md:text-4xl font-extrabold text-center text-orange-400">
        Certificates & Training
      </h1>
      <div className="overflow-auto max-h-[calc(100vh-100px)] px-2">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-xl md:rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-xl md:rounded-t-2xl"></div>
              <h2 className="text-lg md:text-xl font-semibold text-white">{cert.title}</h2>
              <p className="mt-2 text-sm md:text-base text-gray-400">
                <span className="font-medium text-orange-300">Year:</span> {cert.year}
                {cert.score && (
                  <span className="ml-3 font-medium text-orange-300">
                    | Score: {cert.score}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
