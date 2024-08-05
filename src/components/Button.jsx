// src/components/Button.js
import React from 'react';
import '../styles/Button.css';

const Button = ({ children, ...props }) => (
  <button
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

export default Button;
