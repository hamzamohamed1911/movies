import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import ScrollToTopButton from '../components/ScrollToTopButton';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
        <ScrollToTopButton/>
      </main>
    </>
  );
};

export default RootLayout;
