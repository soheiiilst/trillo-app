import React from 'react';

import Gallery from './Gallery';
import Overview from './Overview';
import Detail from './Detail';

function HotelView() {
  return (
    <main className='hotel-view'>
      <Gallery />
      <Overview />
      <Detail />
    </main>
  );
}

export default HotelView;
