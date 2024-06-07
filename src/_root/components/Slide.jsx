import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import Button from './Button.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const Slide = ({ id, title, backdrop_path , poster_path, vote_average, overview ,media_type ,name}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  
  const navigate = useNavigate();
  
  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

 const handleNavigate = ()=>{
  navigate(`/${media_type === "tv" ? "tv" : "movie"}/${id}`);
 }
  
return<>
  <div className="relative">
  <img  src={`https://image.tmdb.org/t/p/original${backdrop_path ||poster_path}`}  alt={title ||name} className="w-full relative h-[400px] lg:h-[400px] object-fill rounded-tl-[50px]"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-tl-[50px]">
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col lg:p-14 p-10 lg:space-y-5  space-y-3"
    >
      <h2 className="text-babyblue  font-semibold lg:text-6xl md:text-4xl text-4xl">{title ||name}</h2>
      
      <div className="flex items-center gap-2">
        <span className="lg:text-3xl md:text-2xl sm:text-xl text-babyblue">{vote_average}</span>
        {[...Array(5)].map((_, i) => (
          <AiFillStar
            key={i}
            color={i < Math.round(vote_average / 2) ? "gold" : "grey"}
            className="lg:h-10 lg:w-10 h-8 w-8"
          />
        ))}
      </div>
      <div className="container">
        <div className="lg:w-[500px] md:w-[300px] sm:w-[200px]">
        <p className="text-babyblue font-light lg:text-xl md:text-xl sm:text-lg mb-2">
              {showFullDescription ? (
                overview
              ) : (
                <>
                  {overview.slice(0, 150)}
                  {overview.length > 150 && '...'}
                </>
              )}
              {overview.length > 150 && (
                <button className="text-blue font-bold" onClick={toggleDescription}>
                  {showFullDescription ? ' Less' : ' More'}
                </button>
              )}
            </p>       
             </div>
      </div>
      <div className="flex gap-4">
        <Button handleClick={() => navigate(`/${media_type === 'tv' ? 'tv' : 'movie'}/trailer/${id}`)} normal label="Play Trailer" />
        <Button handleClick={handleNavigate} normal backgroundColor label="More Details" />
      </div>
    </motion.div>
  </div>
</div>
  </>

 }

export default Slide;
