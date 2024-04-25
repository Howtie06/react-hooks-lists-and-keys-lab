import React from "react";

function NavBar({ links }) {
  return (
    <nav>
      {links && links.length > 0 ? (
        links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            {link.toLowerCase()}
          </a>
        ))
      ) : (
        <p>No links available</p>
      )}
    </nav>
  );
}

export default NavBar;
