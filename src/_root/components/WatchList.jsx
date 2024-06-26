import React, { useState } from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useComponentContext } from '../../store/componentContext';
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { Link } from 'react-router-dom';

const WatchList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { watchlist, removeFromWatchlist } = useComponentContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const determineMediaType = (item) => {
    return item.title ? 'movie' : 'tv';
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-white focus:outline-none"
        onClick={toggleDropdown}
      >
        <BsFillBookmarkPlusFill className="fill-blue" size={28} />
        <span className="text-md font-bold">( {watchlist.length} )</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-10 right-0 mt-2 lg:w-96 w-72 max-h-96 bg-navy rounded-lg shadow-lg overflow-y-scroll"
        >
          <div className="px-4 py-2">
            {watchlist.map((item, index) => (
              <div key={item.id} className={`flex items-center py-3 ${index !== watchlist.length - 1 ? 'border-b border-baby-blue' : ''}`}>
                <Link to={`/${determineMediaType(item)}/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-16 h-24 rounded-md mr-4"
                  />
                </Link>
                <div className="flex flex-col space-y-4 flex-1">
                  <h1 className="lg:text-xl text-lg font-semibold text-white">{item.title || item.name}</h1>
                  <p className="text-lg text-babyblue text-center bg-blue rounded-r-3xl h-8 w-20">{determineMediaType(item)}</p>
                </div>
                <button onClick={() => removeFromWatchlist(item.id)} className="focus:outline-none">
                  <MdOutlineBookmarkRemove size={20} className="text-gray-400 hover:text-white" />
                </button>
              </div>
            ))}
            {watchlist.length === 0 && (
              <div className="p-2 text-gray-400">Watchlist is empty</div>
            )}
          </div>
          <div className="bg-gradient-to-r from-navy to-transparent h-1 w-full"></div>
        </motion.div>
      )}
    </div>
  );
};

export default WatchList;
