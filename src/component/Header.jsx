import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-black text-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-lg text-gray-500">SocialApp</div>

        {/* Desktop links + search */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4 list-none m-0 p-0 ">
            <li><a className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md" href="#">Home</a></li>
            <li><a className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md" href="#">About</a></li>
            <li><a className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md" href="#">Posts</a></li>
            <li><a className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md" href="#">Profile</a></li>
            <li><a className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md" href="#">Login</a></li>
          </ul>

          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 min-w-[180px]"
          />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Toggle navigation</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu (rendered when open) */}
        {open && (
          <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-md p-3 w-56 z-40">
            <div className="mb-3">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Mobile search"
                className="w-full px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <ul className="flex flex-col gap-2">
              <li><a className="block text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100" href="#">Home</a></li>
              <li><a className="block text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100" href="#">About</a></li>
              <li><a className="block text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100" href="#">Posts</a></li>
              <li><a className="block text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100" href="#">Profile</a></li>
              <li><a className="block text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100" href="#">Login</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header