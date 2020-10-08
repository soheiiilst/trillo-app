import React from 'react'

function ButtonInline({cName, children}) {
  return (
    <button className={cName}>
      {children}
    </button>
  )
}

export default ButtonInline
