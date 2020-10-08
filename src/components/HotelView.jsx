import React from 'react';

import Gallery from './Gallery';
import Overview from './Overview';

function HotelView() {
  return (
    <main className='hotel-view'>
      <Gallery />
      <Overview />
    </main>
  );
}

export default HotelView;
