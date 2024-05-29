import React, { useState, useMemo, memo } from 'react';
import { dummyData } from '../../constants';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';
import SliderComponent from '../components/SliderComponent';

const Movies = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState(''); 
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;
  
  const movieShows = dummyData.filter(show => show.type === 'movie');
  const filteredmovieShows = useMemo(() => {
    let filteredData = movieShows;

    if (selectedYear) {
      filteredData = filteredData.filter(show => show.year === parseInt(selectedYear));
    }

    if (selectedRating) {
      const selectedFloatRating = Math.round(parseFloat(selectedRating));
      filteredData = filteredData.filter(show => Math.round(parseFloat(show.rating)) === selectedFloatRating);
  }
  

    return filteredData;
  }, [selectedYear, selectedRating, movieShows]);
  
  const records = filteredmovieShows.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filteredmovieShows.length / limit);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  return (
    <section>
      <div className='lg:p-20 pt-10 p-5 '>
        <div className="flex flex-col">
          <div className=" grid grid-cols-1 ...">
            <SliderComponent data={movieShows} />
          </div>
        </div>

        <div className='pb-8'>
              <FilteredHeader 
              label="All Tv" 
              onYearChange={handleYearChange} 
              onRatingChange={handleRatingChange} // Pass handleRatingChange to FilteredHeader
            />          <Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers} />
        </div>

        <div className="flex flex-col">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {records.map(show => (
              <TvShowItem key={show.id} show={show} />
            ))}
          </div>
          <div className='pt-8'>
            <Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers} />
          </div>
        </div>
      </div>
    </section>
  );
};

const TvShowItem = memo(({ show }) => {
  return (
    <div className="relative justify-center flex items-center">
      <div>
        <div className="h-[440px] w-[300px] relative  shadow-lg">
          <Link to={`/movie/${show.id}`}>
            <img src={show.posterUrl} alt={show.title} className="object-cover h-full w-full rounded-lg" />
          </Link>
        </div>
        <div className="pt-4 text-babyblue h-24 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="lg:text-2xl text-xl">{show.rating}</span>
            <AiFillStar
              className='h-7 w-7 fill-yellow-400'
            />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl  font-bold mb-2 max-w-[300px]  ">{show.title}</h2>
        </div>
      </div>
    </div>
  );
});

export default Movies;
