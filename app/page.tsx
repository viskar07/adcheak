import Details from '@/components/shared/Details'
import Hero from '@/components/shared/Hero'
import { downloadDetilas } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='wrapper'>
      <Hero title="Youtube Downloader" type='video' format={'videoandaudio'} />
      <div>
        <div className='w-full flex flex-col items-center gap-4 mt-12'>

          <h2 className='gradient-green text-center'>The best YouTube Video Downloader</h2>

          <p className='text-center text-lg'>Y2matee YouTube Downloader helps you download any YouTube video in the best quality.
             Download YouTube videos in MP3, MP4, 3GP, M4A, and many more formats. Our downloader 
             is for free and does not require any software or registration.
          </p>
        </div>

        <Details data={downloadDetilas} />
      
      </div>
    </div>
  )
}

export default Home