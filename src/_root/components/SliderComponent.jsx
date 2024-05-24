import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="container pt-12">
      <Slider {...settings} className="w-full">
        {data.map((item) => (
          <Slide key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
