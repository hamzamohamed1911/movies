import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Pagination = ({ nPage, setcurrentPage, numbers, currentPage }) => {

  const PrevPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const NextPage = () => {
      setcurrentPage(currentPage + 1);
    
  };

  const changePage = (id) => {
    setcurrentPage(id);
  };

  return (
    <ol className="flex justify-center gap-1 font-lg">
      <li>
        <Link
          className={`inline-flex size-10 items-center justify-center rounded border border-gray-300 text-white rtl:rotate-180 ${
            currentPage === 1 ? 'bg-gray-400 cursor-default ' : 'bg-navy cursor-pointer'
          }`}
        >
          <button className={`${currentPage === 1 ?  'cursor-default' : 'cursor-pointer'}`} onClick={PrevPage}>
            <IoIosArrowBack className="h-7 w-7" />
          </button>
        </Link>
      </li>

      {numbers.map((n, i) => (
        <li
          onClick={() => changePage(n)}
          key={i}
          className={`size-10 rounded border border-gray-300 text-center flex justify-center items-center text-white  ${
            currentPage === n ? 'bg-blue text-white active cursor-default' : 'bg-navy cursor-pointer hover:bg-blue'
          }`}
        >
          <Link className={`text-xl ${
            currentPage === n ?  'cursor-default' : ' cursor-pointer'}`} >
            {currentPage}
          </Link>
        </li>
      ))}

      <li>
      <Link
          href="#"
          className={`inline-flex size-10 items-center justify-center rounded border border-gray-300 bg-navy text-white rtl:rotate-180`}
        >
          <button  onClick={NextPage}>
            <IoIosArrowForward className="h-7 w-7" />
          </button>
        </Link>
      </li>
    </ol>
  );
};

export default Pagination;
