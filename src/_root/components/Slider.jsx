import  { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { slides } from '../../constants';
import { motion } from 'framer-motion';
import Button from './Button.jsx';
import SliderItems from './SliderItems';
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useApi } from '../../store/ApiContext.jsx';


const slideVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {TrendingData}= useApi();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TrendingData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [TrendingData]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TrendingData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TrendingData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="h-full relative  overflow-hidden ">

        {TrendingData.map((slide, index) => (
          
          <div key={slide.id} className="w-screen absolute top-0 left-0 ">
          <motion.div
              key={slide.id}
              className="w-full absolute top-0 left-0"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: index === currentIndex ? 1 : 0, scale: 1 }}
              variants={slideVariants}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
          src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
          alt={slide.title}
                className="h-screen w-full object-cover object-both"
              />
              {/* el setara */}

           <div className='absolute md:w-1/3 w-full h-full  bottom-0  bg-black md:bg-opacity-5  bg-opacity-30 md:bg-gradient-to-l from-transparent to-black  text-white lg:p-20 p-14'>
                <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold py-8">{slide.title}</h1>
             <div className="flex">
             {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < Math.round(slide.vote_average/2 ) ? 'gold' : 'grey'}
                    size={20}
                  />
                ))}
             </div>

                <p className="max-w-xs text-s md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl font-light py-3">{slide.overview}</p>
           </div>
         </motion.div>
            
          </div>

          
        ))}
        <div className="absolute lg:bottom-0 bottom-6 left-0 w-full ">

        <div className='lg:p-20 p-14'>

        <div className='flex gap-3 lg:py-10 py-8 '>
            <Button normal backgroundColor label="More Details" />
            <Button normal icon={<FaPlay />} label="Watch trailer" />
        </div>

          <div className='gap-3 flex '>
            <Button
              normal
              backgroundColor="transparent"
              label={<IoIosArrowBack className="text-white hover:text-opacity-70" />}
              handleClick={prevSlide}
            />
            <Button
            normal
              backgroundColor="transparent"
              label={<IoIosArrowForward className="text-white hover:text-opacity-70" />}
              handleClick={nextSlide}
            />
          </div>
        </div>

        <div className='lg:py-6 py-4 mx-auto'>
        <SliderItems
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          slides={TrendingData}
        />
        </div>
        </div>
     
      </div>
    </>
  );
};

export default Slider;
