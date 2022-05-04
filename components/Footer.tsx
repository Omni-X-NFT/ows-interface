import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import social1 from '../static/social/social-1.svg'
import social2 from '../static/social/social-2.svg'
import social3 from '../static/social/social-3.svg'
import social4 from '../static/social/social-4.svg'
import social5 from '../static/social/social-5.svg'

import logo from '../static/logo/omniverse-logo.svg'

const Footer:React.FC = () => {
  return(
    <div className='footer flex justify-between h-[80px] py-[5px] px-5 fixed bottom-0 w-full abel'>
      <Link href='/' passHref>
        <div className='logo flex items-center cursor-pointer gap-[20px]'>
          <Image src={logo} className='w-[70px]' />
          <p className='text-[30px] leading-[50px]'>Omniverse </p>
        </div>
      </Link>
      <ul className='gap-[30px] lg:flex items-center hidden'>
        <li>
          <Link href='/' passHref>
            <a>
              <Image src={social5} className='cursor-pointer'>
              </Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/' passHref>
            <a>
              <Image src={social1} className='cursor-pointer'>
              </Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/' passHref>
            <a>
              <Image src={social2} className='cursor-pointer'>
              </Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/' passHref>
            <a>
              <Image src={social3} className='cursor-pointer'>
              </Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/' passHref>
            <a>
              <Image src={social4} className='cursor-pointer'>
              </Image>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
