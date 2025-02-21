import React from 'react'
import ViewProducts from './ViewProducts'
import Filters from './Filters'

export default function ShopProducts() {
  return (
    <div className='flex justify-between gap-4'>
        <div>

        <Filters/>
        </div>
        <div>

        <ViewProducts/>
        </div>
    </div>
  )
}
