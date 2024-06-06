import DiscoverSlider from '../components/DiscoverSlider';
import { useApi } from '../../store/ApiContext';
import Trending  from '../components/Trending'

const Discover = () => {
  const { DiscoverMovie, DiscoverTv, TopRatedMovie, TopRatedTv, nowPlayingMovie, Upcoming } = useApi();
  
  const discoverPopular = [...DiscoverMovie, ...DiscoverTv];
  const TopRated = [...TopRatedMovie , ...TopRatedTv, ];

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
            <Trending/>
        </div>
      </div>
    </section>
  );
};

export default Discover;
