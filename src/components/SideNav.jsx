import React from 'react'

import SideNavItem from './SideNavItem';

function SideNav() {
  return (
    <ul className="side-nav">
      <SideNavItem active="true" iconName='icon-home'>Hotel</SideNavItem>
      <SideNavItem iconName='icon-aircraft-take-off'>Flight</SideNavItem>
      <SideNavItem iconName='icon-key'>Car rental</SideNavItem>
      <SideNavItem iconName='icon-map'>Tours</SideNavItem>
    </ul>
  )
}

export default SideNav
