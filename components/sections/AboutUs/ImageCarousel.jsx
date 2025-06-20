"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]); // Dependency on images length to avoid issues if the images change

  return (
    <div className="relative rounded-lg w-[95vw] h-[80vh] overflow-hidden mt-4">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-[800px] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={1440}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 items-center justify-center bg-slate-900 p-1 rounded-lg bg-opacity-70">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-lightRed"
          >
            <LuChevronLeftCircle className="text-[30px]" />
          </button>
          <div className="flex space-x-3">
            {images.map((_, idx) => (
              <span
                key={idx}
                onClick={() => handleIndicatorClick(idx)}
                className={`block h-3 w-3 rounded-full cursor-pointer ${
                  currentIndex === idx ? "bg-lightRed" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-lightRed"
          >
            <LuChevronRightCircle className="text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
