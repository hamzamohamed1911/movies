import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const SideLayout = () => {
  return (
    <div className="flex">
      <div className="w-64">
        <SideBar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SideLayout;
