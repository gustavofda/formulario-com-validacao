// src/components/Select.js
import React from 'react';
import '../styles/Select.css';

const Select = ({ label, error, children, ...props }) => (
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
    <select
      className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      {...props}
    >
      {children}
    </select>
    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
  </div>
);

export default Select;

