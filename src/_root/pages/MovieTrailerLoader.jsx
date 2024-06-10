import React, { Suspense } from 'react';
import { defer, useLoaderData, Await, json } from 'react-router-dom';
import LoadingSkeletonTrailer from '../components/LoadingSkeletonTrailer';
import Trailer from '../components/Trailer';

const LoadMovieTrailer = async ({ params }) => {
  const { mediaId } = params;
  const youtubeBaseUrl = 'https://www.youtube.com/watch?v=';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc',
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${mediaId}/videos?language=en-US`,
    options
  );if (!response.ok) {

    return json({ message:"could not fetch events"},{status:500})
    
  }else{
    const data = await response.json();

    const trailer = data.results.find(
      (trailer) => trailer.type === 'Trailer' && trailer.site === 'YouTube'
    );  
      return { trailerUrl: `${youtubeBaseUrl}${trailer.key}`, name: trailer.name, publishedAt: trailer.published_at };
  }  
};

const MovieTrailerPage = () => {
  const loaderData = useLoaderData();
  return (
    <Suspense fallback={<LoadingSkeletonTrailer />}>
      <Await resolve={loaderData.trailerData}>
        {(trailerData) => <Trailer trailerData={trailerData} />}
      </Await>
    </Suspense>
  );
};
export default MovieTrailerPage;


export const loader = ({ params }) => defer({ trailerData: LoadMovieTrailer({ params }) });

