import React from 'react'

import SVGIcon from './SVGIcon';

function SideNavItem({active, iconName, children}) {
  return (
    <li className={`side-nav__item ${active ? 'side-nav__item--active' : ''}`}>
      <span className="side-nav__button">
        <SVGIcon cName="side-nav__icon" iconName={iconName} />
        <span>{children}</span>
      </span>
    </li>
  )
}

export default SideNavItem
