"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { DownloadTable } from './DownloadTable'
import  ytdl, { Filter, videoFormat } from 'ytdl-core'
import Loader from './Loader'
import { details } from '@/types'



const Hero = ({title,type,format}:{title:string,type:string,format:Filter}) => {

    const [videoLink, setVideoLink] = useState<string>('');
    const [data,setdata] = useState<videoFormat[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [details, setDetails] = useState<details>({image:'' , title:''})
    
    
    const handleDownload = async () => {
        try {
          const res = await fetch(`/api/data?url=${videoLink}`);
          const data = await res.json();
          console.log(data);
          
          setDetails({image:data.videoDetails.thumbnails[4].url, title:data.videoDetails.title})
          
          const videoFormats = ytdl.filterFormats(data.formats,format)
          setIsLoading(false)
          setdata(videoFormats);
        } catch (err) {
            setIsLoading(false)
          console.log(err);
        }
      };

    
    return (
        <div className=' wrapper rounded-lg bottom-3 mt-2 md:mt-10 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center mb-8'>

                <h1 className='gradient-blue-purple text-center'>{title}</h1>
                <p className='text-md mt-3 text-center'>Download YouTube videos in MP3, MP4, 3GP,... and many more formats.</p>
            </div>
            <div className="flex w-full max-w-5xl items-center space-x-2 mt-5">
                <Input type="email" placeholder="Search or paste link here.."  onChange={(e) => setVideoLink(e.target.value)} />
                <Button 
                    type="submit"
                     className="bg-gradient-to-r from-blue-500 to-purple-500"
                    onClick={()=>{ handleDownload(); setIsLoading(true); }}
                >Convert</Button>
                
            </div>
            <div className='wrapper flex justify-center items-center'>
            {isLoading===true && (
                   <Loader />
                ) }
            </div>
            <div className='wrapper'>
                {data && <DownloadTable data={data} type={type} details={details}/>}
             </div>
        </div>
    )
}

export default Hero