import React, { createContext, useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComponentContext = createContext();

const ComponentProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });
  const [notification, setNotification] = useState('');

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000); 
  };

  const value = {
    open,
    setOpen,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    showNotification,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-20 right-4 bg-blue text-white py-2 px-4 rounded shadow-lg z-50"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </ComponentContext.Provider>
  );
};

export default ComponentProvider;
export const useComponentContext = () => useContext(ComponentContext);
