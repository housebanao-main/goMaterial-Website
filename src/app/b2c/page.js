import CenterWrapper from '@/components/CenterWrapper'
import React from 'react'
import Header from './components/Header'
import ShopBySpace from './components/Shopbyspace'
import About from './components/About'
import Footer from '@/components/Footer'
import Banner from './components/Banner'
import GreatDeals from './components/GreatDeals'
import ShopWithUs from './components/ShopWithUs'
import TrendingProducts from './components/TrendingProducts'
import ShopByBrands from './components/ShopByBrands'

import WhyChooseUs from './components/WhyChooseUs'
import TellReqd from './components/TellReqd'
import ProductLaunches from './components/ProductLaunches'




export default function B2b() {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Banner/>
      <ShopBySpace/>
    <GreatDeals/>
<ShopWithUs/>
<TrendingProducts/>
<ProductLaunches/>
<ShopByBrands/>
<WhyChooseUs/>
<TellReqd/>
      <About/>
      <Footer/>
   {/* <CenterWrapper>
   </CenterWrapper> */}
</div>
  )
}
