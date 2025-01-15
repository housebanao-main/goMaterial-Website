import CenterWrapper from '@/components/CenterWrapper'
import { MainHeading, Paragraph } from '@/components/MainHeading'
import React from 'react'

const About = () => {
  return (
   <CenterWrapper className={"space-y-3"}>
<MainHeading className={"text-black font-bold"}>About Go Material</MainHeading>
<Paragraph>At Go Material, we've redefined the landscape of construction material procurement. Our platform is a one-stop destination, seamlessly connecting businesses with a curated selection of top-quality suppliers offering everything from steel and cement to specialized finishes and fixtures. With transparent pricing and personalized support, we streamline the procurement process, empowering businesses to make informed decisions and stay ahead of project timelines and budgets. Join us and experience the unmatched convenience, efficiency, and reliability that have made us the go-to choice for construction professionals worldwide.
</Paragraph>
   </CenterWrapper>
  )
}

export default About