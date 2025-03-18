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
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Education</h1>
      {educationData.map((edu, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">{edu.degree}</h2>
          <p className="text-orange-400 ">{edu.institution} | {edu.duration}</p>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            {edu.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
