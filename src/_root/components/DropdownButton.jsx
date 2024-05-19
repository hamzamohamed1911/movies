import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown,FaChevronRight } from 'react-icons/fa';

const DropdownButton = ({ label, isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block  py-4 w-full">
      <button
        onClick={toggleDropdown}
        className="inline-flex w-full   bg-blue-500 text-babyblue font-semibold hover:bg-blue-600 focus:outline-none"
      >
        <h1 className="m-0">{label}</h1>
        {isOpen ? <FaChevronDown className="ml-2" /> : <FaChevronRight className="ml-2" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 w-full"
          >
            <div className="py-1 rounded-md " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {['Action', 'Romantic', 'Drama', 'Thriller', 'Animation'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block px-4 py-2 text-3xl text-babyblue hover:bg-navy rounded-lg   "
                  role="menuitem"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownButton