import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Hamburger icons

function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-gray-900 text-xl font-semibold">
          MockMate
        </a>

        <div className="hidden md:flex space-x-8 text-gray-600 text-sm">
          <a href="/user" className="hover:text-gray-900 transition-colors">Users</a>
          <a href="/post" className="hover:text-gray-900 transition-colors">Posts</a>
          <a href="/albums" className="hover:text-gray-900 transition-colors">Albums</a>
          <a href="/photo" className="hover:text-gray-900 transition-colors">Photos</a>
        </div>

        <div className="md:hidden text-gray-900 text-2xl cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {toggle && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center py-4 space-y-4 md:hidden z-10">
            <a href="/user" className="text-gray-600 text-sm hover:text-gray-900" onClick={() => setToggle(false)}>Users</a>
            <a href="/post" className="text-gray-600 text-sm hover:text-gray-900" onClick={() => setToggle(false)}>Posts</a>
            <a href="/albums" className="text-gray-600 text-sm hover:text-gray-900" onClick={() => setToggle(false)}>Albums</a>
            <a href="/photo" className="text-gray-600 text-sm hover:text-gray-900" onClick={() => setToggle(false)}>Photos</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
