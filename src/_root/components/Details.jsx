import React from 'react';
import { AiFillStar } from "react-icons/ai";
import Button from '../components/Button';
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Details = ({ item }) => {
  if (!item) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Item not found</h1>
      </div>
    );
  }

  return (
    <div className=" py-16">
      <div className="relative group">
        <img
          src={item.posterUrl}
          alt={item.title}
          className="w-full h-[500px] lg:h-[700px] object-cover rounded-tl-3xl"
        />
        <div className="absolute inset-0 p-6 lg:p-24 bg-gradient-to-b from-transparent to-black  flex flex-col justify-center items-center sm:items-start text-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center sm:flex-row space-y-6 sm:space-y-0 sm:space-x-20">
            <img
              src={item.posterUrl}
              alt={item.title}
              className="w-52 h-72 lg:w-[320px] lg:h-[460px] object-fill rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{item.title}</h2>
              <div className="flex justify-center sm:justify-start mb-4 text-lg">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    color={i < Math.round(item.rating / 2) ? 'gold' : 'grey'}
                    size={24}
                    aria-label={`${i < Math.round(item.rating / 2) ? 'gold' : 'grey'} star`}
                  />
                ))}
                <span className="ml-3 text-2xl">{item.rating} / 10</span>
              </div>
           
              <p className="text-base sm:text-lg mb-4">{item.description}</p>
              <div className="flex space-x-4 pt-8 justify-center sm:justify-start">
                <Button icon={<FaPlay />} normal label="Play Trailer" />
                <Button icon={<IoMdAdd />} backgroundColor normal label="Add to Watchlist" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
