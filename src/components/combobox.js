import React, { useState } from 'react';

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Kubra', 'Asad', 'Areeb', 'Aiza'];
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mb-6 relative inline-block text-left" style={{paddingTop:'20px'}}>
      <button
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        style={{backgroundColor: '#c4b5fd', color: 'black'}}
      >
        {selectedOption || 'Select an option'}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComboBox;


