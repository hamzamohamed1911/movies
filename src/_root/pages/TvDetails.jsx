import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, slides } from "../../constants";
import Details from '../components/Details';
import Slider from "react-slick";

const TvDetails = () => {
  const { tvId } = useParams();
  const item = dummyData.find((item) => item.id === parseInt(tvId));

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
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <section className='bg-gradient-to-b from-transparent to-black h-full lg:p-20  '>
        <Details item={item} />
        <div className='lg:p-28 '>
          <div className="lg:max-w-4xl max-w-xl lg:px-4 p-6">
            <h1 className="text-white md:text-4xl text-2xl py-14">DESCRIPTION</h1>
            <p className="lg:text-2xl text-lg font-light text-babyblue">
              The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.
              
            </p>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="w-[500px] py-14 p-4">
              <h1 className="text-white text-3xl mb-8">CAST</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-full w-36 h-36 mx-auto"
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-[500px] py-14 p-4">
              <h1 className="text-white text-3xl mb-8">SIMILAR</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-lg w-36 h-40 mx-auto"
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className='py-36 '>
            <div className='lg:w-[1200px] w-[500px] '>
              <h1 className="text-white text-3xl mb-8">RECOMMENDATIONS</h1>
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-xl lg:w-80 lg:h-96  w-64 h-96 "
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>   <section className='bg-gradient-to-b from-transparent to-black h-full lg:py-20  '>
        <Details item={item} />
        <div className='lg:p-28 '>
          <div className="lg:max-w-4xl max-w-xl lg:px-4 p-10">
            <h1 className="text-white md:text-4xl text-2xl py-14">DESCRIPTION</h1>
            <p className="lg:text-2xl text-lg font-light text-babyblue">
              The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.
              
            </p>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="w-[500px] py-14 p-4">
              <h1 className="text-white text-3xl mb-8">CAST</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-full w-36 h-36 mx-auto"
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-[500px] py-14 p-4">
              <h1 className="text-white text-3xl mb-8">SIMILAR</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-lg w-36 h-40 mx-auto"
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className='py-36 container'>
            <div className='lg:w-[1200px] w-[500px] p-4'>
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
          </div>
        </div>
   </section>
    </>
  );
};

export default TvDetails;
