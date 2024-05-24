import React, { useState } from 'react';

const FilteredHeader = ({ label }) => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedKind, setSelectedKind] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleKindChange = (event) => {
    setSelectedKind(event.target.value);
  };

  return (
    <div className="bg-transparent text-white p-6 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="lg:text-6xl text-3xl font-bold text-babyblue mb-4 lg:mb-0">{label}</h1>
        <div className="flex flex-wrap justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 text-xl">
          <select className='bg-navy lg:p-3 p-2 rounded-3xl mb-4 lg:mb-0' value={selectedYear} onChange={handleYearChange}>
            <option value="">Filter by Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select className='bg-navy lg:p-3 p-2 rounded-3xl mb-4 lg:mb-0' value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">Filter by Language</option>
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          <select className='bg-navy lg:p-3 p-2 rounded-3xl mb-4 lg:mb-0' value={selectedRating} onChange={handleRatingChange}>
            <option value="">Filter by Rating</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
          </select>
          <select className='bg-navy lg:p-3 p-2 rounded-3xl' value={selectedKind} onChange={handleKindChange}>
            <option value="">Filter by Kind</option>
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
