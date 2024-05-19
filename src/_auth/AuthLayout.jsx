import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { godFather, moviesLogo } from '../assets';

const AuthLayout = () => {
  return (
    <section> 
      <div className="bg-slate-900">
        <div className="m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <Link to='/' className="flex gap-1 h-12 w-32 mx-auto cursor-pointer">
              <img src={moviesLogo} className="h-10 object-contain"/>
              <span className="text-babyblue flex self-center text-xl font-semibold">
                Movies
              </span>
            </Link>
            <main>
              <Outlet />
            </main>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <motion.img 
              src={godFather} 
              className="h-screen w-full object-cover object-both rounded-lg"
              alt='godfather'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
             
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
