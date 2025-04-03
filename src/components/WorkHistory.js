import React from "react";

const WorkHistory = () => {
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "Shaper | Auckland Park",
      duration: "Oct 2024 - Current",
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
    <div className="min-h-screen p-8 text-white bg-gray-900 overflow-auto">
      <h1 className="pb-4 mb-10 text-4xl font-extrabold text-center text-orange-400">
        Work Experience
      </h1>
      <div className="grid gap-8 md:grid-cols-2 overflow-y-auto max-h-[80vh]">
        {experiences.map((exp, index) => (
          <div
          key={index}
          className="relative p-4 md:p-6 transition-all duration-300 transform bg-gray-800 border border-gray-700 shadow-lg rounded-xl md:rounded-2xl bg-opacity-90 backdrop-blur-md hover:scale-105 hover:border-orange-400 hover:shadow-orange-500/50 w-full md:w-auto"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-t-xl md:rounded-t-2xl"></div>
          <h2 className="text-lg md:text-2xl font-bold text-white">{exp.title}</h2>
          <p className="mt-1 text-sm md:text-lg font-medium text-orange-400">
            {exp.company} | {exp.duration}
          </p>
          <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
        
        ))}
      </div>
    </div>
  );
  
};

export default WorkHistory;
