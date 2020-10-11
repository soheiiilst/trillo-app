import React from 'react'

import Button from './Button';

function CallToAction() {
  return (
    <div className='cta'>
      <h2 className='cta__book-now'>Good news! We have 4 free rooms for your selected dates!</h2>
      <Button text1='Book now' text2='Only 4 rooms left' />
    </div>
  )
}

export default CallToAction
