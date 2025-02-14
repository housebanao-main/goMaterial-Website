import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading, Paragraph, SubHeading } from '@/components/MainHeading'
import img4 from "@/assets/b2b/image 214.png"
import img5 from "@/assets/b2b/image 218.png"
import img6 from "@/assets/b2b/image 219.png"
import img3 from "@/assets/b2b/image 230.png"
import img1 from "@/assets/b2b/image 303.png"
import img2 from "@/assets/b2b/image 304.png"
import Image from 'next/image'
import React from 'react'

const ExploreCategories = () => {
    const arr= [
        {name: "Steels",
            icon: img1,
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Non Ferrous",
            icon: img2,
            categories: "Aluminium ingot, wire rods, and more",
            link: ""

        },
        {name: "Polymers",
            icon: img3,
            categories: "PVC, PPHP, PPCP, LLDPE, and more",
            link: ""

        },
        {name: "Chemicals",
            icon: img4,
            categories: "Methanol, acetic acid, acetone and more",
            link: ""

        },
        {name: "Hardware",
            icon: img5,
            categories: "Drill machine, power saws, cutting wheel and more",
            link: ""

        },
        {name: "Electrical appliances",
            icon: img6,
            categories: "Electrical wire, switches and more",
            link: ""

        }
    ]
  return (
    <div className='bg-gradient-to-b from-[#D7E9FF] to-white '>
        <CenterWrapper className={"space-y-4"}>
            <MainHeading className={"text-center font-semibold"}>Explore Our Categories</MainHeading>
            <SubHeading className={"text-center text-[#3d3d3d] "}>Tap to access expertise across supply chain. Get Quotation, Price and latest news instantly</SubHeading>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
{arr.map(({name, icon, categories, link},idx)=>(
    <ExploreCard name={name} icon={icon} categories={categories} link={link} key={idx} />
))}
</div>

        </CenterWrapper>
        {/* <Services/> */}


    </div>
  )
}

const ExploreCard= ({name, icon, categories, link})=> {
    return (
        <div className='p-6 space-y-4 bg-white rounded-xl border-[#4172AA] border flex flex-col justify-between '>
            <div className='w-2/3 mx-auto '>
                <Image alt={name} src={icon} width={400}  height={400}/>
            </div>
            <div className='space-y-1'>
            <SubHeading>{name} </SubHeading>
            <Paragraph className={"text-[#3d3d3d] flex items-center justify-between"}>{categories}</Paragraph>
            </div>
        </div>
    )
}



export default ExploreCategories