import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useApi } from '../../store/ApiContext';

const MoviesAndTVShows = ({ personId }) => {
  const [mediaType, setMediaType] = useState('movie'); 
  const {fetchMedia ,mediaList} =useApi()

  useEffect(() => {
    fetchMedia({ personId: personId });
  }, [personId]);  

  
  const handleToggle = (type) => {
    setMediaType(type);
  };

  const filteredMediaList = mediaList.filter(media => {
    return media.media_type === mediaType;
  });

  return (
    <div className=" text-babyblue p-8 bg-gray-900">
 <h1 className='lg:text-7xl md:text-4xl text-3xl font-semibold text-blue'> Known For</h1>
 
 <div className="lg:text-3xl text-2xl py-10">
  <button
    className={`mr-4 focus:outline-none hover:text-blue transition duration-500 ease-in-out ${mediaType === 'movie' ? 'text-blue border-[1px] rounded-xl p-3 border-blue' : 'text-gray-400'}`}
    onClick={() => handleToggle('movie')}
  >
    Movies
  </button>
  <button
    className={`focus:outline-none transition duration-500 ease-in-out ${mediaType === 'tv' ? 'text-blue border-[1px] rounded-xl p-3 border-blue' : 'text-gray-400'}`}
    onClick={() => handleToggle('tv')}
  >
    TV Shows
  </button>
</div>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMediaList.map((media , index) => (
            <div
              key={index}
              className=" rounded-lg  shadow-lg "
            >
                <Link  to={`/${media.media_type === "tv" ? "tv" : "movie"}/${media.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w400${media.poster_path || media.backdrop_path }`}
                alt={media.title || media.name}
                className=" w-full lg:h-[500px] md:h-[400px] h-[400px] rounded-2xl object-fill"
              />
              </Link>
            <div className='p-6'> 
            <h1 className="text-xl font-semibold text-babyblue py-2">{media.title || media.name}</h1>
                    <p className="text-md text-blue-300 flex py-1 gap-2"><AiFillStar color="gold" size={20} />{media.vote_average} ({media.vote_count} votes)</p>
                
            </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default MoviesAndTVShows;
