import React, { useState } from 'react'
import { dummyData } from '../../constants';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';

const Movies = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;
  const movieShows = dummyData.filter(show => show.type === 'movie');
  const records = [...movieShows.slice(firstIndex ,lastIndex)];
  const nPage = Math.ceil(movieShows.length / limit);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  return (
    <section className='p-20 pt-28'>
  <div className=' pb-8'>
      <FilteredHeader label="All Movies" />
      <Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers}/>

</div>
      <div className="flex flex-col">

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {records.map(show => (
            <TvShowItem key={show.id} show={show} />
          ))}

        </div>
<div className='pt-8'>
<Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers}/>

</div>
      </div>
    </section>
  );
};

const TvShowItem = ({ show }) => {
  return (

<div className="relative">

      <div className="h-[440px] w-[280px]  relative overflow-hidden shadow-lg">
      <Link to={`/movie/${show.id}`}>
        <img src={show.posterUrl} alt={show.title} className="object-cover h-full w-full rounded-lg" />
        </Link>
      </div>
      <div className="pt-8 text-babyblue">
        
          <h2 className="text-4xl font-bold mb-2">{show.title}</h2>
          <div className="flex items-center gap-2">
           <span className="text-2xl">{show.rating}</span>
           {[...Array(5)].map((_, i) => (
  <AiFillStar
    key={i}
    color={i < Math.floor(show.rating) ? 'gold' : (i === Math.floor(show.rating) && show.rating % 1 !== 0 ? 'gold' : 'grey')}
    size={30}
    aria-label={`${i < Math.floor(show.rating) ? 'gold' : (i === Math.floor(show.rating) && show.rating % 1 !== 0 ? 'gold' : 'grey')} star`}
  />
))}


          </div>

      </div>
      
    </div>

  );
};

export default Movies
