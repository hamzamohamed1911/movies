import  { createContext, useState  ,useContext} from 'react'
const ComponentContext = createContext()

const ComponentProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    const movieExists = watchlist.some((item) => item.id === movie.id);
    if (!movieExists) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    }
  };
  
  

  const removeFromWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieId)
    );
  };

  const value ={
    open,
    setOpen,
    watchlist, 
    addToWatchlist,
    removeFromWatchlist 

  }
  return (
    <ComponentContext.Provider value={value}>
       {children}
    </ComponentContext.Provider>
    
  )
}

export default ComponentProvider;
export const useComponentContext = () => useContext(ComponentContext);
