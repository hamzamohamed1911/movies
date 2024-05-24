import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'; 
import { dummyData } from '../../constants';
import { Link } from 'react-router-dom';
import FilteredHeader from '../components/FilteredHeader';
import Pagination from '../components/Pagination';
import SliderComponent from '../components/SliderComponent';

const Tv = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;
  const tvShows = dummyData.filter(show => show.type === 'tv');
  const records = [...tvShows.slice(firstIndex ,lastIndex)];
  const nPage = Math.ceil(tvShows.length / limit);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  
  return (
   <>
    <section >
      <div className=' lg:p-20 pt-10 p-5 '>
    <div className="flex flex-col">
          <div className=" grid grid-cols-1 ...">
          <SliderComponent data={tvShows} />
          </div>
     </div>

     <div className=' pb-8 space-y-10'>
      <FilteredHeader label="All Tv" />
      
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
      </div>
    </section>
   </>
  );
};

const TvShowItem = ({ show }) => {
  return (

<div className="relative justify-center flex items-center">
      <div>
      <div className="h-[440px] w-[300px] relative ">
      <Link to={`/tv/${show.id}`}>
        <img src={show.posterUrl} alt={show.title} className="object-cover h-full w-full rounded-lg  shadow-2xl" />
        </Link>
      </div>
      <div className="pt-8 text-babyblue">
        
          <h2 className="lg:text-4xl text-2xl font-bold mb-2">{show.title}</h2>
          <div className="flex items-center gap-2">
           <span className="lg:text-2xl text-xl">{show.rating}</span>
           <AiFillStar
                    className='h-7 w-7 fill-yellow-400'               
                    
                  />
          </div>

      </div>
      </div>
 </div>


  );
};

export default Tv;
