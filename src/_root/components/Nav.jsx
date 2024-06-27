import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Nav() {
  const activeClasses = "text-4xl text-navy border-b-[1px] border-navy animate-pulse transform transition-all ease-in-out duration-400";
  const notActive = "font-light text-3xl text-babyblue";



  return (
    <ul 
      className="hidden  md:flex  space-x-10 px-14"
    >
      <li >
        <NavLink  to="/" className={({ isActive }) => isActive ? activeClasses : notActive} end>
          Trending
        </NavLink>
      </li>
      <li >
        <NavLink to="/discover" className={({ isActive }) => isActive ? activeClasses : notActive}>
        Discover
        </NavLink>
      </li>
      <li >
        <NavLink to="/tv" className={({ isActive }) => isActive ? activeClasses : notActive}>
          Tv
        </NavLink>
      </li>
      <li >
        <NavLink to="/movie" className={({ isActive }) => isActive ? activeClasses : notActive}>
          Movie
        </NavLink>
      </li>
      <li >
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClasses : notActive}>
          About
        </NavLink>
      </li>
    </ul>
  );
}
