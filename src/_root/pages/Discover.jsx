import DiscoverSlider from '../components/DiscoverSlider';
import { useApi } from '../../store/ApiContext';
import Trending  from '../components/Trending'
import { useQuery } from '@tanstack/react-query';

const Discover = () => {
  const { fetchDiscoverTv,fetchDiscoverMoives, TopRatedMovie, TopRatedTv, nowPlayingMovie, Upcoming } = useApi();

  const { data: DiscoverMovie  = [] } = useQuery({
    queryKey: ['movie'],
    queryFn: fetchDiscoverMoives ,
  });

  const { data: DiscoverTv  = [] } = useQuery({
    queryKey: ['tv'],
    queryFn: fetchDiscoverTv ,
  });
  
  const discoverPopular = [...DiscoverMovie, ...DiscoverTv];
  console.log(discoverPopular)

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
