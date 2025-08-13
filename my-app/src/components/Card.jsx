import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-5xl h-[80vh] p-16 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
        
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight">
          SKILLSWAP
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-gray-600 mt-6 max-w-2xl">
          Swap your skills with others and grow together
        </h2>

        {/* Button */}
        <NavLink
          to="/email"
          className="mt-10 px-12 py-5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Login with Email
        </NavLink>
      </div>
    </div>
  );
}
