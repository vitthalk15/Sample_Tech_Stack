import React from 'react';

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sticky top-0 z-10 flex space-x-4 border-b pb-2 mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg p-2">
      {['about', 'experiences', 'recommended'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`p-2 text-white hover:bg-blue-500 rounded-lg transition duration-200 ${
            activeTab === tab ? 'font-bold border-b-2 border-blue-300 bg-blue-700' : 'bg-transparent'
          }`}
          aria-label={`Go to ${tab}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
