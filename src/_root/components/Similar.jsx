import React from 'react'
import Slider from 'react-slick'
import { slides } from '../../constants'

const Similar = ({settings}) => {
  return (
<>
<div className="lg:max-w-3xl max-w-xl py-14 p-4">
              <h1 className="text-white text-3xl mb-8">SIMILAR</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                  <img
  src={slide.posterUrl}
  alt={slide.title}
  className="cursor-pointer rounded-lg lg:w-36 lg:h-40 w-36 h-36 mx-auto" 
/>
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>

</>  )
}

export default Similar