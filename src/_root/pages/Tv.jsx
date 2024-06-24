import React, { useState, useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';
import SliderComponent from '../components/SliderComponent';
import { useApi } from '../../store/ApiContext';
import { useQuery } from '@tanstack/react-query';
import ShowItemSkeleton from '../components/ShowItemSkeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Tv = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedType, setSelectedType] = useState('');
  const { fetchDiscoverTv } = useApi();

  const { data: DiscoverTv = [], isLoading, isError } = useQuery({
    queryKey: ['tv', { year: selectedYear, rating: selectedRating, language: selectedLanguage, type: selectedType, page: currentPage }],
    queryFn: () => fetchDiscoverTv(selectedYear, selectedRating, selectedLanguage, selectedType, currentPage),
  });

 
  const filteredTvShows = useMemo(() => {
    let filteredData = DiscoverTv;

    if (selectedYear) {
      filteredData = filteredData.filter(show => new Date(show.first_air_date).getFullYear() === parseInt(selectedYear));
    }

    if (selectedRating) {
      const selectedFloatRating = parseFloat(selectedRating);
      filteredData = filteredData.filter(show => show.vote_average >= selectedFloatRating);
    }

    return filteredData;
  }, [selectedYear, selectedRating, DiscoverTv]);

  
  const records = filteredTvShows.slice(0, limit);
  const nPage = Math.ceil(filteredTvShows.length / limit);
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
    <>
      <section className='relative justify-center flex items-center'>
        <div className='lg:p-20 pt-10 p-5 '>
       {isLoading ? (
 <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">
 <div className="relative">
   <Skeleton height={400} className="rounded-tl-[50px]" />
 </div>
</SkeletonTheme>


       ) : (
   <div className="flex flex-col">
   <div className="grid grid-cols-1 ...">
     <SliderComponent  data={DiscoverTv} />
   </div>
 </div>


       ) }

          <div className='pb-8 space-y-10'>
          <FilteredHeader 
            label="All Tv" 
            onYearChange={handleYearChange} 
            onRatingChange={handleRatingChange} 
            onLanguageChange={handleLanguageChange} 
            onTypeChange={handleTypeChange}
            tv={fetchDiscoverTv}
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
    </>
  );
};

const TvShowItem = ({ show }) => {
  return (
    <div className="justify-center flex items-center">
      <div>
      <div className="h-auto md:h-[440px] w-full relative shadow-lg">
          <Link to={`/tv/${show.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${show.poster_path ||show.backdrop_path}`} alt={show.name} className="object-cover h-full w-full rounded-lg" />
          </Link>
        </div>
        <div className="pt-4 text-babyblue h-24 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="lg:text-2xl text-xl">{show.vote_average}</span>
            <AiFillStar className='h-7 w-7 fill-yellow-400' />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl  font-bold mb-2 max-w-[300px]  ">{show.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Tv;
