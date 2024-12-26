import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import './header.css';
import logo from '../../assets/sultan.png';

const Header = ({ open, setOpen }) => {
  const [size, reSize] = useState(window.innerWidth);

  const changeSize = () => {
    reSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  });

  return (
    <>
      {size >= 1025 && (
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex bg-white justify-content-between align-items-center px-5 py-3 box-shadow">
          <div className="navImg cursor-pointer-only">
            <img width={90} src={logo} alt="sultan logo" />
          </div>

          <div className="navLinks">
            <ul className='d-flex gap-5 align-items-center justify-content-between'>
              <li className='nav-item li-1 cursor-pointer'>
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className='nav-item li-2 cursor-pointer'>
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className='nav-item li-3 cursor-pointer'>
                <a className="nav-link" href="/service">Services</a>
              </li>
              <li className='nav-item li-4 cursor-pointer'>
                <a className="nav-link" href="/program">Programs</a>
              </li>
              <li className='nav-item li-5 cursor-pointer'>
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="contact">
            <div className="d-flex align-items-center gap-1">
              <div className="contact-icon cursor-pointer-only">
                <FaPhoneAlt size={18} color='green' />
              </div>
              <div className="phoneNumber cursor-pointer-only">
                <p className="cursor-pointer-only" style={{ fontSize: '20px', fontWeight: '600', color: '#167287' }}>0329-3166821</p>
              </div>
            </div>
            <div className="navSignUpButton">
              <button type="button" className="btn btn-warning text-white fw-600 w-100">Sign Up Now</button>
            </div>
          </div>
        </div>
      )}

      {size <= 1025 && (
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex bg-white justify-content-between align-items-center px-2 py-1 navBarResponsive gap-4">
          <div className="navCenterSignUpButton cursor-pointer">
            <button type="button" className="btn btn-warning text-white fw-400 responsive-button w-100 py-0">Sign Up</button>
          </div>

          <div className="navCenterImg cursor-pointer align-items-center" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img className='responsive-img m-auto' src={logo} alt="" style={{width:'30%', height:'30%'}}/>
          </div>

          {/* Sidebar toggle onClick */}
          <div onClick={() => { setOpen(true); console.log('Sidebar opened'); }} className="close navSidebarIcon responsive-icon cursor-pointer">
            <IoReorderThreeOutline size={38} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
