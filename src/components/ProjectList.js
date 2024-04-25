import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;