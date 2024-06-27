import  { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';


const ShowSeasons = ({ showId }) => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);


  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);


  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc',
          },
        };
        const response = await fetch(`https://api.themoviedb.org/3/tv/${showId}`, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSeasons(data.seasons);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching seasons:', error);
        setLoading(false);
      }
    };

    fetchSeasons();
  }, [showId]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!seasons.length) {
    return <div className="text-center text-red-500">No seasons available.</div>;
  }

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:max-w-xl max-w-sm mx-auto ">
        <h1 className='text-babyblue lg:text-7xl text-4xl text-center pb-5'> SEASONS </h1>
      <Slider {...settings}>
        {seasons.map((season) => (
          <div
            key={season.id}
            className="text-babyblue bg-gradient-to-b from-transparent to-slate-950   p-4 rounded-lg shadow-lg "
            
          >
      
              <img
                src={`https://image.tmdb.org/t/p/w400${season.poster_path}`}
                alt={`Season ${season.season_number}`}
                className="w-full  h-[400px]  object-contain rounded-lg mb-4"
              />
      
            
            <div className='p-6'>
            <h2 className="text-3xl font-bold text-babyblue mb-2">Season {season.season_number}</h2>
            <p className="text-babyblue mb-1"><strong className='text-blue'>Episodes: </strong> {season.episode_count}</p>
            <p className="text-babyblue mb-3"><strong className='text-blue'>Air Date:</strong> {new Date(season.air_date).getFullYear()}</p>

            <p className='lg:text-xl text-md font-light'>
                  {showFullDescription ? (
                        season.overview
                                    ) : (
                                     <>
                                {season.overview.slice(0, 130)}
                                {season.overview.length > 130 && '...'}
                                   </>
                                                )}
           {season.overview.length > 130 && (
       <button className="text-blue font-bold" onClick={toggleDescription}>
          {showFullDescription ? ' Less' : ' More'}
      </button>
  )}
</p>            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowSeasons;
