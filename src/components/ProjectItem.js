import React from "react";


function ProjectItem({ id, technologies }) {
  return (
    <div>
      <h3>Project {id}</h3>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;

