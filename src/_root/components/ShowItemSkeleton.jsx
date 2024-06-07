import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShowItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#1B262C" highlightColor="#1B2639">

    <div className="relative justify-center flex items-center">
      <div>
        <div className="h-[440px] w-[300px] relative shadow-lg">
          <Skeleton height={440} width={300} />
        </div>
        <div className="pt-4 text-babyblue h-24 overflow-hidden">
          <div className="flex items-center gap-2">
            <Skeleton width={40} height={30} />
            <Skeleton circle={true} height={28} width={28} />
          </div>
          <h2 className="lg:text-2xl md:text-2xl text-xl font-bold mb-2 max-w-[300px]">
            <Skeleton />
          </h2>
          <p className="text-gray-400">
            <Skeleton width={100} />
          </p>
        </div>
      </div>
    </div>
    </SkeletonTheme>

  );
};

export default ShowItemSkeleton;
