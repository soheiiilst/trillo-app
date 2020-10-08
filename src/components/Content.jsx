import React from 'react'

import Sidebar from './Sidebar';
import HotelView from './HotelView';

function Content() {
  return (
    <div className='content'>
      <Sidebar />
      <HotelView />
    </div>
  )
}

export default Content
