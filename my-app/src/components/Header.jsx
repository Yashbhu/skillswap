import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between p-5">
      
        <Link to="/" className="text-7xl py-1.5 px-5">SKILLSWAP</Link>

    
        <div className="flex gap-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-4xl px-10 bg-blue-600 text-white rounded-md"
                : "text-4xl px-10 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/templates"
            className={({ isActive }) =>
              isActive
                ? "text-4xl px-10 bg-blue-600 text-white rounded-md"
                : "text-4xl px-10 hover:text-blue-600"
            }
          >
            Templates
          </NavLink>

          <NavLink to="/about" className={({isActive})=>isActive?"text-4xl px-10 bg-blue-400 text-white rounded-md":"text-4xl px-10 hover:text-blue-400"}>
            About
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-4xl px-10 bg-blue-600 text-white rounded-md"
                : "text-4xl px-10 hover:text-blue-600"
            }
          >
            Pricing
          </NavLink>
        </div>
      </nav>
    </>
  );
}
