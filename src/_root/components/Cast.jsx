import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { dummyData } from '../../constants'
import { useApi } from '../../store/ApiContext'

const Cast = ({settings , id}) => {
  const {fetchCastMovies , castMovies}=useApi()
  useEffect(() => {
    fetchCastMovies({ id });
}, [id]);
console.log(castMovies)

  return (<>
 <div className="lg:max-w-2xl  py-6 p-2 max-w-[410px]">
              <h1 className="text-babyblue lg:text-3xl text-2xl mb-8">CAST</h1>
              <Slider {...settings}>
                {castMovies.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                  src={`https://image.tmdb.org/t/p/w200${ slide.profile_path  }`}
                  alt={slide.title}
                      className="cursor-pointer rounded-full lg:w-40 lg:h-40 w-32 h-32"
                    />
                    <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4 ">{slide.original_name}</h1>
                  </div>
                ))}
              </Slider>
            </div>
</>  )
}

export default Cast