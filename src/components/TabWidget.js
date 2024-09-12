import React, { useState } from 'react';
import NavBar from './NavBar';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const [content, setContent] = useState({
    about: "This is the About Me section where you can write a brief introduction about yourself. The content in this section will wrap properly and should be readable.",
    experiences: "This section can include your work experiences, internships, and other relevant experiences.",
    recommended: "Here you can list recommendations or endorsements from colleagues or clients.",
  });

  const handleEdit = (section) => {
    const newText = prompt(`Edit ${section} section:`, content[section.toLowerCase()]);
    if (newText !== null) {
      setContent((prevContent) => ({
        ...prevContent,
        [section.toLowerCase()]: newText,
      }));
    }
  };

  return (
    <div className="bg-gradient-to-r from-navy-600 to-navy-400 shadow-2xl rounded-lg p-6 transition-transform transform hover:scale-105 h-2.3/5 my-6 relative overflow-hidden">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="scrollable-content mt-4 flex flex-col justify-between ">
        {activeTab === 'about' && (
          <div className="text-white flex flex-col justify-between h-full ">
            <div className="pb-16 overflow-y-auto h-[200px]">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">About Me</h2>
              <p className="whitespace-normal break-words leading-relaxed">
                {content.about}
              </p>
            </div>
            <button
              onClick={() => handleEdit('About')}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 shadow-lg"
            >
              Edit
            </button>
          </div>
        )}
        {activeTab === 'experiences' && (
          <div className="text-white flex flex-col justify-between h-full relative">
            <div className="pb-16 overflow-y-auto h-[200px]">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Experiences</h2>
              <p className="whitespace-normal break-words leading-relaxed">
                {content.experiences}
              </p>
            </div>
            <button
              onClick={() => handleEdit('Experiences')}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 shadow-lg"
            >
              Edit
            </button>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div className="text-white flex flex-col justify-between h-full relative">
            <div className="pb-16 overflow-y-auto h-[200px]">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Recommended</h2>
              <p className="whitespace-normal break-words leading-relaxed">
                {content.recommended}
              </p>
            </div>
            <button
              onClick={() => handleEdit('Recommended')}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 shadow-lg"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabWidget;
