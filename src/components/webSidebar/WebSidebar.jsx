import React from 'react';
import './websidebar.css';
import { MdOutlineClose } from "react-icons/md";

const WebSidebar = ({ open, setOpen }) => {
  return (
    
      <div className={`sidebar ${open ? "open" : ""} sidebar-items`}>
        <div className="close" onClick={() => setOpen(false)}>
          <MdOutlineClose size={30} />
        </div>
        <ul className="sidebar-items">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/program">Programs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    
  );
};

export default WebSidebar;
