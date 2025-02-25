import React from 'react';

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
}
