"use client"
import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MobileNavButton } from './MobileNav'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className='wrapper flex justify-between'>
        <div className='flex items-center gap-2 '>
            <Image 
                src="/logo.svg"
                width={38}
                height={38}
                alt='logo'
            />
            <p className='text-xl'>InstaDL</p>
        </div>
        <div className='hidden md:flex-center gap-6 items-center'>
            {NavLinks.map((items)=>{
                const isActive = pathname === items.route;

                return(
                    <Link href={items.route} key={items.label}>
                        <p className={`${isActive && 'text-violet-500'} text-md`}>{items.label}</p>
                    </Link>
                )}             
          )}
        </div>
        <MobileNavButton />
    </div>
  )
}

export default Navbar