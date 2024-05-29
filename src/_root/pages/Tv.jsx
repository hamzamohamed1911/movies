import React, { useState, useMemo } from 'react';
import { dummyData } from '../../constants';
import { AiFillStar } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';
import SliderComponent from '../components/SliderComponent';

const Tv = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState(''); // State variable for selected rating
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const tvShows = dummyData.filter(show => show.type === 'tv');
  const filteredTvShows = useMemo(() => {
    let filteredData = tvShows;

    if (selectedYear) {
      filteredData = filteredData.filter(show => show.year === parseInt(selectedYear));
    }

    if (selectedRating) {
 const selectedFloatRating = parseFloat(selectedRating);

  filteredData = filteredData.filter(show => show.rating === selectedFloatRating);
  }

    return filteredData;
  }, [selectedYear, selectedRating, tvShows]);
  
  const records = filteredTvShows.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filteredTvShows.length / limit);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  return (
    <>
      <section className='relative justify-center flex items-center'>
        <div className='lg:p-20 pt-10 p-5 '>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 ...">
              <SliderComponent data={tvShows} />
            </div>
          </div>

          <div className='pb-8 space-y-10'>
            <FilteredHeader 
              label="All Tv" 
              onYearChange={handleYearChange} 
              onRatingChange={handleRatingChange} // Pass handleRatingChange to FilteredHeader
            />

            <Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers} />
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
    </>
  );
};

const TvShowItem = ({ show }) => {
  return (
    <div className="justify-center flex items-center">
      <div>
        <div className="h-[440px] w-[300px] relative ">
          <Link to={`/tv/${show.id}`}>
            <img src={show.posterUrl} alt={show.title} className="object-cover h-full w-full rounded-lg  " />
          </Link>
        </div>
        <div className="pt-4 text-babyblue h-24 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="lg:text-2xl text-xl">{show.rating}</span>
            <AiFillStar className='h-7 w-7 fill-yellow-400' />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl  font-bold mb-2 max-w-[300px]  ">{show.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Tv;
