import Details from '@/components/shared/Details'
import Hero from '@/components/shared/Hero'
import { videoPageDetails } from '@/constant'
import { Metadata } from 'next'
import React from 'react'



export const metadata:Metadata = {
  title:"Only Video Downloader"
}


const video = () => {
  return (
    <div className='wrapper'>
      <Hero title="Only Video Downloader" type='video' format={'videoonly'} />
      <div>
        <div className='w-full flex flex-col items-center gap-4 mt-12'>
          <h2 className='gradient-green text-center'>Seamlessly Extract Video Only</h2>
          <p className='text-center text-lg'>Our Youtube MP3 converter allows you to convert YouTube videos to MP3 with just a few clicks.
            You can download MP3 music with many different quality such as: 128kbps, 320kbps, 64kbps, 96kbps, 192kbps, 256 kbps. Now you can easily
            convert thousands of videos from YouTube and save them to your collection of favorite songs. It has never been easier to convert YouTube to MP3.
          </p>
        </div>
        <Details data={videoPageDetails}/>
      </div>

    </div>
  )
}

export default video