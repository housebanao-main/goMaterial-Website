import Navbar from '@/app/components/Navbar'
import CenterWrapper from '@/components/CenterWrapper'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import ShopProducts from './components/ShopProducts'


import { API_URL } from "@/utils/constants";

async function getData() {
  try {
    const response = await fetch(`${API_URL}/b2c/products?page=1&limit=9`, {
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}


export default async function Products() {

  const data= await getData();

  return (
    <Wrapper>
        <Navbar/>
<CenterWrapper>

<ShopProducts products= {data.products} limit = {data.limit} page= {data.page} TotalProducts={data.TotalProducts}/>
</CenterWrapper>
    </Wrapper>
  )
}
