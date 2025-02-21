import Navbar from '@/app/components/Navbar'
import CenterWrapper from '@/components/CenterWrapper'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import ShopProducts from './components/ShopProducts'

export default function Products() {
  return (
    <Wrapper>
        <Navbar/>
<CenterWrapper>

<ShopProducts/>
</CenterWrapper>
    </Wrapper>
  )
}
