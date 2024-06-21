import { Link, NavLink, useNavigate } from "react-router-dom";
import { moviesLogo } from "../../assets";
import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { useComponentContext } from "../../store/componentContext";
import { useState } from "react";
import Button from "./Button";
import SearchComponent from "./SearchComponent";
import WatchList from "./WatchList";
import ProfileDropDown from "./ProfileDropDown";
import { useAuth } from "../../store/Auth-context";
import { FiLogOut } from "react-icons/fi";


const topVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 45 }
};

const centerVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 0 }
};

const buttonVariants = {
  closed: { rotate: 0 },
  opened: { rotate: -45 }
};
  const listVariants = {
  closed:{x:'-100vw'},
  opened:{x:'0', transition : {when:"beforeChildren", staggerChildren:0.2}}
  
}
const listItemVariants ={
  closed:{x:-10 ,opacity:0},
  opened:{x: 0 ,opacity:1}

}

const MainNavigation = () => {
  const { authUser, logOut } = useAuth();

  const { open, setOpen } = useComponentContext();
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(opened=>!opened);
  };
  
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/signin')
  };


  const handlClick = () => {
    setOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
        await logOut();
        navigate('/signin');
    } catch (error) {
        console.error("Failed to log out", error);
    }
};
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link to="/" className="flex gap-1 h-14 cursor-pointer">
          <img src={moviesLogo} className="h-12 object-contain" />
          <span className="text-babyblue flex self-center text-xl font-semibold">
            Movie
          </span>
        </Link>
      </div>

      <div className="flex">
      <Nav />
      <div 
      
      className="hidden md:flex space-x-6 px-4">
        {!searchVisible && (
          <>
            <span className="flex items-center self-center w-[0.5px] h-6 bg-babyblue"></span>
            <button onClick={handleSearchClick}>
              <BsSearch className="h-6 w-6 self-center text-babyblue flex items-center" />
            </button>
            <ProfileDropDown/>
            <div className="  text-babyblue  flex items-center justify-center  space-x-2 ">
    {authUser &&         <WatchList />
    }
     
      </div>
          </>
          
        )}
        <SearchComponent isVisible={searchVisible} onClose={handleSearchClick}/>
      </div>
    </div>

   <div className="md:hidden flex  space-x-3"> 
    {!searchVisible && (
        <>
  {authUser &&         <WatchList />
    }
            <button onClick={handleSearchClick}>
                <BsSearch className="h-7 w-7 text-blue " />
            </button>
            
            <button
        className="w-10 h-8 flex flex-col justify-between z-20  relative"
        onClick={handlClick}
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-blue rounded origin-left"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-blue rounded"
        ></motion.div>
        <motion.div
          variants={buttonVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-blue rounded origin-left"
        ></motion.div>
      </button>
        </>
    )}
    {searchVisible && (
        <SearchComponent isVisible={searchVisible} onClose={handleSearchClick} />
    )}
     {searchVisible && (
       <div
       className="fixed inset-0 bg-black opacity-30"
       onClick={handleSearchClick}
     ></div>
    )}
           

   
</div>

      {/* Mobile Navigation Menu */}

      {open && (
        <motion.div variants={listVariants} initial="closed" animate="opened" className="fixed inset-0 md:hidden " onClick={handleCloseMenu}>
          <div className="fixed left-0 top-0 w-[50%] h-full overflow-auto bg-primary ease-in-out duration-500 rounded-tr-2xl rounded-br-2xl"  onClick={(e) => e.stopPropagation()} >
            <ul>
              <div className="p-6 flex items-center justify-between">
                {/* Mobile Logo */}
                <Link to="/" className="flex gap-1 h-12">
                  <img
                    src={moviesLogo}
                    className="h-10 object-contain"
                    alt="Movies Logo"
                  />
                  <span className="text-babyblue flex self-center text-xl font-semibold">
                    Movie
                  </span>
                </Link>
              </div>

             {/* Mobile Navigation Items */}

             {navLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "animate-pulse transform transition-all ease-in-out duration-300 p-5 flex rounded-xl text-3xl font-semibold border-l-[1px] border-navy text-navy"
                      : "ease-out duration-300 text-3xl p-5 flex hover:bg-navy rounded-xl text-babyblue"
                  }
                >
                  <motion.li  variants={listItemVariants}
>
                  {item.label}
                  </motion.li>
                </NavLink>
                  ))}
            <motion.div className="flex flex-col px-4 py-6  text-3xl  " variants={listItemVariants}>
               {authUser&& <Link to="/profile" className="flex items-center  gap-2 py-3"> 
              
                <img
                src={authUser.photoURL || '../../../public/profile.jpg'}
                alt="Profile"
                className="w-12 h-12 bg-fill rounded-full border-blue border-2 cursor-pointer"
            />
              <h1 className="text-babyblue">{authUser.displayName}</h1>
               </Link> 
               
               }
        {authUser? (   <div 
                                className='flex items-center  py-4 hover:bg-navy rounded-xl text-babyblue cursor-pointer'
                                onClick={handleLogout}
                            >
                                <FiLogOut size={20} />
                                <span className="block ml-2">Logout</span>
                            </div>):( <Button label="Sign In" small  handleClick={handleSubmit} />
) }
        
          </motion.div>
          
            </ul>
          </div>
          
        </motion.div>
      )}


    </header>
  );
};

export default MainNavigation;
