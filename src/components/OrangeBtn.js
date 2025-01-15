import React from 'react'

const OrangeBtn = ({children, className}) => {
  return (
    <button className={`${className} bg-secondary p-2 px-4 text-white rounded-lg`}>{children}</button>
  )
}

export default OrangeBtn