import { MainHeading, SubHeading } from '@/components/MainHeading'
import React from 'react'

export default function Filters() {
  return (
 <div className='p-4 bg-gray-100 min-w-80 rounded-lg'>
<SubHeading className={"mb-8 font-bold"}>Product Categories</SubHeading>
{[...Array(10)].map((v, idx) => (
    <div id={idx} key={idx} className='flex gap-1 mb-2'>
        <input type='checkbox'/>
        <label className=''>Category {idx + 1}</label>
        </div>
))}
 </div>
  )
}
