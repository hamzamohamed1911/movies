import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, getDocs, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { useAuth } from './Auth-context';
import { firestore } from '../firebase/config';
import { motion, AnimatePresence } from 'framer-motion';

const ComponentContext = createContext();

const ComponentProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [notification, setNotification] = useState('');
  const [open, setOpen] = useState(false);

  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const fetchWatchlist = async () => {
        try {
          const watchlistCollection = collection(firestore, 'users', authUser.uid, 'watchlists');
          const watchlistSnapshot = await getDocs(watchlistCollection);
          const watchlistData = watchlistSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setWatchlist(watchlistData);
        } catch (error) {
          console.error("Error fetching watchlist: ", error);
        }
      };
      fetchWatchlist();
    }
  }, [authUser]);

  const addToWatchlist = async (movie) => {
    try {
      if (!watchlist.some((item) => item.id === movie.id)) {
        setWatchlist([...watchlist, movie]);
        if (authUser) {
          await setDoc(doc(firestore, 'users', authUser.uid, 'watchlists', movie.id.toString()), movie);
        }
      }
    } catch (error) {
      console.error("Error adding to watchlist: ", error);
    }
  };

  const removeFromWatchlist = async (movieId) => {
    try {
      setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
      if (authUser) {
        await deleteDoc(doc(firestore, 'users', authUser.uid, 'watchlists', movieId.toString()));
      }
    } catch (error) {
      console.error("Error removing from watchlist: ", error);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const value = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    showNotification,
    setOpen,
    open
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
