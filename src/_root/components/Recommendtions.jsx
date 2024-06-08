import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Recommendations = ({ recommendation }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='lg:max-w-screen-2xl max-w-[410px] py-16   '>
      <h1 className="text-babyblue text-3xl mb-8">RECOMMENDATIONS</h1>
      <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">
        {isLoading ? (
          <Slider {...settings}>
            {Array(4).fill().map((_, index) => (
              <div key={index} >
                <Skeleton height={200} width={160}  className="rounded-xl lg:w-[340px] md:w-[280px] w-[140px] lg:h-[500px] md:h-[400px] h-64 " />
                <Skeleton height={20} width={100} style={{ marginTop: 12 }} />
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {recommendation.map((item) => (
              <Link
                key={item.id}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="relative "
                to={`/${item.media_type === "tv" ? "tv" : "movie"}/${item.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
                  alt={item.title}
                  className="cursor-pointer rounded-xl w-auto lg:h-[500px] md:h-[400px] h-72"
                />
                {hoveredItemId === item.id && (
                  <p className="absolute top-6 left-0 bg-navy p-4  rounded-r-3xl text-babyblue text-lg font-bold ">
                    {item.media_type}
                  </p>
                )}
                <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4  ">
                  {item.title || item.original_title}
                </h1>
              </Link>
            ))}
          </Slider>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Recommendations;
