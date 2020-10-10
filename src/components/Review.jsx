import React from 'react';

function Review({ text, userPhoto, userName, reviewDate, userRating }) {
  return (
    <figure className='review'>

      <blockquote className='review__text'>{text}</blockquote>

      <figcaption className='review__user'>

        <img src={userPhoto} alt='User' className='review__photo' />

        <div className='review__user-box'>
          <p className='review__user-name'>{userName}</p>
          <p className='review__user-date'>{reviewDate}</p>
        </div>

        <div className='review__rating'>{userRating}</div>

      </figcaption>

    </figure>
  );
}

export default Review;
