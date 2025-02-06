import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading } from '@/components/MainHeading'

import { IMG_PLACEHOLDER } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

export default function GreatDeals() {
    const data= [
        {
            title: "LED lights",
            discount: "Get 20% off",
            color: "#D9FCF6",
            textColor: "#6FB3A2",
            image: IMG_PLACEHOLDER,
            isImageTop: true
        },
        {
            title: "Cement",
            discount: "Get upto 40% off on bulk orders",
            color: "#FFEDDE",
            textColor: "#B38F7A",
            image: IMG_PLACEHOLDER,
            isImageTop: false
        },
        {
            title: "Sanitaryware & fittings",
            discount: "Get upto 20% off on bulk orders",
            color: "#ECDAF2",
            textColor: "#A87FB3",
            image: IMG_PLACEHOLDER,
            isImageTop: true
        },
    ]
  return (
    <CenterWrapper className={"space-y-8"}>
<MainHeading className={"font-bold text-center"}>Great Deals, selling fast!</MainHeading>
<div className='flex items-center justify-between gap-4'>
{data.map((deal, index)=> (
    <Card key={index} data={deal}/>
))}
</div>

    </CenterWrapper>
  )
}


const Card= ({data})=> {

    return (
        <div style={{
            backgroundColor: data.color,
            color: data.textColor
        }} className={`  w-96 h-96 rounded-tl-[45%] flex flex-col justify-between p-6 pl-16`}>
    <div className='pt-[20%]'>
        <MainHeading className={"font-bold"}>{data.title} </MainHeading>
        <p className='font-semibold'>{data.discount}</p>
    </div>
    <div>
        <Image src={data.image} alt="img" width={150} height={150} className="h-full object-cover ml-auto"/>
    </div>
        </div>
    )
}