"use client";
import { MainHeading } from '@/components/MainHeading'
import useWishlistStore from '@/store/wishlist'
import React from 'react'
import WishlistTable from './WishlistTable';

export default function WishlistProducts() {

    const {wishlist, updateWishlist} = useWishlistStore();
    
    console.log(wishlist);
  return (
  <div>
    <MainHeading>My wishlish</MainHeading>

    <WishlistTable/>
  </div>
  )
}
