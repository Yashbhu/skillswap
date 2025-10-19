import React from 'react';
import { NavLink } from 'react-router-dom';
import adminImg from '@/assets/admin.png';
import userImg from '@/assets/user.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top nav */}
      <nav className="w-full border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black" aria-hidden="true" />
            <span className="text-base md:text-lg font-semibold tracking-tight">SkillSwap</span>
          </NavLink>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <NavLink to="/about" className="hover:text-gray-900">About</NavLink>
            <NavLink to="/pricing" className="hover:text-gray-900">Pricing</NavLink>
            <NavLink to="/chat" className="hover:text-gray-900">Live Chat</NavLink>
            <NavLink to="/email" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">Sign in</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Real‑time scheduling and chat
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Meet. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Schedule.</span> Grow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600">
            A cal.com‑inspired experience for the SkillSwap community. Book time with mentors, chat instantly, and keep calendars in sync.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <NavLink
              to="/email"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-900 text-white font-medium shadow-sm hover:bg-black"
            >
              Get started free
            </NavLink>
            <NavLink
              to="/chat"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-gray-900 font-medium hover:bg-gray-50"
            >
              Open live chat
            </NavLink>
            <NavLink to="/pricing" className="text-gray-600 hover:text-gray-900">View pricing →</NavLink>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img src={userImg} alt="User avatar" className="h-8 w-8 rounded-full border border-white" />
              <img src={adminImg} alt="Admin avatar" className="h-8 w-8 rounded-full border border-white" />
            </div>
            <p><span className="font-semibold text-gray-900">Mentors</span> and <span className="font-semibold text-gray-900">students</span> book time in minutes.</p>
          </div>
        </div>

        {/* Mockup */}
        <div className="mx-auto max-w-7xl px-6 pb-4">
          <div className="relative rounded-3xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <img src={adminImg} alt="Dashboard mockup" className="w-full rounded-2xl border border-gray-200" />
              <img src={userImg} alt="Chat mockup" className="w-full rounded-2xl border border-gray-200" />
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-9 w-9 rounded-lg bg-gray-900 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold">One‑click booking</h3>
            <p className="mt-2 text-gray-600">Share a link, pick a time. Works with Google Calendar and more.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-9 w-9 rounded-lg bg-gray-700 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Live chat</h3>
            <p className="mt-2 text-gray-600">Real‑time messaging between mentor and student, no setup required.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-9 w-9 rounded-lg bg-gray-500 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Clean & fast</h3>
            <p className="mt-2 text-gray-600">Minimal, accessible, and responsive. Optimized for conversions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/about" className="hover:text-gray-700">About</NavLink>
            <NavLink to="/pricing" className="hover:text-gray-700">Pricing</NavLink>
            <NavLink to="/chat" className="hover:text-gray-700">Live Chat</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
