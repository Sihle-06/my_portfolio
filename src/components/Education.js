import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Belgium Campus | Pretoria North",
      duration: "Mar 2017 – Nov 2019",
      details: [
        "Served as a Student Relations Council member, fostering an inclusive campus environment.",
        "Coursework included software development, web development, and business intelligence."
      ]
    },
    {
      degree: "Matric Certificate",
      institution: "Kwadedangendlale High School | Zola North",
      duration: "Jan 2011 – Nov 2015",
      details: [
        "Active participant in school projects and leadership initiatives.",
        "Member of the school choir, participating in competitions and events."
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      <h1 className="pb-4 mb-10 text-4xl font-extrabold text-center text-orange-400">
        Education
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-2xl"></div>
            <h2 className="text-2xl font-bold text-white">{edu.degree}</h2>
            <p className="mt-1 text-lg font-medium text-orange-400">
              {edu.institution} | {edu.duration}
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              {edu.details.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
