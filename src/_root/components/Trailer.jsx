import React from 'react';
import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';

const Trailer = ({ trailerData }) => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:h-full h-[720px] lg:p-24 pt-20 text-white">
      <div className="w-full h-[500px] md:h-[700px] flex flex-col items-center justify-center space-y-6">
        <ReactPlayer url={trailerData.trailerUrl} width="80%" height="80%" controls={true} />
        <div className="text-center space-y-6">
          <h2 className="lg:text-6xl text-3xl font-bold text-babyblue">{trailerData.name}</h2>
          <p className="text-blue lg:text-3xl text-xl">
            Published At: {new Date(trailerData.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trailer; 


