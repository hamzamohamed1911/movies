import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import Button from '../components/Button';
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { useComponentContext } from '../../store/componentContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

const Details = ({ item }) => {
  const { addToWatchlist } = useComponentContext();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToWatchlist = () => {
    addToWatchlist(item);
  };

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#1B262C" highlightColor="#1B263A ">

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <Skeleton height={550} />
          </div>
          
        </div>
      </div>
      </SkeletonTheme>

    );
  }

  return (
    <div className="relative pt-20">
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={item.title}
        className="w-full lg:h-[600px] h-[550px] object-cover rounded-tl-[50px] "
      />
      <div className="absolute inset-0 p-4 lg:p-24 bg-gradient-to-b from-transparent to-slate-950 flex flex-col justify-center items-center sm:items-start text-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center sm:flex-row lg:space-y-6 space-y-4 sm:space-x-10">
          <img
            src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
            alt={item.title}
            className="w-auto h-72  pt-6 lg:h-[460px] object-fill rounded-2xl shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="lg:text-3xl text-2xl font-semibold mb-4">{item.title ||item.name}</h2>
            <div className="flex justify-center sm:justify-start mb-4 text-lg">
              {[...Array(5)].map((_, i) => (
                <AiFillStar
                  key={i}
                  color={i < Math.round(item.vote_average / 2) ? 'gold' : 'grey'}
                  size={30}
                  aria-label={`${i < Math.round(item.vote_average / 2) ? 'gold' : 'grey'} star`}
                />
              ))}
              <span className="ml-3 text-2xl">{item.vote_average} / 10</span>
            </div>
            <div className="flex space-x-4 pt-4 justify-center sm:justify-start">
              <Button  handleClick={()=> navigate(`/movie/trailer/${item.id}`)}  normal icon={<FaPlay />} label="Play Trailer" />
              <Button icon={<IoMdAdd />} backgroundColor normal label="Add to Watchlist" handleClick={handleAddToWatchlist} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
