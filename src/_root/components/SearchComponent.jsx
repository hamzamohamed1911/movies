import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const SearchComponent = ({ isVisible, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, width: isVisible ? '250px' : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center border-b border-babyblue"
      >
        <input
          type="text"
          className="outline-none bg-transparent text-babyblue pl-2 w-full"
          placeholder="Search..."
        />
        <button onClick={onClose} className="ml-2">
          <IoMdClose className="h-5 w-5 text-babyblue" />
        </button>
      </motion.div>
    );
  };

export default SearchComponent