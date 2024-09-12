import React from 'react';
import TabWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';
import './styles.css'; 

const App = () => {
  return (
    <div className="flex min-h-screen dynamic-gradient">
      <div className="w-1/2">
      
      </div>

      <div className="w-1/2 p-6 flex flex-col space-y-6 ">
        <TabWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default App;
