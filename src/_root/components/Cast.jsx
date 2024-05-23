import React from 'react'
import Slider from 'react-slick'
import { slides } from '../../constants'

const Cast = ({settings}) => {
  return (<>
 <div className="lg:max-w-4xl max-w-xl py-14  ">
              <h1 className="text-white text-3xl mb-8">CAST</h1>
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={slide.id}>
                    <img
                      src={slide.posterUrl}
                      alt={slide.title}
                      className="cursor-pointer rounded-full w-36 h-36 mx-auto"
                    />
                    <h1 className="text-babyblue text-2xl text-center">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>
</>  )
}

export default Cast