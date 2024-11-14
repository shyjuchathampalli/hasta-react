// ContentBlock.jsx
import React from 'react';

const Packages = ({ category, title, description }) => {
  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{description}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
      </div>
    </div>
  );
};

export default Packages;
