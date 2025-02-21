import React from 'react'
import { BsHandbag } from "react-icons/bs";
import { MainHeading, Paragraph, SubHeading } from '@/components/MainHeading';


export default function ProductCard({id, image, name, category,  price}) {
 
  return (
    <div key={id} className="bg-white rounded-lg border overflow-hidden">
    <img src={image} alt={name} className="w-full h-72 object-cover" />
    <div className='flex items-center justify-between p-4 bg-gray-100'>
    <div className="p-4 space-y-1 ">
      <Paragraph className="text-sm text-gray-500">{category}</Paragraph>
      <MainHeading className="font-semibold text-lg ">{name}</MainHeading>
      <SubHeading className="">{price}</SubHeading>
      
    </div>
    <button className="mt-4 p-4 bg-gray-200 rounded-full text-2xl border border-gray-700 ">
        <BsHandbag className="text-gray-600" />
      </button>
    </div>
  </div>
  )
}
