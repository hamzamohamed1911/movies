
import { Link } from "react-router-dom";
import { moviesLogo } from "../../assets";
import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";



const MainNavigation = () => {

  return (
   <header >
<div className="flex items-center space-x-2 md:space-x-10">
  
<Link to='/' className="flex gap-1  h-12  cursor-pointer">
  <img src={moviesLogo} className=" h-10 object-contain"/>
  <span className=" text-babyblue flex self-center text-xl font-semibold">
  Movies
  </span>
</Link>

</div>


<div className="flex">
<Nav/>

<div className="hidden md:flex space-x-6 px-4">

<span className="flex items-center self-center w-[0.5px] h-6 bg-babyblue"></span>

<button >
  <BsSearch className="h-5 w-5 self-center text-babyblue  flex items-center" />
</button>

</div>
</div>

   </header>
  )
}

export default MainNavigation;
