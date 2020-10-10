import React from 'react'

import Review from './Review';
import ButtonInline from './ButtonInline';

function UserReviews() {
  return (
    <div className='user-reviews'>
      <Review 
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.' 
        userPhoto='img/user-1.jpg' 
        userName='Nick Smith' 
        reviewDate='Feb 23rd, 2020' 
        userRating='7.8' />
      <Review 
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.' 
        userPhoto='img/user-2.jpg' 
        userName='Mary Thomas' 
        reviewDate='Sept 13rd, 2020' 
        userRating='9.3' />

      <ButtonInline>Show all <span>&rarr;</span></ButtonInline>
    </div>
  )
}

export default UserReviews
