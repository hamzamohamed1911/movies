import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { FaPlay, FaStar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import SliderItems from '../components/SliderItems.jsx';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../store/ApiContext.jsx';
import { useComponentContext } from '../../store/componentContext.jsx';
import Button from '../components/Button.jsx';

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();
  const { fetchTrending } = useApi();
  const intervalRef = useRef(null);
  const { notification } = useComponentContext();

  const { data: TrendingData = [], isLoading, isError, error } = useQuery({
    queryKey: ['trendingData'],
    queryFn: fetchTrending,
  });

  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TrendingData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(intervalRef.current);
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

  if (isError) {
    return <h1 className='text-7xl text-gray-200'>Error loading data...</h1>;
  }

  return (
    <div className="h-screen relative">
      {notification && (
        <motion.div
          className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          {notification}
        </motion.div>
      )}
      {TrendingData.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute w-full ${index === currentIndex ? 'block' : 'hidden'}`}
          initial="hidden"
          animate={index === currentIndex ? 'visible' : 'hidden'}
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
            className="absolute bottom-0 lg:p-20 p-14 md:w-1/3 w-full h-full bg-black md:bg-opacity-5 bg-opacity-30 md:bg-gradient-to-l from-transparent to-black text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold py-8">
              {slide.title || slide.name}
            </h1>
            <p className="lg:text-xl text-md font-light">
              {showFullDescription ? (
                slide.overview.slice(0,250)
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
              <div className="flex gap-3 lg:py-8 py-6">
                <Button handleClick={() => navigate(`/${slide.media_type === 'tv' ? 'tv' : 'movie'}/${slide.id}`)} normal backgroundColor label="More Details" />
                <Button handleClick={() => navigate(`/${slide.media_type === 'tv' ? 'tv' : 'movie'}/trailer/${slide.id}`)} normal icon={<FaPlay />} label="Watch trailer" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
      <div className="absolute lg:bottom-0 bottom-6 left-0 w-full">
        <div className="gap-3 flex lg:p-20 py-12 p-12">
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
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
});

export default Home;
