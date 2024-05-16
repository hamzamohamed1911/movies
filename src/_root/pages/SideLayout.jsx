import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const SideLayout = () => {
  return (
    <div className="flex">
      <div className=" lg:w-80 w-56  z-50">
        <SideBar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SideLayout;
