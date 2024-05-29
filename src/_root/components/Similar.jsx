import React from 'react'
import Slider from 'react-slick'
import { dummyData } from '../../constants'
import { Link } from 'react-router-dom'

const Similar = ({settings}) => {
  
  return (
<>
<div className="lg:max-w-3xl max-w-[410px] py-6 p-2  ">
              <h1 className="text-babyblue text-2xl mb-8">SIMILAR</h1>
              <Slider {...settings}>
                {dummyData.map((slide, index) => (
                  <div key={slide.id}>
      <Link to={`/${slide.type === "tv" ? "tv" : "movie"}/${slide.id}`}>                  <img
  src={slide.posterUrl}
  alt={slide.title}
  className="cursor-pointer rounded-lg lg:w-40 lg:h-56 w-32 h-36 " 
/>
</Link>

                    <h1 className="text-babyblue lg:text-2xl text-lg text-bold p-4 ">{slide.title}</h1>
                  </div>
                ))}
              </Slider>
            </div>

</>  )
}

export default Similar