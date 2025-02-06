'use client';
import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading } from '@/components/MainHeading';

import React from 'react'
import Marquee from "react-fast-marquee";

export default function ShopByBrands() {
  return (
    <div className='bg-[#E1FFD9]'>
        <CenterWrapper className={""}>
            <MainHeading className={"text-center font-bold mb-8"}>Shop By Brands</MainHeading>

<Marquee autoFill >
<div className='mx-8'>
    <img className='w-40 object-cover ' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkySveKIEnKvhSiQ-mWklJiIgnsCZ4bA5-w&s"}  />
</div>
</Marquee>
        </CenterWrapper>
    </div>
  )
}
