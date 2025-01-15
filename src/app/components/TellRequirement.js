import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading } from '@/components/MainHeading'
import React from 'react'

const TellRequirement = () => {
    const buyData= [
        {
            label: "Enter Product",
            input: "text"
        },
        {
            label: "Quantity",
            input: "text"
        },
        {
            label: "Company",
            input: "text"
        },
        {
            label: "Pincode",
            input: "text"
        },
        {
            label: "Email",
            input: "text"
        },
        {
            label: "Mobile Number",
            input: "text"
        },


    ]
  return (
    <div className='bg-primary'>
        <CenterWrapper className={"space-y-4"}>
            <MainHeading className={"text-white font-bold"}>Tell us your requirement</MainHeading>
            <div className='bg-white py-4 px-4 rounded-xl space-y-4'>
            <div className='py-4 flex gap-4'>
                {["Buy", "Sell"].map((item,idx)=>(
                    <div className='flex items-center gap-1'>
                        <input type="radio" name="buy-sell" id={item} />
                        <label htmlFor={item}>{item}</label>
                        </div>
                ))}
            </div>
<div className='flex gap-4 items-center justify-between'>  
    {buyData.map(({label, input},idx)=>(
        <InputCard label={label} key={idx}/>
    ))}
</div>
<div className='flex items-center justify-center'>
    <button className='px-3 py-2 rounded-lg bg-primary text-white'>SUBMIT</button>
</div>
            </div>
        </CenterWrapper>

    </div>
  )
}

const InputCard= ({label})=> {
    return(
        <div className='flex flex-col gap-4'>
            <label htmlFor={label}>{label}</label>
            <input placeholder={`Select ${label}`} type="text" id={label}  className='p-2 outline-none border-gray-400 border rounded-lg'/>

        </div>
    )
}

export default TellRequirement