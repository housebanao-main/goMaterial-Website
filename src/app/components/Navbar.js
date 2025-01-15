import CenterWrapper from '@/components/CenterWrapper'
import React from 'react'
import { BiCategory } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const arr= [
       
        {name: "TMT"

        },
        {name: "Mid Steel"

        },
        {name: "Non Ferrous"

        },
        {name: "Polymers"

        },
        {name: "Paints"

        },
        {name: "Cements"

        },
        {name: "Chemicals"

        },

    ]
  return (
   <CenterWrapper className={"flex gap-8 items-center pt-4 pb-4"}>
    <div className='flex gap-1 items-center '><BiCategory /> All categories <RiArrowDropDownLine size={"20px"}/></div>

{arr.map(({name},idx)=>(
    <div key={idx} className='hover:underline cursor-pointer'>{name}</div>

))}
   </CenterWrapper>
  )
}

export default Navbar