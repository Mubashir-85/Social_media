import React from 'react'

function Sidebar({selectedTab, setSelectedTab}) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: '180px' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"
        onClick={()=>{setSelectedTab("home")}}>
          <a href="#" className={`nav-link text-white ${selectedTab === 'home' && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="5" aria-hidden="true">
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>

        <li
        onClick={()=>{setSelectedTab("createPost")}}>
          <a href="#" className={`nav-link text-white ${selectedTab === 'createPost' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="5" aria-hidden="true">
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </a>
        </li>

       
      </ul>

      <hr />

    </div>
  )
}

export default Sidebar