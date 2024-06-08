import React, { useState, useMemo, memo } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';
import SliderComponent from '../components/SliderComponent';
import { useApi } from '../../store/ApiContext';
import { useQuery } from '@tanstack/react-query';
import ShowItemSkeleton from '../components/ShowItemSkeleton';


const Movies = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedType, setSelectedType] = useState('');

  const { fetchDiscoverMoives } = useApi();

  const { data: DiscoverMovie = [], isLoading, isError } = useQuery({
    queryKey: ['movie', { year: selectedYear, rating: selectedRating, language: selectedLanguage, type: selectedType, page: currentPage }],
    queryFn: () => fetchDiscoverMoives(selectedYear, selectedRating, selectedLanguage, selectedType, currentPage),
  });
  

  const filteredmovieShows = useMemo(() => {
    let filteredData = DiscoverMovie;

    if (selectedYear) {
      filteredData = filteredData.filter(show => show.release_date.startsWith(selectedYear));
    }

    if (selectedRating) {
      const selectedFloatRating = Math.round(selectedRating);
      filteredData = filteredData.filter(show => Math.round(show.vote_average) >= selectedFloatRating);
    }

    return filteredData;
  }, [selectedYear, selectedRating, DiscoverMovie]);


  const records = filteredmovieShows.slice(0, limit);
  const nPage = Math.ceil(filteredmovieShows.length / limit);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCurrentPage(1);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  return (
    <section>
      <div className='lg:p-20 pt-10 p-5 '>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 ">
            <SliderComponent  data={DiscoverMovie} />
          </div>
        </div>

        <div className='pb-8'>
          <FilteredHeader 
            label="All MOVIES" 
            onYearChange={handleYearChange} 
            onRatingChange={handleRatingChange} 
            onLanguageChange={handleLanguageChange} 
            onTypeChange={handleTypeChange}
            Movies={DiscoverMovie}
          />
          <Pagination nPage={nPage} setcurrentPage={setCurrentPage} currentPage={currentPage} numbers={numbers} />
        </div>

        <div className="flex flex-col">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {isLoading ? (
              Array.from({ length: limit }).map((_, index) => (
                <ShowItemSkeleton key={index} />
              ))
            ) : (
              records.map(show => (
                <TvShowItem key={show.id} show={show} />
              ))
            )}
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
      <div className="h-auto md:h-[440px] w-full relative shadow-lg">
          <Link to={`/movie/${show.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path || show.backdrop_path}`} alt={show.title} className="object-cover h-full w-full rounded-lg" />
          </Link>
        </div>
        
        <div className="pt-4 text-babyblue h-24 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="lg:text-2xl text-xl">{show.vote_average}</span>
            <AiFillStar className='h-7 w-7 fill-yellow-400' />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-bold mb-2 max-w-[300px]">{show.title}</h2>
        </div>
      </div>
    </div>
  );
});

export default Movies;
