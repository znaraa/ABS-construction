import React from "react";
import "./Project.css";

const projectData = [
  {
    id: "project3",
    title: "Professional Machine Maintenance",
    image: "../../assets/istockphoto-1332532246-612x612.jpg",
    description: "Reliable technology supporting stable equipment operation",
    details:
      "Industrial equipment maintenance focusing on planning, designing, and execution (Kanto region case study)",
    link: "/project3",
  },
  {
    id: "project1",
    title: "Precision Blacksmithing Techniques",
    image: "../../assets/istockphoto-545102850-612x612.jpg",
    description: "Reliable technology for grinding, cutting, and assembly",
    details:
      "Metal processing and steel frame construction emphasizing planning, designing, and execution (Chiba Prefecture case study)",
    link: "/project1",
  },
  {
    id: "project2",
    title: "Professional Welding Technology",
    image:
      "../../assets/newcomer-who-got-job-architecture-work-healthy-pose-newcomer-who-got-job-architecture-work-170063785.webp",
    description: "Precision welding ensuring strength and safety",
    details:
      "Welding work for architectural steel frames with a focus on planning, designing, and execution (Tokyo case study)",
    link: "/project2",
  },
];

const Project = () => {
  return (
    <section id="project" className="project">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>

        {projectData.map((project, index) => (
          <div
            key={project.id}
            id={project.id}
            className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
