import React from "react";

const KeySkills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C#", "JavaScript", "SQL", "MySQL", "Java", "Python", "Gosu"],
    },
    {
      category: "Frameworks & Technologies",
      skills: [
        ".NET",
        "WinForms",
        "HTML",
        "CSS",
        "ASP.NET",
        "Spring Boot",
        "Angular",
        "Tailwind CSS",
        "Vb.Net",
      ],
    },
    {
      category: "Database Management",
      skills: ["MSSQL", "MySQL", "PostgreSQL"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Power BI",
        "Atlassian",
        "Git",
        "Guidewire Studio",
        "Zabbix",
        "Grafana",
        "Blue Prism",
        "VS Code",
        "IntelliJ",
        "NetBeans",
      ],
    },
    {
      category: "Methodologies",
      skills: ["Agile Practices", "Object-Oriented Programming (OOP)"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Analytical Thinking",
        "Communication",
        "Collaboration",
        "Adaptability",
        "Teamwork",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 text-white bg-gray-900 flex flex-col">
      <h1 className="pb-4 mb-6 text-3xl md:text-4xl font-extrabold text-center text-orange-400">
        Key Skills
      </h1>
      <div className="overflow-auto max-h-[calc(100vh-100px)] px-2">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-xl md:rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-xl md:rounded-t-2xl"></div>
              <h2 className="text-lg md:text-2xl font-semibold text-white">
                {skillGroup.category}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs md:text-sm font-medium text-gray-300 transition-all bg-gray-700 rounded-full shadow-md hover:bg-orange-500 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeySkills;
