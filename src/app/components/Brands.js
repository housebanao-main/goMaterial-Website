import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading } from '@/components/MainHeading'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <>
    <div className='bg-primary'>
<CenterWrapper className={"pb-4"}>
    <MainHeading className={"text-white font-bold"}>Shop By Brands
    </MainHeading>

</CenterWrapper>

    </div>
    <div className='bg-gradient-to-b from-primary from-50% to-white to-50%'>
<CenterWrapper className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-white border rounded-xl  px-2 "}>
{[...Array(5)].map((_,idx)=> (
    <div key={idx}>
    <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkySveKIEnKvhSiQ-mWklJiIgnsCZ4bA5-w&s"} width={250} height={250} alt='logo'/>
    </div>
))}
</CenterWrapper>
    </div>
    </>
  )
}

export default Brands