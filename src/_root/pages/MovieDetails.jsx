import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import Recommendtions from '../components/Recommendtions';
import Similar from '../components/Similar';
import Cast from '../components/Cast';
import { useApi } from '../../store/ApiContext';


const MovieDetails = () => {
  const { movieId } = useParams();
  const {fetchMoviesDetails , moviesDetails}=useApi()
  useEffect(() => {
    fetchMoviesDetails({ moviesId: movieId });
}, [movieId]);
const [showFullDescription, setShowFullDescription] = useState(false);

const toggleDescription = useCallback(() => {
  setShowFullDescription((prev) => !prev);
}, []);

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (<>
    <section className='h-full '>
        
        <div className='lg:p-20 '>
        <Details item={moviesDetails} />
        <div className="lg:max-w-4xl max-w-xl lg:py-20 py-4 lg:px-4 lg:p-10 p-4">
            <h1 className="text-white md:text-4xl text-2xl pb-10">DESCRIPTION</h1>
            <p className="lg:text-2xl text-lg font-light text-babyblue">
  {moviesDetails?.overview ? (
    <>
      {showFullDescription ? (
        moviesDetails.overview
      ) : (
        <>
          {moviesDetails.overview.slice(0, 200)}
          {moviesDetails.overview.length > 200 && '...'}
        </>
      )}
      {moviesDetails.overview.length > 200 && (
        <button className="text-blue font-bold" onClick={toggleDescription}>
          {showFullDescription ? ' Less' : ' More'}
        </button>
      )}
    </>
  ) : (
    <span>No description available.</span>
  )}
</p>

          </div>
          <div className=' lg:flex lg:justify-between'>

          <div className='flex justify-center'>
            <Cast id={movieId} settings={settings} />
            </div>

            <div className='flex justify-center'>
            <Similar id={movieId} settings={settings} />
            </div>       
           </div>

       <div className='flex justify-center'>
       <Recommendtions id={movieId} />
       </div>
        </div>
   </section>
  </>)
};

export default MovieDetails;
