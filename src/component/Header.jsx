import React, { useState } from "react";

function Header({ onSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-lg text-white ">SocialApp</div>

        <div className="hidden md:flex items-center gap-6">
          <input
            type="search"
            placeholder="Search posts..."
            aria-label="Search"
            className="px-3 py-1 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black min-w-[180px]"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Toggle navigation</span>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
