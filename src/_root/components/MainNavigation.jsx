import { Link, NavLink } from "react-router-dom";
import { moviesLogo } from "../../assets";
import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../../constants";
import { useComponentContext } from "../../store/componentContext";



const MainNavigation = () => {
  const {open, setOpen} = useComponentContext();


  return (
   <header >
<div className="flex items-center space-x-2 md:space-x-10">
  
<Link to='/' className="flex gap-1  h-14  cursor-pointer">
  <img src={moviesLogo} className=" h-12 object-contain"/>
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
       <div  className={
          open
            ? 'fixed  inset-0 ease-in-out duration-500 md:hidden '
            : 'ease-in-out w-[100%] duration-500 fixed  left-[-100%]'
        }

             onClick={(()=>setOpen((prev)=>!prev))}>
      
      <div className={
          open
            ? 'fixed left-0 top-0 w-[50%] h-full  bg-primary  ease-in-out duration-500 rounded-tr-2xl rounded-br-2xl z-50 '
            : 'ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }>
<ul >
      <div className="p-6 flex items-center justify-between">
  {/* Mobile Logo */}
      <Link to='/' className="flex gap-1  h-12 ">
          <img src={moviesLogo} className=" h-10 object-contain"/>
          <span className=" text-babyblue flex self-center text-xl font-semibold">
          Movies
          </span>
      </Link>

      <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          className="z-20 md:hidden"
        >
          {open && <AiOutlineClose className="w-12 h-12 text-blue" />}
        </button>
      </div>

    {/* Mobile Navigation Items */}
           {navLinks.map(item => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive ?' animate-pulse transform transition-all ease-in-out duration-300  p-4 flex rounded-xl text-2xl font-semibold   border-l-[1px] border-navy text-navy  ' : 'ease-out duration-300 text-2xl p-4  flex  hover:bg-navy rounded-xl  text-babyblue'}
          >
            {item.label}
          </NavLink>
        ))}
         
      </ul>
</div>
    
      </div>


    
   </header>
  )
}

export default MainNavigation;
