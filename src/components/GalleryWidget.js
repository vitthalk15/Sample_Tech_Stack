import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); 

  const addImageFromURL = () => {
    const newImage = prompt("Enter image URL:");
    if (newImage) {
      setImages((prevImages) => [...prevImages, newImage]);
      alert('Image added successfully!');
    }
  };

  const addImageFromFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
        alert('Image added successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const nextImageGroup = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3));
  };

  const previousImageGroup = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-r from-navy-600 to-navy-400 border-2 border-transparent shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 h-2/5 relative">
      <button className="bg-blue-900 text-white p-2 rounded-lg mb-4 w-32 text-center">
        Gallery
      </button>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={addImageFromURL}
          className="bg-white text-blue-700 p-2 rounded-lg hover:bg-gray-200 transition duration-200"
          aria-label="Add Image by URL"
        >
          Add Image URL
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={addImageFromFile}
          className="mt-2"
          aria-label="Upload Image"
        />
      </div>
      {images.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-4 mb-4">
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 h-48 border-4 border-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${currentIndex + index}`}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={previousImageGroup}
              disabled={currentIndex === 0}
              className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition duration-200"
              aria-label="Previous Images"
            >
              Previous
            </button>
            <button
              onClick={nextImageGroup}
              disabled={currentIndex + 3 >= images.length}
              className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition duration-200"
              aria-label="Next Images"
            >
              Next
            </button>
          </div>
          <div className="mt-2 text-black">
            {Math.min(currentIndex + 3, images.length)} / {images.length}
          </div>
        </div>
      ) : (
        <div className="text-black">No images in the gallery.</div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg shadow-2xl"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
              aria-label="Close Modal"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;
