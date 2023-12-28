'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const Bottombar = () => {
  
  const pathname= usePathname();
  
  return (
    <section className='bottombar'>
      <div className='bottombar_container' >
        {sidebarLinks.map(link=> {
          const isActive= (pathname.includes(link.route) && link.route.length>1) || pathname==link.route;
          return(
            <Link href={link.route} key={link.label} className={`bottombar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={link.imgURL} height={24} width={24} alt={link.label}/>
            </Link>
          )
        })}

      </div>

    </section>
  )
}

export default Bottombar