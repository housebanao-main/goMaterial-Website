import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Wrapper = ({children, className}) => {
  return (
    <div className={`${className} grid grid-flow-row grid-rows-[auto,1fr,auto] min-h-screen`}>
<Header/>
<div>
{children}
</div>
<Footer/>
  
    </div>
  )
}

export default Wrapper