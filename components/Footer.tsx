import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerstyles from '../styles/Footer.module.css'
import OmniverseLogo from '../static/footer_img/omnix.svg'
import Github from '../static/footer_img/Github.png'
import Book from '../static/footer_img/book-icon.png'
import Discord from '../static/footer_img/Discord.png'
import Twitter from '../static/footer_img/Twitter.png'
import { useRouter } from 'next/router'

const Footer : React.FC = () => {
  const router = useRouter();
  return (
    <footer className={footerstyles.footerBg}>
        <div className={footerstyles.container}>
            <div className={footerstyles.footer}>
              <div className={footerstyles.footerLogo}>
                  <Image src={OmniverseLogo}  alt="footer logo"></Image>
              </div>
              <div className={footerstyles.footerLogoText}>
                <p>OMNI X</p>
              </div>

            </div>
            <div>
              <ul className={footerstyles.socialWrapper}>
                <li><Link href="/disclaimer"><a>Disclaimer</a></Link></li>
                <li><Link href="/term"><a>Terms & Conditions</a></Link></li>
              </ul>
            </div>
            <ul className={footerstyles.socialWrapper}>

              <li><Link href="https://github.com/Omniverse-DAO"><a target="_blank" rel="noopener noreferrer"><Image src={Github} alt="github"></Image></a></Link></li>
              <li><Link href="https://omni-x.gitbook.io/omni-x-nft-marketplace/"><a target="_blank" rel="noopener noreferrer"><Image src={Book} alt="book"></Image></a></Link></li>
              <li><Link href="https://discord.com/invite/omni-x"><a target="_blank" rel="noopener noreferrer"><Image src={Discord} alt="discord"></Image></a></Link></li>
              <li><Link href="https://twitter.com/omnix_nft"><a target="_blank" rel="noopener noreferrer"><Image src={Twitter} alt="twitter"></Image></a></Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer