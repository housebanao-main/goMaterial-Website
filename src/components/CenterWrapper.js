import React from 'react'

const CenterWrapper = ({children, className}) => {
  return (
    <div className={`${className} max-w-screen-2xl mx-auto w-full p-4 py-[5vh]`}>
{children}
    </div>
  )
}

export default CenterWrapper