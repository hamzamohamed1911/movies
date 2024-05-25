import React from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

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
    <ol className="flex justify-center gap-1  font-lg">
      <li>
        <a
          href="#"
          className="inline-flex size-10  items-center justify-center rounded border border-gray-300 bg-navy text-white rtl:rotate-180"
        >
          <button onClick={PrevPage}>
            <GoArrowLeft className='h-7 w-7 transition hover:-translate-x-3  duration-300' />
          </button>
        </a>
      </li>

      {numbers.map((n, i) => (
        <li onClick={() => changePage(n)} key={i} className={` size-10  rounded border border-gray-300 text-center flex justify-center items-center text-white cursor-pointer ${currentPage === n ? 'bg-blue text-white active' : 'bg-navy hover:bg-blue'}`}>
          <a className='text-xl' href="#">{n}</a>
        </li>
      ))}

      <li>
        <a
          href="#"
          className="inline-flex size-10 items-center justify-center rounded border border-gray-300 bg-navy text-white rtl:rotate-180"
        >
          <button onClick={NextPage}>
            <GoArrowRight className='h-7 w-7 transition hover:translate-x-3  duration-300' />
          </button>
        </a>
      </li>
    </ol>
  );
};

export default Pagination;
