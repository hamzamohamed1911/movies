import React from 'react';
import { Link } from 'react-router-dom'; 
import { dummyData } from '../../constants'; 

const Trending = () => {
  const { id: tvId, title: tvTitle, posterUrl: tvPosterUrl } = dummyData.find(item => item.type === 'tv') || {};
  const { id: movieId, title: movieTitle, posterUrl: moviePosterUrl } = dummyData.find(item => item.type === 'movie') || {};

  return (
    <div className="lg:p-10 p-2 lg:fixed items-center h-full flex flex-col  ">

      <div className='pb-6'>
        <h2 className="text-4xl text-babyblue mb-6">Trending TV Show</h2>
        {tvTitle && (
          <div className='text-center'>
            <Link to={`/tv/${tvId}`}>
              <div className='flex  justify-center'>
              <img src={tvPosterUrl} alt={tvTitle} className="lg:w-[300px] lg:h-[220px] h-[300px] w-[200px] rounded-lg hover:shadow-lg " />

              </div>
            </Link>
            <h1 className='text-babyblue text-3xl pt-3'>{tvTitle}</h1>
          </div>
        )}
      </div>
      <div className="bg-blue h-1 w-20"></div> 

      <div className='pt-6'>
        <h2 className="text-4xl text-babyblue mb-6">Trending Movie</h2>
        {movieTitle && (
          <div className='text-center'>
            <Link to={`/movie/${movieId}`}>
            <div className='flex  justify-center'>
              <img src={moviePosterUrl} alt={movieTitle} className="lg:w-[300px] lg:h-[220px] h-[300px] w-[200px] rounded-lg hover:shadow-lg " />

              </div>            </Link>
            <h1 className='text-babyblue text-3xl pt-3'>{movieTitle}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
