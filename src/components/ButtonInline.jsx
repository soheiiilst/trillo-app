import React from 'react'

function ButtonInline({cName, children}) {
  return (
    <button className='btn-inline'>
      {children}
    </button>
  )
}

export default ButtonInline
