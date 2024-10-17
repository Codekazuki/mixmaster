import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav-center'>
      <span className='logo'>MixMaster</span>
      <NavLink to='/' className='nav-link'>
        Home
      </NavLink>
      <NavLink to='about' className='nav-link'>
        About
      </NavLink>
      <NavLink to='newsletter' className='nav-link'>
        Newsletter
      </NavLink>
    </nav>
  );
};

export default Navbar;
