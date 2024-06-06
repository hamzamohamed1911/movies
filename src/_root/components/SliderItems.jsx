import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const responsiveSettings = [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 7,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
];

const SliderItems = ({ slides, currentIndex, setCurrentIndex ,isLoading}) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    responsive: responsiveSettings,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={slide.id}>
          {isLoading ? (
                  <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">

            <Skeleton height={180} width={130} />
            </SkeletonTheme>

          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`}
              alt={slide.title}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-md lg:h-72 md:h-56 h-44 lg:w-60 md:w-48 sm:w-40 w-32 ${
                currentIndex === index ? "border-[4px] border-navy" : ""
              }`}
            />
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SliderItems;
