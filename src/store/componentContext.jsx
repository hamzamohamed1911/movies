import React, { createContext, useState, useEffect, useContext } from 'react';

const ComponentContext = createContext();

const ComponentProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

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

  const value = {
    open,
    setOpen,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentProvider;
export const useComponentContext = () => useContext(ComponentContext);
