import React from 'react';

function Button({text1, text2}) {
  return (
    <button className='btn'>
      <span className='btn__visible'>{text1}</span>
      <span className='btn__invisible'>{text2}</span>
    </button>
  );
}

export default Button;
