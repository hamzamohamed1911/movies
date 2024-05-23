import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { dummyData } from "../../constants";



const SearchComponent = ({ isVisible, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    const filteredResults = dummyData.filter(item =>
      item.title.toLowerCase().includes(newQuery.toLowerCase())
    );
    

    setResults(filteredResults);
  };

  return (
    <motion.div
    initial={{ opacity: 0, width: 0 }}
    animate={{ opacity: isVisible ? 1 : 0, width: isVisible ? '350px' : 0 }}
    transition={{ duration: 0.5 }}
    className="relative">
   {isVisible&& ( 
   <div className="flex items-center border-b border-babyblue">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="outline-none bg-transparent text-babyblue pl-2 w-full"
        placeholder="Search..."
      />
      <button onClick={onClose} className="ml-2">
        <IoMdClose className="h-6 w-6 text-babyblue" />
      </button>
    </div>)}

    {query && isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-1 w-full bg-primary rounded-lg z-10 max-h-[400px] overflow-y-scroll"
      >
        {results.map((result, index) => (
          <Link 
          key={index} 
          to={`/${result.type === 'tv' ? 'tv' : 'movie'}/${result.id}`} 
          className="flex items-center p-6 border-b border-gray-700 hover:bg-gray-800"
        >
            <img 
              src={result.posterUrl} 
              alt={result.title} 
              className="w-12 h-16 object-cover mr-3"
            />
            
            <div className="flex-1">
              <h3 className="text-babyblue font-semibold">{result.title}</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    color={i < Math.round(result.rating / 2) ? 'gold' : 'grey'}
                    size={20}
                  />
                ))}
                <span className="ml-2 text-babyblue">{result.rating}</span>
              </div>
              
            </div>
            <p className="bg-navy p-2 text-center rounded text-babyblue text-lg font-bold">{result.type} </p>
          </Link>
        ))}
      </motion.div>
    )}
  </motion.div>
  );
};

export default SearchComponent;
