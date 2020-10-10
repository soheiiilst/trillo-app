import React from 'react';

import SVGIcon from './SVGIcon';
import ButtonInline from './ButtonInline';

function Overview() {
  return (
    <div className='overview'>
      <h1 className='overview__heading'>Hotel Las Palmas</h1>

      <div className='overview__stars'>
        <SVGIcon cName='overview__icon-star' iconName='icon-star' />
        <SVGIcon cName='overview__icon-star' iconName='icon-star' />
        <SVGIcon cName='overview__icon-star' iconName='icon-star' />
        <SVGIcon cName='overview__icon-star' iconName='icon-star' />
        <SVGIcon cName='overview__icon-star' iconName='icon-star' />
      </div>

      <div className='overview__location'>
        <SVGIcon cName='overview__icon-location' iconName='icon-location-pin' />
        <ButtonInline>Albufeira, Portugal</ButtonInline>
      </div>

      <div className='overview__rating'>
        <div className='overview__rating-average'>8.6</div>
        <div className='overview__rating-count'>468 votes</div>
      </div>
    </div>
  );
}

export default Overview;
