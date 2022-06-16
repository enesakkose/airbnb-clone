import React from 'react'
import './Button.scss'

function Button({children}) {
  return (
    <Button className='btn'>{children}</Button>
  )
}

export default Button