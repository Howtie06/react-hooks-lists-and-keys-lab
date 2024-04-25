import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => {
          const id = index + 1;
          return <span key={id}>{technology}</span>;
        })}
      </div>
    </div>
  );
}

export default ProjectItem;