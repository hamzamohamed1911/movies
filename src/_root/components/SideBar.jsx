import { navLinks } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { moviesLogo } from '../../assets';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import DropdownButton from "./DropdownButton.jsx";

const SideBar = () => {  
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsOpen((open)=>!open);
  };
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  
  return (
   <>
        <div className="absolute bottom-1/2 left-0">
          {!isOpen && (
            <button onClick={toggleSidebar}><IoIosArrowForward className= "fixed text-babyblue " size={24} /></button>
          )}
        </div>
      <AnimatePresence>
       
         {isOpen&&  <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, type: 'ease' }}
            className=" fixed h-full bg-primary  flex flex-col justify-between  rounded-tr-3xl rounded-br-3xl  w-80 z-50 "
          >
              <button onClick={toggleSidebar} className="absolute bottom-1/2 left-80 text-babyblue rounded-md">
              <IoIosArrowBack size={24} />
            </button>


            <div className="px-4 py-6">
              <span className="grid lg:h-10 lg:w-32 sm:h-5 sm:w-16 place-content-center rounded-lg text-xs cursor-pointer text-gray-600">
       <Link to='/' className="flex gap-1  h-12  cursor-pointer">
          <img src={moviesLogo} className=" h-10 object-contain"/>
          <span className=" text-babyblue flex self-center text-xl font-semibold">
          Movie
          </span>
      </Link>
              </span>
              <ul className="pt-6 space-y-1">
              {navLinks.map(item => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive ?'p-5 flex rounded-xl text-3xl font-semibold  border-[1px] border-navy ease-in duration-300   text-babyblue ' : 'ease-out duration-300 text-3xl p-5  flex  hover:bg-navy rounded-xl  text-babyblue'}
          >
            {item.label}
          </NavLink>
        ))}

{/* 
        <div className="flex flex-col px-4 py-6  text-3xl  ">
                  <h1 className="text-blue">
                      GENRE
                  </h1>
                  <DropdownButton
        label="TV"
        isOpen={openDropdown === 'TV'}
        toggleDropdown={() => toggleDropdown('TV')}
      />
      <DropdownButton
        label="Movies"
        isOpen={openDropdown === 'Movies'}
        toggleDropdown={() => toggleDropdown('Movies')}
      />
          </div> */}

              </ul>
              
        
            </div>
          </motion.div>}
        
      </AnimatePresence>

   
   </>
  );
}

export default SideBar;
