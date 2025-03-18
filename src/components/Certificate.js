import React from "react";

const Certifications = () => {
  const certifications = [
    { title: "IBM Python for Data Science Training", year: "2024" },
    { title: "Microsoft Power Platform Fundamentals", year: "2021", score: "793" },
    { title: "Microsoft Azure Fundamentals", year: "2021", score: "715" },
    { title: "Blue Prism Developer Certification", year: "2021", score: "82%" }
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Certifications & Training</h1>
      <div className="max-w-3xl w-full flex flex-col gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-gray-400">Year: {cert.year} {cert.score && `| Score: ${cert.score}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
