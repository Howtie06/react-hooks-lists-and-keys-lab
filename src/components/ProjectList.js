import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div>
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            technologies={project.technologies}
          />
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
}

export default ProjectList;