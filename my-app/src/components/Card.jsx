import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-between">
      
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-40">
        <h1 className="text-6xl md:text-8xl font-extrabold text-indigo-600 tracking-tight leading-tight">
          SKILLSWAP
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-6 max-w-2xl">
          Swap your skills. Grow together. Achieve more.
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl text-lg md:text-xl">
          Join a community of learners and creators. Connect, share, and level up your skills effortlessly.
        </p>
        <NavLink
          to="/email"
          className="mt-10 px-12 py-4 bg-indigo-600 text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Get Started
        </NavLink>
      </header>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row justify-around items-center text-center mt-20 px-6 md:px-20 space-y-12 md:space-y-0 md:space-x-12">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">Connect</h3>
          <p className="mt-2 text-gray-500">Find people who want to exchange skills and grow together.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">Learn</h3>
          <p className="mt-2 text-gray-500">Access new knowledge, tutorials, and practical projects.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">Share</h3>
          <p className="mt-2 text-gray-500">Teach what you know and inspire others in the community.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        &copy; {new Date().getFullYear()} Skillswap. All rights reserved.
      </footer>
    </div>
  );
}
