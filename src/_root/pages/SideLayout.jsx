import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const SideLayout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:flex lg:w-80  ">
        <SideBar />
      </div>
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default SideLayout;
