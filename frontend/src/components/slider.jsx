// src/components/SlidingImage.js
import React from 'react';
import logo from '../uploads/logo.png';

const SlidingImage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="h-full object-cover animate-slide"
          src={logo} alt=''
        />
      </div>
    </div>
  );
};

export default SlidingImage;
