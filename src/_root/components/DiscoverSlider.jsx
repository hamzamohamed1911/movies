import React, { memo, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const DiscoverSlider = memo(({ label, discover }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='lg:max-w-[1200px] max-w-[350px] py-10 '>
      <h1 className="text-babyblue lg:text-7xl md:text-5xl text-5xl mb-8 text-bold">{label}</h1>
      <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">
        {isLoading ? (
          <Slider {...settings} className="space-x-4 ">
          {Array(4).fill().map((_, index) => (
              <div key={index} className="relative w-full px-2 rounded-2xl ">
                <Skeleton  className=" rounded-2xl lg:h-[380px] lg:w-[260px] h-[240px] w-[280px]" />
                <Skeleton height={20} width={100} style={{ marginBottom: 12 ,marginTop: 12 }} />

              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings} className="space-x-4 ">
            {discover.map((item) => (
          <DiscoverSliderItem key={item.id} item={item} setHoveredItemId={setHoveredItemId} hoveredItemId={hoveredItemId} />
            ))}
          </Slider>
        )}
      </SkeletonTheme>
      <div className="bg-navy h-1 "></div> 
    </div>
  );
});


const DiscoverSliderItem = memo(({ item, setHoveredItemId, hoveredItemId }) => {
  return (
    <div
      onMouseEnter={() => setHoveredItemId(item.id)}
      onMouseLeave={() => setHoveredItemId(null)}
      className="relative w-full px-2 rounded-xl transition-transform duration-500 transform hover:scale-95"
    >
      <Link to={`/${item.media_type === "tv" ? "tv" : "movie"}/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
          alt={item.title}
          className="cursor-pointer rounded-xl lg:h-[400px] lg:w-[280px] h-[240px] w-[280px]"
        />
      </Link>
      {hoveredItemId === item.id && (
        <div>

        <p className="absolute top-6 left-2 bg-navy lg:p-4 p-1 w-20 text-center rounded-r-3xl text-babyblue text-lg font-bold">
          {item.type}
        </p>
       
        
        </div>

       
      )}
      <h1 className="text-babyblue lg:text-3xl md:text-xl text-lg text-bold mb-2 p-2 text-center">
        {item.original_title ? item.original_title : item.name}
      </h1>
    </div>
  );
});

export default DiscoverSlider;
