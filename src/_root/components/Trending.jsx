import { Link } from 'react-router-dom';
import { useApi } from '../../store/ApiContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Trending = () => {
  const { fetchTrending} = useApi();


  const { data: TrendingData = [], isLoading, isError } = useQuery({
    queryKey: ['trendingData'],
    queryFn: fetchTrending,
  });

  const trendingMovie = TrendingData.find(item => item.media_type === 'movie');
  const trendingTVShow = TrendingData.find(item => item.media_type === 'tv');

  return (
    <div className="lg:p-10 p-2 lg:fixed items-center h-full flex flex-col ">
      {isLoading ? (
        <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">
          <div className="text-center mb-6">
            <Skeleton height={300} width={220} className="rounded-lg hover:shadow-lg" />
            <Skeleton height={20} width={100} style={{ marginTop: 12 }} />

          </div>
          <div className="text-center">
            <Skeleton height={300} width={220} className="rounded-lg hover:shadow-lg" />
            <Skeleton height={20} width={100} style={{ marginTop: 12 }} />

          </div>
        </SkeletonTheme>
      ) : (
        <>
          {trendingMovie && (
            <div className='text-center mb-6'>
              <h2 className="text-4xl text-babyblue mb-6">Trending Movie</h2>
              <Link to={`/movie/${trendingMovie.id}`}>
                <div className='flex justify-center'>
                  <img
                    src={`https://image.tmdb.org/t/p/w400${trendingMovie.backdrop_path}`}
                    alt={trendingMovie.title}
                    className="lg:w-[300px] lg:h-[250px] h-[300px] w-[220px] rounded-lg hover:shadow-lg"
                  />
                </div>
              </Link>
              <h1 className='text-babyblue text-2xl pt-3'>{trendingMovie.title}</h1>
            </div>
          )}

          {trendingTVShow && trendingMovie && (
            <>     
              <div className="bg-blue h-1 w-20 mb-4"></div> 
              <div className='my-3'></div>
            </>
          )}

          {trendingTVShow && (
            <div className='text-center'>
              <h2 className="text-4xl text-babyblue mb-6">Trending TV Show</h2>
              <Link to={`/tv/${trendingTVShow.id}`}>
                <div className='flex justify-center'>
                  <img
                    src={`https://image.tmdb.org/t/p/original${trendingTVShow.backdrop_path}`}
                    alt={trendingTVShow.name}
                    className="lg:w-[300px] lg:h-[250px] h-[300px] w-[220px] rounded-lg hover:shadow-lg"
                  />
                </div>
              </Link>
              <h1 className='text-babyblue text-2xl pt-3'>{trendingTVShow.name}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Trending;
