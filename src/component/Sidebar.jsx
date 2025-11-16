import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-full lg:w-48 p-4 sm:p-5 md:p-6 bg-gray-900 text-white flex flex-col lg:flex-col items-center lg:items-start">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 lg:mb-6 w-full text-center lg:text-left">
        Menu
      </h2>

      <ul className="flex  flex-col gap-2 md:gap-3 w-full">
        <li
          className="w-full"
          onClick={() => {
            setSelectedTab("home");
          }}
        >
          <Link
            to="/"
            className={`flex items-center justify-center lg:justify-start gap-2 no-underline text-white px-3 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-sm font-medium ${
              selectedTab === "home" && "bg-gray-700"
            } hover:bg-gray-700 transition w-full`}
            aria-current="page"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 shrink-0 "
              width="16"
              height="5"
              aria-hidden="true"
            >
              <use xlinkHref="#home" />
            </svg>
            <span className="flex flex-row gap-2 lg:text-sm text-xs sm:text-sm">
              
              <FaHome />     Home

            </span>
          </Link>
        </li>

        <li
          className="w-full"
          onClick={() => {
            setSelectedTab("create-post");
          }}
        >
          <Link
            to="/create-post"
            className={`flex items-center justify-center lg:justify-start gap-2 no-underline text-white px-3 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-sm font-medium ${
              selectedTab === "create-post" && "bg-gray-700"
            } hover:bg-gray-700 transition w-full`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 shrink-0"
              width="16"
              height="5"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            <span className="flex flex-row gap-2  lg:text-sm text-xs sm:text-sm">
              <FaPencil /> Create Post
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;


