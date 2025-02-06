import React from 'react'



export  function LargeHeading({className, children}) {
  return (
   <h1 className={`${className} text-4xl `}>{children}</h1>
  )
}
export const MainHeading = ({children, className}) => {
  return (
    <h2 className={`${className} text-2xl`}>{children}</h2>
  )
}

export const SubHeading = ({children, className}) => {
    return (
        <h3 className={`${className} text-base`}>{children}</h3>
    )
}
export const Paragraph = ({children, className}) => {
    return (
        <p className={`${className} text-sm`}>{children}</p>
    )
}
