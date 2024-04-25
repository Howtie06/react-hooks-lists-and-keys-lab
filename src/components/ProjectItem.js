import React from "react";

function ProjectItem({ id, technologies }) {
  return (
    <div>
      <h2>Project {id}</h2>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;