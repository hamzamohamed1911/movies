"use client"
import { navLinks } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { moviesLogo } from '../../assets';

const SideBar = () => {

  
  return (
   <>
       
      <AnimatePresence>
       
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, type: 'ease' }}
            className="fixed h-screen   bg-primary flex flex-col justify-between  rounded-tr-3xl rounded-br-3xl   md:w-96 w-56  z-50"
          >

            <div className="px-4 py-6">
              <span className="grid lg:h-10 lg:w-32 sm:h-5 sm:w-16 place-content-center rounded-lg text-xs cursor-pointer text-gray-600">
              <Link to='/' className="flex gap-1  h-12  cursor-pointer">
          <img src={moviesLogo} className=" h-10 object-contain"/>
          <span className=" text-babyblue flex self-center text-xl font-semibold">
          Movies
          </span>
      </Link>
              </span>
              <ul className="pt-6 space-y-1">
              {navLinks.map(item => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive ?'p-4 flex rounded-xl text-2xl font-semibold   border-[1px] border-navy ease-in duration-300   text-babyblue ' : 'ease-out duration-300 text-2xl p-4  flex  hover:bg-navy rounded-xl  text-babyblue'}
          >
            {item.label}
          </NavLink>
        ))}
              </ul>
            </div>
          </motion.div>
        
      </AnimatePresence>

   
   </>
  );
}

export default SideBar;
