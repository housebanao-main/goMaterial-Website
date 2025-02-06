
import CenterWrapper from '@/components/CenterWrapper'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import BannerForm from './BannerForm';
import { LargeHeading } from '@/components/MainHeading';
// import BG from '@/assets/B2CBanner.svg'

export default function Banner() {
  return (
    <div style={{ backgroundImage: `url(${"/B2CBanner.svg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    className='min-h-[70svh] relative'
    >
      <CenterWrapper className={"flex items-center justify-between min-h-[70svh] !pt-0 !pb-0 !pr-0"}>
<div className='space-y-4'>
    <div className='font-bold mb-6'>

<LargeHeading>Find the right  products, </LargeHeading>
<LargeHeading>right away</LargeHeading>
    </div>
    <div className=" max-w-lg mx-auto">
      {/* Search Bar */}
      <div className="flex items-center  rounded-lg overflow-hidden shadow-sm pl-4  bg-white">
        <input
          type="text"
          placeholder="Search for raw material, home fittings and more..."
          className="flex-grow outline-none text-gray-600 text-sm py-2"
        />
        <button className="text-white bg-blue-500 py-2 px-6 rounded-lg">
          <FaSearch size={16} />
        </button>
      </div>

      {/* Popular Tags */}
      <div className="mt-4 text-nowrap flex items-center gap-4 ">
        <p className="text-sm  mb-2">Popular :</p>
        <div className="flex  gap-2">
          {['Raw material', 'TMT', 'Bathroom fittings', 'PVC pipes'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm border border-gray-300 rounded-full t bg-gray-100 cursor-pointer hover:bg-gray-200 text-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
</div>
<BannerForm/>
      </CenterWrapper>
    </div>
  )
}
