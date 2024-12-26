import React, { useState } from "react";
import "./sidebar.css";

const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="closebtn close-btn btn btn-danger" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <ul className="sidebar-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Toggle Button: Show only if isOpen is false */}
      {!isOpen && (
        <button className="toggle-btn btn btn-primary" onClick={toggleSidebar}>
          ☰
        </button>
      )}


    </>
  );
};

export default AnimatedSidebar;
