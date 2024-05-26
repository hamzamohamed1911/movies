import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItems = ({ slides, currentIndex, setCurrentIndex }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    responsive: [
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
   
    ],
  };

  return (
    
      <Slider {...settings} className="space-x-4 ">
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <img
              src={slide.posterUrl}
              alt={slide.title}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-md lg:h-52 lg:w-56  w-32 h-36 ${
                currentIndex === index ? "border-[4px] border-navy" : ""
              }`}
            />
          </div>
        ))}
      </Slider>
    
  );
};

export default SliderItems;
