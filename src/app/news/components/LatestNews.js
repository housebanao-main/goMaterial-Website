import { MainHeading } from '@/components/MainHeading'
import React from 'react'
import NewsData from './NewsData'

export default function LatestNews() {
  return (
    <div>
        <MainHeading className={"font-bold"}>Latest Market News</MainHeading>
        <div className='mt-6'>
            <NewsData/>
        </div>
    </div>
  )
}
