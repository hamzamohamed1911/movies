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
   <div className="overflow-x-scroll flex gap-7 scroll whitespace-nowrap scroll-smooth scrollbar-hide transition-transform duration-300 ease-in-out transform-gesture">
   {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={sliderRef}
          className='cursor-pointer w-32  h-32 rounded-md lg:h-48 lg:w-56    '
          onKeyDown={handleKeyboardNavigation}
          tabIndex={index}
          onClick={() => setCurrentIndex(index)}
      
        >
          <img src={slide.image} alt={slide.name} className={`rounded-md w-32  h-32 inline-block lg:h-48 lg:w-56   ${
          currentIndex === index ? 'border-[3px] border-navy' : '' }`}  />
        </div>
      ))}
   </div>
    </>
  );
};

export default SliderItems;