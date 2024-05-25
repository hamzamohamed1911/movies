import React from 'react';
import DiscoverSlider from '../components/DiscoverSlider';
import Trending from '../components/Trending';

const Discover = () => {
  return (
    <section className='pt-28 p-4'>
      <div className='lg:flex space-x-4'>
        <div className='rounded-l-3xl rounded-3xl lg:p-6 p-4 lg:w-3/4 flex  justify-center'>
        <div>
         <DiscoverSlider label="Most Popular" />
          <DiscoverSlider label="Top Rated" />
          <DiscoverSlider label="Now Playing" />
          <DiscoverSlider label="Upcoming" />
        </div>
        </div>
        <div className="lg:w-1/4">
          <Trending />
        </div>
      </div>
    </section>
  );
};

export default Discover;
