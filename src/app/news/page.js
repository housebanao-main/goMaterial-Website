import CenterWrapper from '@/components/CenterWrapper'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import Navbar from '../components/Navbar'
import RawMaterialPrices from './components/RawMaterialPrices'
import LatestNews from './components/LatestNews'

export default function News() {
  return (
  <Wrapper>
      <Navbar/>
    <CenterWrapper>
<RawMaterialPrices/>
<LatestNews/>
 
    </CenterWrapper>
  </Wrapper>
  )
}
