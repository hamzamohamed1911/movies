import React, { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { slides } from '../../constants';
import { motion } from 'framer-motion';
import Button from './Button';
import SliderItems from './SliderItems';
import { FaPlay } from "react-icons/fa";

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  

   
 
  return ( <>
   <div className="h-full relative  overflow-hidden ">
      
      {slides.map((slide ,index) => (
          <div
          key={slide.id} 
           className="w-screen absolute top-0 left-0 p"  >
       <motion.div
  key={slide.id}
  className="w-full absolute top-0 left-0"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: index === currentIndex ? 1 : 0, scale: 1 }}
  variants={slideVariants}
  transition={{ duration: 0.8, ease: 'easeInOut' }}
>

                <img
                src={slide.image}
                alt={slide.name}
                className="h-screen w-full object-cover object-both" 
              />
         
         {/* el setara */}

        <div className='absolute h-full top-0 bottom-0 left-0  md:w-1/3 w-full bg-black md:bg-opacity-60 bg-opacity-20 bg-blend-color text-white lg:p-20 p-14  '>
        <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold py-8">{slide.name}</h1>
        <span> rate</span> <span> rate</span> <span> rate</span>
        <p className="max-w-xs text-s md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl font-light py-3">{slide.description}</p>
        </div>

    </motion.div>


          </div>
          
        ))}
         
        <div className="absolute lg:p-20 p-14 lg:top-1/3 top-1/3  ">

        <div className='flex gap-3 py-3 '>
                <Button backgroundColor label="Watch trailer"/> 
                <Button   label="watch now" icon={<FaPlay/>}/> 
                
              
          </div>
       <div className='gap-3 flex lg:py-20 py-16'>
       <Button
            backgroundColor="transparent"
            label={<IoIosArrowBack className="text-white  hover:text-opacity-70" />}
            handleClick={prevSlide}
          />
          <Button
            backgroundColor="transparent"
            label={<IoIosArrowForward className="text-white hover:text-opacity-70" />}
            handleClick={nextSlide}
          />
       </div>
        </div>


      <div className='absolute bottom-6 '  >
   <SliderItems prevSlide={prevSlide} nextSlide={nextSlide} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} slides={slides}/>
        
       </div>

    </div>
   </>
  );
};

export default Slider;
