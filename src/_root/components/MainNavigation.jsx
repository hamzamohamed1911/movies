import { Link, NavLink } from "react-router-dom";
import { moviesLogo } from "../../assets";
import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { useComponentContext } from "../../store/componentContext";

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

const MainNavigation = () => {
  const { open, setOpen } = useComponentContext();

  const handlClick = () => {
    setOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link to="/" className="flex gap-1 h-14 cursor-pointer">
          <img src={moviesLogo} className="h-12 object-contain" />
          <span className="text-babyblue flex self-center text-xl font-semibold">
            Movies
          </span>
        </Link>
      </div>

      <div className="flex">
        <Nav />

        <div className="hidden md:flex space-x-6 px-4">
          <span className="flex items-center self-center w-[0.5px] h-6 bg-babyblue"></span>
          <button>
            <BsSearch className="h-5 w-5 self-center text-babyblue flex items-center" />
          </button>
        </div>
      </div>

      <button
        className="w-10 h-8 flex flex-col justify-between z-20 md:hidden relative"
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

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="fixed inset-0 lg:hidden" onClick={handleCloseMenu}>
          <div className="fixed left-0 top-0 w-[50%] h-full bg-primary ease-in-out duration-500 rounded-tr-2xl rounded-br-2xl">
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
                    Movies
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
                      ? "animate-pulse transform transition-all ease-in-out duration-300 p-4 flex rounded-xl text-2xl font-semibold border-l-[1px] border-navy text-navy"
                      : "ease-out duration-300 text-2xl p-4 flex hover:bg-navy rounded-xl text-babyblue"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNavigation;
