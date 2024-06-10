import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LoadingSkeletonTrailer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:h-full h-[720px] lg:p-24 pt-20 text-white">
    <SkeletonTheme baseColor="#1B262C" highlightColor="#1B263A">
       <div className="relative flex flex-col items-center justify-center lg:h-full h-[720px] lg:p-24 pt-20 text-white">
         <div className="w-full h-[500px] md:h-[700px] flex flex-col items-center justify-center space-y-6">
           <Skeleton width="80%" height="80%" />
           <div className="text-center space-y-6">
             <Skeleton height={40} width={300} />
             <Skeleton height={25} width={200} />
           </div>
         </div>
       </div>
     </SkeletonTheme>
 
     </div>  )
}

export default LoadingSkeletonTrailer