import React from "react";
import "../styles/navbar.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* <ul className="navbar">
        <li>List</li>
        <li>Blog</li>
        
      </ul> */}
      <a href="https://github.com/francisGolden" target={"blank"}>
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/francesco-gioele-doria-b23742123"
        target={"blank"}
      >
        <AiFillLinkedin />
      </a>
    </nav>
  );
};

export default Navbar;
