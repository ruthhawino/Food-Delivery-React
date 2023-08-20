import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a className='foodle'>Foodle</a>
      <a className="navLink underline">Home</a>
      <a className="navLink">Offer</a>
      <a className="navLink">Service</a>
      <a className="navLink">Menu</a>
      <a className="navLink">About Us</a>
      <a className="btn">Login</a>
      <a className="navLink signupBtn">Sign Up</a>
    </div>
  );
};

export default Navbar;
