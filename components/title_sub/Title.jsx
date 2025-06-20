"use client";
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mb-[10px] overflow-hidden">
      <div className="inline-block">
        <h2 className="text-[32px] max-lg:text-[22px] max-md:text-[20px] border-b-4 border-lightRed mx-auto text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
