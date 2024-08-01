'use client'
import { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4; // total number of slides
  const visibleSlides = 3; // number of slides visible at a time

  const handleMouseEnter = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex >= totalSlides - visibleSlides ? prevIndex : prevIndex + 1));
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
      >
        <div className="min-w-[33.3333%] h-64 bg-red-500 flex items-center justify-center text-white text-2xl">1</div>
        <div className="min-w-[33.3333%] h-64 bg-blue-500 flex items-center justify-center text-white text-2xl">2</div>
        <div className="min-w-[33.3333%] h-64 bg-green-500 flex items-center justify-center text-white text-2xl">3</div>
        <div className="min-w-[33.3333%] h-64 bg-yellow-500 flex items-center justify-center text-white text-2xl">4</div>
      </div>
      
      <div
        onMouseEnter={() => handleMouseEnter('left')}
        className="absolute top-0 left-0 h-full w-1/6 bg-transparent cursor-pointer"
      />
      <div
        onMouseEnter={() => handleMouseEnter('right')}
        className="absolute top-0 right-0 h-full w-1/6 bg-transparent cursor-pointer"
      />
    </div>
  );
};

export default Carousel;
