import React from 'react'

import SideNav from './SideNav';

function Sidebar() {
  return (
    <nav className='sidebar'>
      <SideNav />

      <div className="legal">
        &copy; {new Date().getFullYear()} by trillo. All right reserved.
      </div>
    </nav>
  )
}

export default Sidebar
