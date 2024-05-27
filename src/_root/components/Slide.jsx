import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import Button from './Button.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const Slide = ({ id, title, posterUrl, rating, description ,type}) => {
  const navigate = useNavigate();

 const handleNavigate = ()=>{
  navigate(`/${type === "tv" ? "tv" : "movie"}/${id}`);
 }
  
return<>
  <div className="relative">
  <img
    src={posterUrl}
    alt={title}
    className="w-full relative h-[400px] lg:h-[400px] object-cover rounded-tl-[50px]"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-tl-[50px]">
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col lg:p-14 p-10 lg:space-y-5  space-y-3"
    >
      <h2 className="text-babyblue  font-semibold lg:text-6xl md:text-4xl text-4xl">{title}</h2>
      <div className="flex items-center gap-2">
        <span className="lg:text-3xl md:text-2xl sm:text-xl text-babyblue">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <AiFillStar
            key={i}
            color={i < Math.round(rating / 2) ? "gold" : "grey"}
            className="lg:h-10 lg:w-10 h-8 w-8"
          />
        ))}
      </div>
      <div className="container">
        <div className="lg:w-[500px] md:w-[300px] sm:w-[200px]">
          <p className="text-babyblue font-light lg:text-xl md:text-xl sm:text-lg mb-2">{description}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button normal label="Play Trailer" />
        <Button handleClick={handleNavigate} normal backgroundColor label="More Details" />
      </div>
    </motion.div>
  </div>
</div>
  </>

 }

export default Slide;
