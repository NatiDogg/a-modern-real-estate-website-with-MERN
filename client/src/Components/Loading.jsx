import React from 'react';

const Loading = () => {
  return (
    <div>

      <div 
        className="animate-spin h-10 w-10 border-4 border-indigo-500 border-solid rounded-full border-t-transparent"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loading;