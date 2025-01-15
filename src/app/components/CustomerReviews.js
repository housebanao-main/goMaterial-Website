import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading, Paragraph, SubHeading } from '@/components/MainHeading'
import { MdOutlineArrowBackIos } from "react-icons/md";
import Image from 'next/image'
import React from 'react'

const CustomerReviews = () => {
    const arr= [
        {
            icon: "https://placehold.jp/400x250.png",
            description : "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs.",
            name: "Nitin Sharma",
            location : "GGN"
        },
        {
            icon: "https://placehold.jp/400x250.png",
            description : "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs.",
            name: "Nitin Sharma",
            location : "GGN"
        },
        {
            icon: "https://placehold.jp/400x250.png",
            description : "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs.",
            name: "Nitin Sharma",
            location : "GGN"
        },

    ]
  return (
    <CenterWrapper className={"space-y-4"}>
        <MainHeading className={"text-black font-bold"}>What our customer says</MainHeading>
        <div className='grid grid-cols-3 gap-4 '>
            {arr.map(({icon, description, name, location},idx)=>
            <Card key={idx} icon={icon} description={description} name={name} location={location}/>
            )}
        </div>
        <div className='flex justify-center items-center gap-4'>
<div className='p-4 border-primary border'><MdOutlineArrowBackIos/> </div>
<div className='p-4 border-primary border rotate-180'><MdOutlineArrowBackIos/> </div>

        </div>
        </CenterWrapper>
  )
}

const Card= ({icon, description, name, location})=> {
    return ( 
        <div className='p-4 border rounded-xl space-y-4'>
<div className=''>
    <Image src={icon} alt={name} width={400} height={250} className='mx-auto rounded-xl' />
</div>
<Paragraph>{description}</Paragraph>
<div className='space-y-2'>
<MainHeading className={"text-center"}>{name}</MainHeading>
<SubHeading className={"text-center"}>{location} </SubHeading>
</div>

        </div>
    )
}

export default CustomerReviews