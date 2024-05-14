import { Link } from "react-router-dom";
import { moviesLogo } from "../../assets";
import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";



const MainNavigation = () => {
  const [open, setOpen] = useState(false);


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

  
         <button onClick={(()=>setOpen((prev)=>!prev))} className=" md:hidden  z-20  ">
       <RxHamburgerMenu className="w-12 h-12 text-blue "/>
         </button>
        
      

      {/* Mobile Navigation Menu */}
 <div className={
          open
            ? 'fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }>
      
 <ul >
      <div className="p-6 flex items-center justify-between">
  {/* Mobile Logo */}
      <Link to='/' className="flex gap-1  h-12  cursor-pointer">
          <img src={moviesLogo} className=" h-10 object-contain"/>
          <span className=" text-babyblue flex self-center text-xl font-semibold">
          Movies
          </span>
      </Link>

        <button onClick={(()=>setOpen((prev)=>!prev))} className='z-20 md:hidden'>
        {open && <AiOutlineClose  className="w-12 h-12 text-blue " />  }
      </button>
      
      </div>

        {/* Mobile Navigation Items */}
         
      </ul>
    
 </div>


    
   </header>
  )
}

export default MainNavigation;
