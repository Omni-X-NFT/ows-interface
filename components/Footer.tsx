import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerstyles from '../styles/Footer.module.css'
import FooterLogo from '../static/footer_img/Footer_Logo.png'
import OmniverseLogo from '../static/footer_img/omniverse-logo.svg'
import Github from '../static/footer_img/Github.png'
import Book from '../static/footer_img/book-icon.png'
import Discord from '../static/footer_img/Discord.png'
import Twitter from '../static/footer_img/Twitter.png'

const Footer : React.FC = () => {
  return (
    <footer className={footerstyles.footerBg}>
        <div className={footerstyles.container}>
            <div className={footerstyles.footer}>
              <div className={footerstyles.footerLogo}>
                  <Image src={OmniverseLogo}  alt="footer logo"></Image>
              </div>
              <div className={footerstyles.footerLogoText}>
                <p>OMNIVERSE</p>
              </div>
            </div>
            <ul className={footerstyles.socialWrapper}>
                <li><Link href="https://github.com/Omniverse-DAO"><a target="_blank"><Image src={Github} alt="github"></Image></a></Link></li>
                <li><Link href="https://daniel-67.gitbook.io/omniverse-dao/"><a target="_blank"><Image src={Book} alt="book"></Image></a></Link></li>
                <li><Link href="https://discord.com/invite/omniversedao"><a target="_blank"><Image src={Discord} alt="discord"></Image></a></Link></li>
                <li><Link href="https://twitter.com/omniversedao"><a target="_blank"><Image src={Twitter} alt="twitter"></Image></a></Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer