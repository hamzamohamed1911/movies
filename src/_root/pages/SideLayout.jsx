import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar.jsx';
import Footer from '../components/Footer.jsx';

const SideLayout = () => {
  return (
    <div className="flex">
      <div className="hidden md:flex md:w-80  ">
        <SideBar />
      </div>
      <main className="flex-1 ">
        <Outlet />
        <Footer/>

      </main>


    </div>
  );
};

export default SideLayout;
