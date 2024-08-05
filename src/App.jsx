// src/App.js
import React from 'react';
import Form from './components/Form';
import './styles/App.css';

const App = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Membros</h1>
      <Form />
    </div>
  </div>
);

export default App;
