import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const linkClass = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-600 hover:text-gray-900"
  }`;

function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        

        <NavLink to="/" className="text-gray-900 text-xl font-semibold">
          MockMate
        </NavLink>


        <div className="hidden md:flex space-x-8">
          <NavLink to="/user" className={linkClass}>Users</NavLink>
          <NavLink to="/post" className={linkClass}>Posts</NavLink>
          <NavLink to="/albums" className={linkClass}>Albums</NavLink>
          <NavLink to="/photo" className={linkClass}>Photos</NavLink>
        </div>


        <div
          className="md:hidden text-gray-900 text-2xl cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center py-4 space-y-4 md:hidden z-10">
            <NavLink to="/user" className={linkClass} onClick={() => setToggle(false)}>Users</NavLink>
            <NavLink to="/post" className={linkClass} onClick={() => setToggle(false)}>Posts</NavLink>
            <NavLink to="/albums" className={linkClass} onClick={() => setToggle(false)}>Albums</NavLink>
            <NavLink to="/photo" className={linkClass} onClick={() => setToggle(false)}>Photos</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
