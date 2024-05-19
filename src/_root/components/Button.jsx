import React from 'react';

const Button = ({label, backgroundColor,textColor,borderColor,fullWidth, handleClick ,icon ,small ,normal}) => {
  return (
    <button
    onClick={handleClick}
    className={`flex justify-center text-white font-semibold items-center  border  text-md sm:text-lg  transition ease-in-out delay-150 hover:scale-110 hover:bg-blue duration-300
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-navy "
      } rounded-md 
      ${fullWidth && "w-full"} 
      ${small && "px-4 py-2 "} 
      ${normal && "sm:gap-2 gap-1 sm:px-7 px-4 md:py-4 py-2"}`
      
    
    }
      
    >
        {icon}
      
      {label}
    

    </button>
  )
}

export default Button;