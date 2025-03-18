import React from "react";

const KeySkills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C#", "JavaScript", "SQL", "MySQL", "Java", "Python", "Gosu"]
    },
    {
      category: "Frameworks & Technologies",
      skills: [".NET", "WinForms", "HTML", "CSS", "ASP.NET", "Spring Boot", "Angular", "Tailwind CSS", "Vb.Net"]
    },
    {
      category: "Database Management",
      skills: ["MSSQL", "MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Power BI", "Atlassian", "Git", "Guidewire Studio", "Zabbix", "Grafana", "Blue Prism", "VS Code", "IntelliJ", "NetBeans"]
    },
    {
      category: "Methodologies",
      skills: ["Agile Practices", "Object-Oriented Programming (OOP)"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-Solving", "Analytical Thinking", "Communication", "Collaboration", "Adaptability", "Teamwork"]
    }
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 w-full ">Key Skills</h1>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-semibold">{skillGroup.category}</h2>
            <div className="flex flex-wrap mt-2 gap-2">
              {skillGroup.skills.map((skill, i) => (
                <span key={i} className="bg-gray-800 px-3 text-orange-400  py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeySkills;
