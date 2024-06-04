import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';

const MovieTrailer = () => {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [trailerData, setTrailerData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { mediaId } = useParams();

  const youtubeBaseUrl = 'https://www.youtube.com/watch?v=';

  useEffect(() => {
    const fetchTrailer = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${mediaId}/videos?language=en-US`, options
        );
        const data = await response.json();

        const trailer = data.results.find(
          (trailer) => trailer.type === "Trailer" && trailer.site === 'YouTube'
        );

        if (trailer) {
          setTrailerUrl(`${youtubeBaseUrl}${trailer.key}`);
          setTrailerData(trailer);
        } else {
          setError('No trailer found for this movie.');
        }
      } catch (error) {
        setError('Failed to fetch trailer.');
      } finally {
        setIsLoading(false);
      }
    };

    if (mediaId) {
      fetchTrailer();
    }
  }, [mediaId]);

  return (
    <div className="relative flex flex-col items-center justify-center lg:h-full h-[720px] lg:p-24 pt-20 text-white">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 opacity-75">
          <p className="text-white text-xl">Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-red-500 text-center p-4">{error}</div>
      )}
      {trailerUrl && (
        <div className="w-full h-[500px] md:h-[700px]  flex flex-col items-center justify-center space-y-6">
          <ReactPlayer
            url={trailerUrl}
            width="80%"
            height="80%"
            controls={true}
          />
          <div className="text-center space-y-6">
            <h2 className="lg:text-6xl text-3xl font-bold text-babyblue">{trailerData.name}</h2>
            <p className="text-blue lg:text-3xl text-xl ">Published At: {new Date(trailerData.published_at).toLocaleDateString()}</p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
