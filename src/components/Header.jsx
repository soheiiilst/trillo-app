import React from 'react'

import Search from './Search';
import Navigation from './Navigation';

function Header() {
  return (
    <div className='header'>
      <img src="img/logo.png" alt="trillo logo" className='logo' />

      <Search />

      <Navigation />
    </div>
  )
}

export default Header
