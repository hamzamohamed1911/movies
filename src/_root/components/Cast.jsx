import React from 'react'
import Slider from 'react-slick'
import { dummyData } from '../../constants'

const Cast = ({settings}) => {
  return (<>
 <div className="lg:max-w-2xl  py-10   max-w-[410px]">
              <h1 className="text-white text-3xl mb-8">CAST</h1>
              <Slider {...settings}>
                {dummyData.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-full lg:w-40 lg:h-40 w-28 h-28"
                    />
                    <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4 text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
</>  )
}

export default Cast