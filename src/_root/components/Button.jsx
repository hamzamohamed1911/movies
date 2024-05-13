'use client'
import React from 'react';

const Button = ({label, iconURL, backgroundColor,textColor,borderColor,fullWidth, handleClick}) => {
  return (
    <button
    onClick={handleClick}
    className={`flex justify-center text-white items-center sm:gap-2 gap-1 sm:px-7 px-4 md:py-4 py-2 border  text-md sm:text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-navy "
      } rounded-md ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5 transition hover:translate-x-3  duration-300 '
        />
      )}

    </button>
  )
}

export default Button;