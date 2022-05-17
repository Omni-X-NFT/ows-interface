import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import social1 from '../static/social/social-1.svg'
import social2 from '../static/social/social-2.svg'
import social3 from '../static/social/social-3.svg'
import social4 from '../static/social/social-4.svg'
import social5 from '../static/social/social-5.svg'

import logo from '../static/logo/omniverse-logo.svg'

const Footer = () => {
  return (
    <div className="footer abel fixed left-0 right-0 bottom-0 flex h-[80px]  justify-between py-[5px] px-5">
      <Link href="/" passHref>
        <div className="logo flex cursor-pointer items-center gap-[20px]">
          <Image src={logo} className="w-[70px]" />
          <p className="hidden text-[30px] leading-[50px] sm:block">
            Omniverse{' '}
          </p>
        </div>
      </Link>
      <ul className="flex items-center gap-[10px] sm:gap-[30px]">
        <li>
          <Link
            href="https://www.youtube.com/channel/UCZ-dkwDXPIyppqvZWrShkjA"
            passHref
          >
            <a target="_blank">
              <Image src={social5} className="cursor-pointer"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Omniverse-DAO" passHref>
            <a target="_blank">
              <Image src={social1} className="cursor-pointer"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://daniel-67.gitbook.io/omniverse-dao/" passHref>
            <a target="_blank">
              <Image src={social2} className="cursor-pointer"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://discord.com/invite/omniversedao" passHref>
            <a target="_blank">
              <Image src={social3} className="cursor-pointer"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/omniversedao" passHref>
            <a target="_blank">
              <Image src={social4} className="cursor-pointer"></Image>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
