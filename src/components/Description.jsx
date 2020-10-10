import React from 'react'

import Paragraph from './Paragraph';
import List from './List';
import Recommend from './Recommend';

function Description() {
  const textParagraph1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
                          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
                          ut corporis incidunt deserunt quae architecto voluptate.`;
                          
  const textParagraph2 = `Accusantium cumque, quas, ut corporis incidunt deserunt quae
                          architecto voluptate delectus, inventore iure aliquid aliquam.`;
  return (
    <div className='description'>
      <Paragraph text={textParagraph1} />
      <Paragraph text={textParagraph2} />
      <List />
      <Recommend />
    </div>
  )
}

export default Description
