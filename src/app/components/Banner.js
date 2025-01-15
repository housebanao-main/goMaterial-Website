import CenterWrapper from '@/components/CenterWrapper'
import OrangeBtn from '@/components/OrangeBtn'
import { IoSearch } from "react-icons/io5";
import React from 'react'

const Banner = () => {
  return (
<CenterWrapper className={"flex items-center min-h-[50vh]"}>
    <div className=' basis-2/3 space-y-8'>
        <h1 className='font-bold text-4xl '>Building Strong Foundations: Premium Materials for Your Construction Needs</h1>
        <div className='flex items-center w-1/2 shadow-md'>
            <input type="text" placeholder='Search for TMT' className='outline-none border-none p-2 w-full py-3 '/>  
            <OrangeBtn className={"py-3"}><IoSearch/></OrangeBtn>
        </div>
<div className='flex gap-4 items-center'>
<div>Popular: </div>
{["Raw Materials", "Cements", "Steel", "Paints", "Polymers"].map((item,idx)=>(<div key={idx} className='bg-gray-200 rounded-full p-0.5 px-3 cursor-pointer'>{item}</div>))}
</div>
    </div>

</CenterWrapper>
  )
}

export default Banner