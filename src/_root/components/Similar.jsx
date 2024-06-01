import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Similar = ({ settings, similar }) => {
  return (
    <div className="lg:max-w-3xl max-w-[410px] py-6 p-2">
      <h1 className="text-babyblue text-2xl mb-8">SIMILAR</h1>
      {similar ? (
        <Slider {...settings}>
          {similar.map((slide) => (
            <div key={slide.id}>
              <Link to={`/${slide.media_type === "tv" ? "tv" : "movie"}/${slide.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${slide.poster_path || slide.logo_path}`}
                  alt={slide.title || slide.name}
                  className="cursor-pointer rounded-lg lg:w-40 lg:h-56 w-32 h-40"
                />
              </Link>
              <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4">
                {slide.title || slide.name}
              </h1>
            </div>
          ))}
        </Slider>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Similar;
