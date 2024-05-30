import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItems = ({  slides,currentIndex, setCurrentIndex }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    arrows: false,
    responsive: [
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
          slidesToScroll: 4, },
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      
   
    ],
  };
  

  return (
    
      <Slider {...settings} >
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <img
          src={`https://image.tmdb.org/t/p/original${slide.poster_path}`}
          alt={slide.title}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-md lg:h-72 md:h-56 h-48  lg:w-60 md:w-48  w-36  ${
                currentIndex === index ? "border-[4px] border-navy" : ""
              }`}
            />
          </div>
        ))}
      </Slider>
    
  );
};

export default SliderItems;
