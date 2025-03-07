'use client';
import useWishlistStore from '@/store/wishlist';
import React from 'react'
import { CiHeart } from 'react-icons/ci';

export default function WishlistHeader() {
    const {wishlist} = useWishlistStore();
    console.log(wishlist);
  return (
    <div className="flex items-center  hover:underline hover:underline-offset-2 cursor-pointer text-2xl relative">
             <CiHeart />
             <sup>{wishlist.length}</sup>
          
           </div>
  )
}
