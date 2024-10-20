import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
