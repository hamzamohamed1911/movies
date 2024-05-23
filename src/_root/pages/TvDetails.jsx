import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData, slides } from "../../constants";
import Details from '../components/Details';
import Slider from "react-slick";
import Recommendtions from '../components/Recommendtions';
import Cast from '../components/Cast';
import Similar from '../components/Similar';

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

  return (<>
    <section className='bg-gradient-to-b from-transparent to-black h-full lg:py-20'>
        <Details item={item} />
        <div className='lg:p-28  p-4 '>
        <div className="lg:max-w-4xl max-w-xl lg:px-4 p-10">
            <h1 className="text-white md:text-4xl text-2xl py-14">DESCRIPTION</h1>
            <p className="lg:text-2xl text-lg font-light text-babyblue">
              The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.
              
            </p>
          </div>
          <div className=' lg:flex lg:justify-between'>
          <div className='flex justify-center'>
            <Cast settings={settings} />

            </div>
            <div className='flex justify-center'>
            <Similar settings={settings} />

            </div>       
           </div>

       <div className='flex justify-center'>
       <Recommendtions  />
       </div>
        </div>
   </section>
  </>)
};

export default TvDetails;
