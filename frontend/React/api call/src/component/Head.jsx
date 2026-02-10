import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function Head() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-4 flex items-center justify-between w-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-md text-white">
      
      <a href="/user" className="font-bold text-2xl md:text-4xl">
        API Showcase
      </a>

      <nav className="hidden md:flex gap-6 text-lg">
        <a href="/user" className="hover:text-pink-300">User</a>
        <a href="/albums" className="hover:text-pink-300">Albums</a>
        <a href="/photo" className="hover:text-pink-300">Photo</a>
        <a href="/post" className="hover:text-pink-300">Post</a>
      </nav>

      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        <RiBarChartHorizontalLine />
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-sm flex flex-col px-8 gap-4 py-6 md:hidden text-white">
          <a href="/user" onClick={() => setOpen(false)}>User</a>
          <a href="/albums" onClick={() => setOpen(false)}>Albums</a>
          <a href="/photo" onClick={() => setOpen(false)}>Photo</a>
          <a href="/post" onClick={() => setOpen(false)}>Post</a>
        </div>
      )}
    </header>
  );
}

export default Head;
