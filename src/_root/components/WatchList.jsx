import React, { useState } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WatchList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(opened=>!opened);
  };

  return (
    <div className="relative ">
      <button
        className="flex gap-1 hover:text-blue  p-1 rounded"
        onClick={toggleDropdown}

      >
        <BsFillBookmarkPlusFill className="fill-blue" size={28} />
        <span className="flex self-center text-sm font-bold gap-1">
          WatchList
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute  top-10 right-0 mt-4 text-lg w-96 bg-navy text-white rounded shadow-lg"
        >
          <Link className="block w-full py-2 px-4 text-left hover:bg-blue">
            movie 
          </Link>
          <Link className="block w-full py-2 px-4 text-left hover:bg-blue">
            tv
          </Link>
          <Link className="block w-full py-2 px-4 text-left hover:bg-blue">
            movie 
          </Link>
          <Link className="block text-center p-4 px-4  ">
           Show More
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default WatchList;
