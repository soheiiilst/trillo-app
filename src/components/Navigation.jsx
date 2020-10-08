import React from 'react'

import SVGIcon from './SVGIcon';

function Navigation() {
  return (
    <nav className='user-nav'>
      <div className="user-nav__icon-box">
        <SVGIcon cName="user-nav__icon" iconName="icon-bookmark" />
        <span className='user-nav__notification'>7</span>
      </div>

      <div className="user-nav__icon-box">
        <SVGIcon cName="user-nav__icon" iconName="icon-chat" />
        <span className='user-nav__notification'>13</span>
      </div>
      <div className="user-nav__user">
        <img src="img/random-user.jpg" alt="User" className='user-nav__user-photo' />
        <span className="user-nav__username">John Doe</span>
      </div>
    </nav>
  )
}

export default Navigation




