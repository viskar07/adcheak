import { downloadDetilas } from '@/constant'
import { PageDetails } from '@/types'
import Image from 'next/image'
import React from 'react'

const Details = ({data}:{data:PageDetails[]}) => {
  return (
    <div className='w-full flex flex-wrap gap-5 lg:gap-40 mt-20 justify-center'>
    {data.map((items)=>(
      <div className='w-80 h-60  flex flex-col items-center gap-2'  key={items.label}>
        <Image src={items.icon} width={40} height={40} alt={items.label} />
        <h1 className='gradient-blue mt-4 text-center'>{items.label}</h1>
        <p className='text-center '>{items.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Details