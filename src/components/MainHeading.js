import React from 'react'

export const MainHeading = ({children, className}) => {
  return (
    <h2 className={`${className} text-xl`}>{children}</h2>
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
