import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useApi } from '../../store/ApiContext';

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

const Recommendations = ({ id }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const { Recommendations, fetchMoviesRecommendations } = useApi();

  useEffect(() => {
    if (id) {
      fetchMoviesRecommendations({ id });
    }
  }, [id]);

  return (
    <div className='lg:max-w-[1600px] max-w-[410px] py-16  p-2 '>
      <h1 className="text-babyblue text-3xl mb-8">RECOMMENDATIONS</h1>
      <Slider {...settings}>
        {Recommendations.map((item, index) => (
          <Link
            key={item.id}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className="relative "
            to={`/${item.type === "tv" ? "tv" : "movie"  }/${item.id}`}
          >
            <img
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt={item.title}
              className="cursor-pointer rounded-xl lg:w-[350px] md:w-[290px] w-[190px] lg:h-[500px] md:h-[400px] h-72"
            />
            {hoveredItemId === item.id && (
              <p className="absolute top-6 left-0 bg-navy p-4 text-center rounded-r-3xl text-babyblue text-lg font-bold ">
                {item.media_type}
              </p>
            )}
                   <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4 text-center ">{item.title ||item.original_title}</h1>

          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Recommendations;
