import React, { useState } from 'react';

const FilteredHeader = ({ label, onYearChange ,onRatingChange}) => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedKind, setSelectedKind] = useState('');



  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleRatingChange = (event) => {
    const rate = event.target.value;

    setSelectedRating(rate);
    onRatingChange(rate)
  };

  const handleKindChange = (event) => {
    setSelectedKind(event.target.value);
  };


  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    onYearChange(year); 
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index);



  return (
    <div className="bg-transparent text-white p-6 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="lg:text-6xl text-3xl font-bold text-babyblue mb-4 lg:mb-0">{label}</h1>
        <div className="flex flex-wrap justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 text-xl">

        <select className='bg-navy p-3 rounded-3xl mb-4 lg:mb-0 w-72 lg:w-auto' value={selectedYear} onChange={handleYearChange}>
  <option value=""> Year</option>
  {years.map((year) => (
    <option key={year} value={year}>{year}</option>
  ))}
</select>
          <select className='bg-navy p-3 rounded-3xl mb-4 lg:mb-0 w-72 lg:w-auto' value={selectedLanguage} onChange={handleLanguageChange}>
            <option value=""> Language</option>
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          <select className='bg-navy p-3 rounded-3xl mb-4 lg:mb-0 w-72 lg:w-auto' value={selectedRating} onChange={handleRatingChange}>
            <option value=""> Rating</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
          </select>
          <select className='bg-navy p-3 rounded-3xl w-72 lg:w-auto' value={selectedKind} onChange={handleKindChange}>
            <option value=""> Kind</option>
            <option value="Action">Action</option>
            <option value="Romantic">Romantic</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Animation">Animation</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilteredHeader;
