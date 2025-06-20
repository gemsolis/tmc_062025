import React from "react";

const SecondaryButton = ({ title, ...props }) => {
  return (
    <button
      className="relative inline-flex items-center justify-start px-6 max-md:px-4 py-4 max-md:py-2 overflow-hidden font-medium transition-all border-deepRed bg-white border-2 rounded-lg hover:bg-black group"
      {...props}
    >
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all border-black rounded-lg"></span>
      <span className="relative w-full text-center text-deepRed font-bold transition-colors duration-300 ease-in-out group-hover:text-white">
        {title}
      </span>
    </button>
  );
};

export default SecondaryButton;
