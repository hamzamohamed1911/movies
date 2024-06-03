import React, { useState, useEffect, useCallback, memo } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { FaPlay, FaStar } from 'react-icons/fa';
import { useApi } from '../../store/ApiContext.jsx';
import Button from './Button.jsx';
import SliderItems from './SliderItems';
import { useNavigate } from 'react-router-dom';

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Slider = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { TrendingData } = useApi();
  const [showFullDescription, setShowFullDescription] = useState(false);
const navigate = useNavigate();


  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TrendingData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [TrendingData]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TrendingData.length - 1 ? 0 : prevIndex + 1
    );
  }, [TrendingData]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TrendingData.length - 1 : prevIndex - 1
    );
  }, [TrendingData]);
 

  return (
    <div className="h-full relative">
      {TrendingData.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute w-full ${index === currentIndex ? 'block' : 'hidden'}`}
          initial="hidden"
          animate={index === currentIndex ? "visible" : "hidden"}
          variants={slideVariants}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
            alt={slide.title}
            className="h-screen w-full object-cover object-both"
            loading="lazy"
          />
          <motion.div
            className="absolute bottom-0 lg:p-24 p-14 md:w-1/3 w-full h-full bg-black md:bg-opacity-5 bg-opacity-30 md:bg-gradient-to-l from-transparent to-black text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold py-8">
              {slide.title}
            </h1>
            <p className='lg:text-xl text-md font-light'>
                  {showFullDescription ? (
                        slide.overview
                                    ) : (
                                     <>
                                {slide.overview.slice(0, 150)}
                                {slide.overview.length > 150 && '...'}
                                   </>
                                                )}
  {slide.overview.length > 150 && (
    <button className="text-blue font-bold" onClick={toggleDescription}>
      {showFullDescription ? ' Less' : ' More'}
    </button>
  )}
</p>
            <div className="flex pt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.round(slide.vote_average / 2) ? 'gold' : 'grey'}
                  size={22}
                />
              ))}
            </div>
            <div className="">
          <div className="flex gap-3 lg:py-10 py-8">
            <Button  handleClick={()=> navigate(`/${slide.media_type === "tv" ? "tv" : "movie" }/${slide.id} `)} normal backgroundColor label="More Details" />
            <Button normal icon={<FaPlay />} label="Watch trailer" />
          </div>
        </div>
          </motion.div>
          
        </motion.div>
      ))}
      <div className="absolute lg:bottom-0 bottom-6 left-0 w-full">
      <div className="gap-3 flex lg:p-20 p-12">
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
        <div className="lg:py-4 pb-2 mx-auto">
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
  );
});

export default Slider;
