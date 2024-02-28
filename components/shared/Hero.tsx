"use client"
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { DownloadTable } from './DownloadTable'
import Loader from './Loader'
import {  AlertDemo } from './Alert'



const Hero = ({title}:{title:string,}) => {

    const [videoLink, setVideoLink] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null); 
    const [link,setLink] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<boolean>(false)
    const [thumbnail, setThumbnail] = useState<string>('')
    
    
    const handleDownload = async () => {
        try {
          const res = await fetch(`/api/data?url=${videoLink}`);
          const data = await res.json();
          setThumbnail(data[0].thumb)
          setIsLoading(false)
          setLink(data[0].url);
        } catch (err) {
            setIsLoading(false)
            console.log(err);
            
        }
      };
    
    const validator = () =>{
        const regex = /instagram\.com/;
        if(regex.test(videoLink)){
            setAlert(false)
            handleDownload()
        }
        else{
            setAlert(true)
            setIsLoading(false)
            
        }
      };

    const handleInputClick = () => {
        inputRef.current?.select();
      };
    
    
    return (
        <div className=' wrapper rounded-lg bottom-3 mt-2 md:mt-10 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center mb-8'>
                <h1 className='gradient-blue-purple text-center'>{title}</h1>
                <p className='text-md mt-3 text-center'>Download Instagram Videos, Photos, Reels, IGTV & carousel</p>
            </div>

            <div className="flex w-full max-w-5xl items-center space-x-2 mt-5">
                <Input type="email" placeholder="Search or paste link here.."  onChange={(e) => setVideoLink(e.target.value)}  ref={inputRef} onClick={handleInputClick} />
                <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500" onClick={()=>{ setIsLoading(true); validator();  }}>Convert</Button>
            </div>
            
            <div className='wrapper flex justify-center items-center'>
                {isLoading===true && ( <Loader />) }
                {alert===true && ( <AlertDemo /> ) }
            </div>

            <div className='wrapper'>
                {link && <DownloadTable url={link} thumbnail={thumbnail}/>}
            </div>

        </div>
    )
}

export default Hero