import React from 'react';
import { AiFillStar } from 'react-icons/ai'; 
import { dummyData } from '../../constants';
import { Link } from 'react-router-dom';

const Tv = () => {
  const tvShows = dummyData.filter(show => show.type === 'tv');

  return (
    <section className='p-20 pt-28'>
      <div className="flex flex-col">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {tvShows.map(show => (
            <TvShowItem key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TvShowItem = ({ show }) => {
  return (
<Link to={`/tv/${show.id}`}>
<div className="relative">
      <div className="h-[500px] w-full relative overflow-hidden shadow-lg">
        <img src={show.posterUrl} alt={show.title} className="object-cover h-full w-full rounded-lg" />
      </div>
      <div className="pt-8 text-babyblue">
        
          <h2 className="text-4xl font-bold mb-2">{show.title}</h2>
          <div className="flex items-center gap-2">
           <span className="text-2xl">{show.rating}</span>
                  <AiFillStar  color={'gold' }  size={30}/> 
          </div>

      </div>
    </div>
</Link>
  );
};

export default Tv;
