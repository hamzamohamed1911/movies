import React, { useState } from 'react';

const FilteredHeader = ({ tv, Movies,  label, onYearChange, onRatingChange, onLanguageChange, onTypeChange }) => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedKind, setSelectedKind] = useState('');

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    onLanguageChange(language);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  const handleKindChange = (event) => {
    const kind = event.target.value;
    setSelectedKind(kind);
    onTypeChange(kind);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    onYearChange(year);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, index) => currentYear - index);

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
          <option value="">Language</option>
            <option value="ar">Arabic</option> 
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option> 
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
         {Movies &&   <select className='bg-navy p-3 rounded-3xl w-72 lg:w-auto' value={selectedKind} onChange={handleKindChange}>
              <option value=""> Type</option>
              <option value="28">Action</option>
              <option value="10749">Romantic</option>
              <option value="35">Comedy</option>
              <option value="18">Drama</option>
              <option value="16">Animation</option>
            </select>}



            {tv && <select className='bg-navy p-3 rounded-3xl w-72 lg:w-auto' value={selectedKind} onChange={handleKindChange}>
  <option value="">Type</option>
  <option value="10759">Action & Adventure</option>
  <option value="16">Animation</option>
  <option value="35">Comedy</option>
  <option value="80">Crime</option>
  <option value="99">Documentary</option>
  <option value="18">Drama</option>
  <option value="10751">Family</option>
  <option value="10762">Kids</option>
  <option value="9648">Mystery</option>
  <option value="10764">Reality</option>
  <option value="10765">Sci-Fi & Fantasy</option>
  <option value="10766">Soap</option>
  <option value="10767">Talk</option>
  <option value="10768">War & Politics</option>
             </select>}
        </div>
      </div>
    </div>
  );
};

export default FilteredHeader;
