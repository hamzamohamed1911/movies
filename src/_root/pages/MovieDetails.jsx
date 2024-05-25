import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData} from "../../constants";
import Details from '../components/Details';
import Recommendtions from '../components/Recommendtions';
import Similar from '../components/Similar';
import Cast from '../components/Cast';


const MovieDetails = () => {
  const { movieId } = useParams();
  const item = dummyData.find((item) => item.id === parseInt(movieId));
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (<>
    <section className=' h-full lg:py-16'>
        <Details item={item} />
        <div className='lg:p-28   '>
        <div className="lg:max-w-4xl max-w-xl lg:px-4 p-10">
            <h1 className="text-white md:text-4xl text-2xl py-14">DESCRIPTION</h1>
            <p className="lg:text-2xl text-lg font-light text-babyblue">
                {item.description}              
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

export default MovieDetails;
