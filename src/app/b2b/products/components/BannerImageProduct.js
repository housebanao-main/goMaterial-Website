import { LargeHeading, SubHeading } from '@/components/MainHeading'
import OrangeBtn from '@/components/OrangeBtn'
import React from 'react'
import IMG from  "@/assets/b2b/image 386.svg"
import Image from 'next/image'

export default function BannerImageProduct() {
  return (
<div className='basis-3/4 bg-gradient-to-r from-[#0F172D] to-[#0C2D5F] rounded-lg relative '>
<div className=' text-white w-1/2 flex flex-col gap-10 justify-center p-10 h-full'>
    <div>
        
<LargeHeading className={"font-semibold"}>Stay Informed :</LargeHeading>
<LargeHeading className={"font-semibold mt-1"}>Steel Prices & News</LargeHeading>

    </div>
    <div className='flex gap-2'>
        <SubHeading className={"border-r "}>Live prices  straight from the market</SubHeading>
        <SubHeading className={"border-r "}>Choose from multiple locations </SubHeading>
        <SubHeading>Choose from wide range of brands</SubHeading>

    </div>
<OrangeBtn className={"max-w-fit"}>View Prices</OrangeBtn>
</div>
<img src={IMG.src} alt="banner" className='w-80 absolute bottom-0 right-0 '/>
    </div>
  )
}
