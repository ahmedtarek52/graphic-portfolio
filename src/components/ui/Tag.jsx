import React from 'react';

const Tag = ({ name, className = '' }) => {
  return (
    <span className={`px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs ${className}`}>
      #{name}
    </span>
  );
};

export default Tag;