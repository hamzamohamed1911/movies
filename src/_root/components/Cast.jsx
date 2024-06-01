import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Cast = ({ settings, cast }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:max-w-2xl py-6 p-2 max-w-[410px]">
    <SkeletonTheme baseColor="#1B262C" highlightColor="#1B263A ">

      <h1 className="text-babyblue lg:text-3xl text-2xl mb-8">CAST</h1>
        {isLoading ? (
        <div className='flex space-x-3'>
        {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Skeleton circle height={140} width={140} />
                <Skeleton height={20} width={100} style={{ marginTop: 10 }} />
              </div>
            ))}
            </div>
        ) : (
          cast ? (
            <Slider {...settings}>
              {cast.map((slide) => (
                <div key={slide.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${slide.profile_path}`}
                    alt={slide.name}
                    className="cursor-pointer rounded-full lg:w-40 lg:h-40 w-32 h-32"
                  />
                  <h1 className="text-babyblue lg:text-2xl text-lg font-bold p-4">
                    {slide.original_name || slide.name}
                  </h1>
                </div>
              ))}
            </Slider>
          ) : (
            <div>Cast not found</div>
          )
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Cast;
