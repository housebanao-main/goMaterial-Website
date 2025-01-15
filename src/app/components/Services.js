

import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading, Paragraph, SubHeading } from "@/components/MainHeading";
import { IoMdCart } from "react-icons/io";


const Services = () => {
    const arr= [
        {
            icon: <IoMdCart/>,
            main: "Buy & Sell with us",
            description : "One stop solution for your raw material sourcing and selling needs"
        },
        {
            icon: <IoMdCart/>,
            main: "Buy & Sell with us",
            description : "One stop solution for your raw material sourcing and selling needs"
        },
        {
            icon: <IoMdCart/>,
            main: "Buy & Sell with us",
            description : "One stop solution for your raw material sourcing and selling needs"
        },
        {
            icon: <IoMdCart/>,
            main: "Buy & Sell with us",
            description : "One stop solution for your raw material sourcing and selling needs"
        },
        {
            icon: <IoMdCart/>,
            main: "Buy & Sell with us",
            description : "One stop solution for your raw material sourcing and selling needs"
        },

    ]
    return (
        <>
        <CenterWrapper className={"space-y-4 relative pb-0 " }>
            <MainHeading className={"text-center font-semibold"}>Our Services</MainHeading>
            <SubHeading className={"text-center text-[#3d3d3d] "}>Tap to access expertise across supply chain. Get Quotation, Price and latest news instantly</SubHeading>
         
            </CenterWrapper>
        
           <div className=' bg-gradient-to-t from-primary from-50% to-white to-50%  mt-4 ' >
            <CenterWrapper className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-0 pb-0"}>
            {arr.map(({icon, main, description},idx)=>(
                <ServiceCard icon={icon} main={main} description={description} key={idx}/>
            ))}
</CenterWrapper>
           </div>
           </>
    )
}

const ServiceCard= ({icon, main, description})=> {
    return (
        <div className='p-4 py-8 space-y-6 border-primary border rounded-xl bg-white '>
            <div className='w-20 h-20 min-w-20 min-h-20 bg-primary rounded-full flex items-center justify-center text-2xl text-white mx-auto '>
                {icon}
            </div>
            <div className='space-y-2'>
            <SubHeading className={"text-center font-semibold"}>{main}</SubHeading>
            <Paragraph className={"text-center text-[#3d3d3d]"}>{description}</Paragraph>
            </div>
        </div>
    )
}

export default Services