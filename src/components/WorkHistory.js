import React from "react";

const WorkHistory = () => {
  const experiences = [
    {
        title: "Junior Full-Stack Developer (Internship)",
        company: "Shaper | Johannesburg",
        duration: "During IT: Systems Support NQF 5 Learnership",
        responsibilities: [
          "Developed backend services with Spring Boot and PostgreSQL, ensuring seamless API communication with frontend applications.",
          "Implemented RESTful APIs to support the EasyErrands mobile application, improving data management and user experience.",
          "Utilized Git for collaborative development and version control.",
          "Worked closely with UI/UX designers to ensure an optimal user experience."
        ]
      },
    {
      title: "Software Engineer (Junior Guidewire Developer)",
      company: "Zensar Technologies | Sandton",
      duration: "Feb 2022 – Jan 2024",
      responsibilities: [
        "Developed and maintained core insurance applications using Guidewire Studio and Gosu programming language.",
        "Collaborated in Agile teams, actively participating in sprint planning, stand-ups, and retrospectives to optimize project workflows.",
        "Investigated, resolved, and documented bug incidents affecting the Core Insurance Platform using Jira.",
        "Improved system performance monitoring through Zabbix and Grafana, reducing recurring system issues.",
        "Utilized Git for version control, efficiently managing commits, branches, and code integration."
      ]
    },
    {
      title: "Project Trainee",
      company: "Zensar Technologies | Sandton",
      duration: "Feb 2021 – Feb 2024",
      responsibilities: [
        "Assisted in developing software solutions by writing and debugging code under supervision.",
        "Conducted software testing and documentation to ensure high-quality deliverables.",
        "Gained exposure to Agile methodologies, participating in team meetings and sprint planning.",
        "Supported automation projects by analyzing workflows and assisting in process improvements."
      ]
    }
   
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Work History</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">{exp.title}</h2>
          <p className="text-orange-400 ">{exp.company} | {exp.duration}</p>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
