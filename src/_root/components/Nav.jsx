
import { NavLink } from 'react-router-dom';

export default function Nav() {
  
  let activeClasses =  " text-3xl text-navy border-b-[1px] border-navy";
  let notActive =  " font-light text-3xl text-babyblue"
  return (
    <ul className="hidden space-x-10 px-14 md:flex">
    <NavLink  to="/" className={ ({ isActive }) => isActive ? activeClasses :notActive } end>
    Trending
     </NavLink>
     <NavLink  to="/tv" className={({ isActive }) => isActive ? activeClasses : notActive}>
     Tv
     </NavLink>
     <NavLink  to="/movies" className={({ isActive }) => isActive ? activeClasses : notActive}>
     Movies
     </NavLink>
     <NavLink  to="/about" className={({ isActive }) => isActive ? activeClasses : notActive}>
     About
     </NavLink>
</ul>
  
  );
}
 

