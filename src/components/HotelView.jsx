import React from 'react';

import Gallery from './Gallery';
import Overview from './Overview';
import Detail from './Detail';
import CallToAction from './CallToAction';

function HotelView() {
  return (
    <main className='hotel-view'>
      <Gallery />
      <Overview />
      <Detail />
      <CallToAction />
    </main>
  );
}

export default HotelView;
