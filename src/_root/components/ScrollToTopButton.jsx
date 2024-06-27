import React,{ useEffect, useState } from "react"
import { LiaArrowCircleUpSolid } from "react-icons/lia";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
    
  }, [])

 
  const scrollToTop = () => {
    isVisible &&
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (

    

    <LiaArrowCircleUpSolid   className={` cursor-pointer fill-blue fixed bottom-4 right-4  h-14 w-14 transition-opacity duration-200 animate-bounce  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}  onClick={scrollToTop}/>
   
  
  )
}

export default ScrollToTopButton;