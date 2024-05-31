import React from 'react';
import { Link } from 'react-router-dom'; 
import { useApi } from '../../store/ApiContext';

const Trending = () => {
  const { TrendingData } = useApi();


  const trendingMovie = TrendingData.find(item => item.media_type === 'movie');
  const trendingTVShow = TrendingData.find(item => item.media_type === 'tv');

  return (
    <div className="lg:p-10 p-2 lg:fixed items-center h-full flex flex-col lg:w-1/4">
      {trendingMovie && (
        <div className='text-center mb-6'>
          <h2 className="text-4xl text-babyblue mb-6">Trending Movie</h2>
          <Link to={`/movie/${trendingMovie.id}`}>
            <div className='flex justify-center'>
              <img
                src={`https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`}
                alt={trendingMovie.title}
                className="lg:w-[300px] lg:h-[220px] h-[300px] w-[200px] rounded-lg hover:shadow-lg"
              />
            </div>
          </Link>
          <h1 className='text-babyblue text-3xl pt-3'>{trendingMovie.title}</h1>
        </div>
      )}

      {trendingTVShow && trendingMovie && (
        <>     
         <div className="bg-blue h-1 w-20"></div> 
         <div className='my-6'></div>
        </>
       
        
      )}

      {trendingTVShow && (
        <div className='text-center'>
          <h2 className="text-4xl text-babyblue mb-6">Trending TV Show</h2>
          <Link to={`/tv/${trendingTVShow.id}`}>
            <div className='flex justify-center'>
              <img
                src={`https://image.tmdb.org/t/p/original${trendingTVShow.backdrop_path}`}
                alt={trendingTVShow.name}
                className="lg:w-[300px] lg:h-[220px] h-[300px] w-[200px] rounded-lg hover:shadow-lg"
              />
            </div>
          </Link>
          <h1 className='text-babyblue text-3xl pt-3'>{trendingTVShow.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Trending;
