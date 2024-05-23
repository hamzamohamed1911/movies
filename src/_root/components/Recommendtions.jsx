import React from 'react'
import Slider from 'react-slick'
import { slides } from '../../constants';

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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
   
  };
const Recommendtions = () => {
  return (
   
    <div className=' lg:max-w-[1200px] max-w-xl py-36'>
      <h1 className="text-white text-3xl mb-8">RECOMMENDATIONS</h1>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <img
              src={slide.posterUrl}
              alt={slide.title}
              className="cursor-pointer rounded-xl lg:w-80 lg:h-96  w-64 h-96"
            />
            <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default Recommendtions