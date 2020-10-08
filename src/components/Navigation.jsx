import React from 'react'

import sprite from '../assets/sprite.svg'

function Navigation() {
  return (
    <nav className='user-nav'>
      <div className="user-nav__icon-box">
        <svg className='user-nav__icon'>
          <use xlinkHref={`${sprite}#icon-bookmark`} />
        </svg>
        <span className='user-nav__notification'>7</span>
      </div>

      <div className="user-nav__icon-box">
        <svg className='user-nav__icon'>
          <use xlinkHref={`${sprite}#icon-chat`} />
        </svg>
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
