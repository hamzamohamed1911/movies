import React, { Suspense, lazy } from 'react';
import DiscoverSlider from '../components/DiscoverSlider';
import { useApi } from '../../store/ApiContext';

const Trending = lazy(() => import('../components/Trending'));

const Discover = () => {
  const { DiscoverMovie, DiscoverTv, TopRatedMovie, TopRatedTv, nowPlayingMovie, Upcoming } = useApi();
  const discoverPopular = [...DiscoverMovie, ...DiscoverTv];
  const TopRated = [...TopRatedTv, ...TopRatedMovie];

  return (
    <section className='pt-28 p-4'>
      <div className='lg:flex lg:space-x-4'>
        <div className='lg:w-3/4 '>
          <div className='rounded-l-3xl rounded-3xl lg:p-6 p-4'>
            <DiscoverSlider discover={discoverPopular} label="Most Popular" />
            <DiscoverSlider discover={TopRated} label="Top Rated" />
            <DiscoverSlider discover={nowPlayingMovie} label="Now Playing" />
            <DiscoverSlider discover={Upcoming} label="Upcoming" />  
          </div>
        </div>
        <div className="lg:w-1/4">
          <Suspense fallback={<div>Loading...</div>}>
            <Trending />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Discover;
