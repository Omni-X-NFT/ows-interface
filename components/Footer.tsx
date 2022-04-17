import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import social1 from '../static/social/social-1.svg'
import social2 from '../static/social/social-2.svg'
import social3 from '../static/social/social-3.svg'
import social4 from '../static/social/social-4.svg'

import logo from '../static/logo/omniverse-logo.svg'

const Footer:React.FC = () => {
  return(
    <div className='footer flex justify-between h-[80px] py-[5px] px-5'>
      <Link href={'/'}>
        <div className='logo flex items-center cursor-pointer gap-[20px]'>
          <Image src={logo} className='w-[70px]' />
          <p className='text-[30px] leading-[50px]'>Omniverse </p>
        </div>
      </Link>
      <ul className='gap-[30px] lg:flex items-center hidden'>
        <li>
          <Link href={'https://github.com/Omni-Wars'}>
            <Image src={social1} className='cursor-pointer'>
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'https://daniel-67.gitbook.io/omniverse-dao/'}>
            <Image src={social2} className='cursor-pointer'>
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'https://t.co/9t470guLqc'}>
            <Image src={social3} className='cursor-pointer'>
            </Image>
          </Link>
        </li>
        <li>
          <Link href={'https://twitter.com/omniversedao'}>
            <Image src={social4} className='cursor-pointer'>
            </Image>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
