import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"]; // Array representing links

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.toLowerCase()}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;