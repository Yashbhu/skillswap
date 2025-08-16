import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="text-4xl font-extrabold text-indigo-600">
        SKILLSWAP
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 md:gap-12 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold px-4 py-2 bg-indigo-600 text-white rounded-md transition-all"
              : "text-lg font-semibold px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/templates"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold px-4 py-2 bg-indigo-600 text-white rounded-md transition-all"
              : "text-lg font-semibold px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all"
          }
        >
          Templates
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold px-4 py-2 bg-indigo-600 text-white rounded-md transition-all"
              : "text-lg font-semibold px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold px-4 py-2 bg-indigo-600 text-white rounded-md transition-all"
              : "text-lg font-semibold px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all"
          }
        >
          Pricing
        </NavLink>
      </div>
    </nav>
  );
}
