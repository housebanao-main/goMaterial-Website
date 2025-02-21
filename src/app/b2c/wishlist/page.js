import Wrapper from '@/components/Wrapper'
import React from 'react'
import WishlistBanner from './components/WishlistBanner'
import CenterWrapper from '@/components/CenterWrapper'
import WishlistProducts from './components/WishlistProducts'

export default function B2cWishlist() {
  return (
    <Wrapper>
      <WishlistBanner text={"Wishlist"}/>
      <CenterWrapper>
        <WishlistProducts/>
      </CenterWrapper>
    </Wrapper>
  )
}
