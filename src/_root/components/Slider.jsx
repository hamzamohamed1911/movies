import  { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { slides } from '../../constants';
import { motion } from 'framer-motion';
import Button from './Button.jsx';
import SliderItems from './SliderItems';
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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

  return (
    <>
      <div className="h-full relative  overflow-hidden ">
        {slides.map((slide, index) => (
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
                src={slide.image}
                alt={slide.name}
                className="h-screen w-full object-cover object-both"
              />
              {/* el setara */}
              <div className='absolute md:w-1/3 w-full h-full top-0 bottom-0 left-0  bg-black md:bg-opacity-60 bg-opacity-20  text-white lg:p-20 p-12'>
                <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold py-8">{slide.name}</h1>
                <div className="flex">
                  {/* In this specific case, we're using Array.from to create an array of a certain length (equal to the slide.rate), and we're mapping over it to render the rate icons. The map function in JavaScript provides two arguments: the current element being processed and its index. Since we don't need the current element (we're just interested in its index), we can use _ as a placeholder to indicate that we're ignoring it. */}
            {Array.from({ length: slide.rate }).map((_, index) => (
               <FaStar size={20} color='gold'  key={index}/> ))}
          </div>
                <p className="max-w-xs text-s md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl font-light py-3">{slide.description}</p>
              </div>
            </motion.div>
            
          </div>

          
        ))}
        <div className="absolute  lg:bottom-0 bottom-6 left-0 w-full text-center">
        <div className='lg:p-20 p-14'>

        <div className='flex gap-3 lg:py-10 py-8 '>
            <Button normal backgroundColor label="Watch trailer" />
            <Button normal icon={<FaPlay />} label="watch now" />
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

        <div className='py-8 mx-auto container  '>

        <SliderItems
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          slides={slides}
        />
        </div>
        </div>
     
      </div>
    </>
  );
};

export default Slider;
