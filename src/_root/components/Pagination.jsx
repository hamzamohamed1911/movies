import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ nPage, setcurrentPage, numbers, currentPage }) => {

  const PrevPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const NextPage = () => {
    if (currentPage !== nPage) {
      setcurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setcurrentPage(id);
  };

  return (
    <ol className="flex justify-center gap-1 font-lg">
      <li>
        <a
          href="#"
          className={`inline-flex size-10 items-center justify-center rounded border border-gray-300 text-white rtl:rotate-180 ${
            currentPage === 1 ? 'bg-gray-400 cursor-default ' : 'bg-navy cursor-pointer'
          }`}
        >
          <button className={`${currentPage === 1 ?  'cursor-default' : 'cursor-pointer'}`} onClick={PrevPage}>
            <IoIosArrowBack className="h-7 w-7" />
          </button>
        </a>
      </li>

      {numbers.map((n, i) => (
        <li
          onClick={() => changePage(n)}
          key={i}
          className={`size-10 rounded border border-gray-300 text-center flex justify-center items-center text-white cursor-pointer ${
            currentPage === n ? 'bg-blue text-white active' : 'bg-navy hover:bg-blue'
          }`}
        >
          <a className="text-xl" href="#">
            {n}
          </a>
        </li>
      ))}

      <li>
      <a
          href="#"
          className={`inline-flex size-10 items-center justify-center rounded border border-gray-300 ${
            currentPage === nPage ? 'bg-gray-400 cursor-default' : 'bg-navy cursor-pointer'
          } text-white rtl:rotate-180`}
        >
          <button className={`${currentPage === nPage ? 'cursor-default' : 'cursor-pointer'} }`} onClick={NextPage}>
            <IoIosArrowForward className="h-7 w-7" />
          </button>
        </a>
      </li>
    </ol>
  );
};

export default Pagination;
