'use client';
import useCartStore from '@/store/cart';
import React from 'react'
import { IoCartOutline } from 'react-icons/io5';

export default function CartHeader() {
    const {b2cCart}= useCartStore();
    // console.log(b2cCart.length);
  return (
    
 <div  className="flex items-center  hover:underline hover:underline-offset-2 cursor-pointer text-2xl relative">
<IoCartOutline/>

<sup>{b2cCart.length}</sup>

</div>
  )
}
