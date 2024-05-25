import React, { useState } from 'react';
import Slider from 'react-slick';
import { dummyData } from '../../constants';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

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
        slidesToShow: 2,
      },
    },
   
  ],
};

const DiscoverSlider = ({ label }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <div className='lg:max-w-[1200px] max-w-[350px] py-10 '>
      <h1 className="text-babyblue lg:text-7xl md:text-5xl text-5xl mb-8 text-bold">{label}</h1>
      <Slider {...settings} className="space-x-4 ">
        {dummyData.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className="relative w-full px-2 rounded-xl transition-transform duration-500 transform hover:scale-95"
          >
            <Link to={`/${item.type === "tv" ? "tv" : "movie"}/${item.id}`}>
              <img
                src={item.posterUrl}
                alt={item.title}
                className="cursor-pointer rounded-xl  lg:h-[440px] lg:w-[280px] h-[240px] w-[280px] " />
            </Link>
            {hoveredItemId === item.id && (
              <p className="absolute top-6 left-2 bg-navy lg:p-4 p-2 w-20 text-center rounded text-babyblue text-lg font-bold">
                {item.type}
              </p>
            )}
       
      <h1 className="text-babyblue lg:text-3xl md:text-xl text-lg text-bold mb-2 p-2 text-center">{item.title}</h1>
                 
              
          </div>
        ))}
      </Slider>
      <div className="bg-navy h-1 "></div> 
    </div>
  );
};

export default DiscoverSlider;
