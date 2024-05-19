import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav() {
  const activeClasses = "text-4xl text-navy border-b-[1px] border-navy animate-pulse transform transition-all ease-in-out duration-400";
  const notActive = "font-light text-3xl text-babyblue";

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.ul 
      className="hidden space-x-10 px-14 md:flex "
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.li >
        <NavLink variants={navItemVariants} to="/" className={({ isActive }) => isActive ? activeClasses : notActive} end>
          Trending
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink to="/discover" className={({ isActive }) => isActive ? activeClasses : notActive}>
        Discover
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink to="/tv" className={({ isActive }) => isActive ? activeClasses : notActive}>
          Tv
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink to="/movies" className={({ isActive }) => isActive ? activeClasses : notActive}>
          Movies
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClasses : notActive}>
          About
        </NavLink>
      </motion.li>
    </motion.ul>
  );
}
