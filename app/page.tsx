import Details from '@/components/shared/Details'
import Hero from '@/components/shared/Hero'
import { downloadDetilas } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='wrapper'>
      <Hero title="Instagram Downloader" />
      <div>
        <div className='w-full flex flex-col items-center gap-4 mt-12'>

          <h2 className='gradient-green text-center'>Instagram Videos and Photos Download</h2>

          <p className='text-center text-lg'> InstaDL is an online web tool that helps you download Instagram Videos, Photos, Reels, and IGTV. InstaDL is designed to be easy to use on any device, such as a mobile phone, tablet, or computer.
          </p>
        </div>

        <Details data={downloadDetilas} />
      
      </div>
    </div>
  )
}

export default Home