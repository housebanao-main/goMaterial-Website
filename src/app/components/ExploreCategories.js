import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading, Paragraph, SubHeading } from '@/components/MainHeading'
import Image from 'next/image'
import React from 'react'

const ExploreCategories = () => {
    const arr= [
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
            link: ""

        },
        {name: "Steels",
            icon: "https://leadrp.net/wp-content/uploads/2024/01/steel-parts.jpg",
            categories: "Tmt , Angles Plates, CRC and more",
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
        <div className='p-6 space-y-4 bg-white rounded-xl border-[#4172AA] border '>
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