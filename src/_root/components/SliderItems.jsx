import { useRef } from "react";


const SliderItems = ({ prevSlide, nextSlide, slides ,currentIndex ,setCurrentIndex}) => {
  const sliderRef = useRef(null);

    const handleKeyboardNavigation = (event) => {
        if (event.key === 'ArrowRight' ) {
            nextSlide();
        } else if (event.key === 'ArrowLeft' ) {
            prevSlide();
        }
      };

   
  return (
    <>
   <div className=" flex justify-center items-center gap-7   whitespace-nowrap scroll-smooth scrollbar-hide transition-transform duration-300 ease-in-out transform-gesture">
   {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={sliderRef}
          className='cursor-pointer w-36  h-32 rounded-md lg:h-64  lg:w-64 '
          onKeyDown={handleKeyboardNavigation}
          tabIndex={index}
          onClick={() => setCurrentIndex(index)}
      
        >
          <img src={slide.image} alt={slide.name} className={` w-36  h-32 rounded-md lg:h-52 lg:w-60    ${
          currentIndex === index ? 'lg:h-64 lg:w-64  w-40  h-36 border-[3px] border-navy' : '' }`}  />
        </div>
      ))}
   </div>
    </>
  );
};

export default SliderItems;