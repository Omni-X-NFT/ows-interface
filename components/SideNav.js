import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import vision from '../static/visionWhite.png'
import rocket from '../static/rocketWhite.png'
import people from '../static/peopleWhite.png'
import link from '../static/linkWhite.png'

const SideNav = () => {
  return(
    <div className='sidenav'>
      <ul>
        <li>
          <Link href={'/'}>
            <Image src={vision} className='cursor-pointer'>
            
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'/roadmap'}>
            <Image src={rocket} className='cursor-pointer'>
            
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'/team'}>
            <Image src={people} className='cursor-pointer'>
            
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'/links'}>
            <Image src={link} className='cursor-pointer'>
            
            </Image>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
