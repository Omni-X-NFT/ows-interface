import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerstyles from '../styles/Footer.module.css'
import OmniXLogo from '../static/logo/logowhite.png'
import Github from '../static/footer_img/Github.png'
import Book from '../static/footer_img/book-icon.png'
import Discord from '../static/footer_img/Discord.png'
import Twitter from '../static/footer_img/Twitter.png'
import { useRouter } from 'next/router'
import LinkedIn from '../static/footer_img/linkedinlogo.png'

const Footer : React.FC = () => {
  const router = useRouter();
  return (
    <footer className={footerstyles.footerBg}>
        <div className={footerstyles.container}>
            <div className={footerstyles.footer}>
              <div className={footerstyles.footerLogo}>
                  <Image src={OmniXLogo} layout={'responsive'} alt="footer logo"></Image>
              </div>
              <div className={footerstyles.footerLogoText}>
                <p>OMNI X</p>
              </div>

            </div>
            <div>
              <ul className={footerstyles.socialWrapper}>
                <li><Link href="/disclaimer">Disclaimer</Link></li>
                <li><Link href="/term">Terms & Conditions</Link></li>
              </ul>
            </div>
            <ul className={footerstyles.socialWrapper}>

              <li><Link legacyBehavior={true} href="https://github.com/Omni-X-NFT"><a target="_blank" rel="noopener noreferrer"><Image layout={'responsive'} src={Github} alt="github"></Image></a></Link></li>
              <li><Link legacyBehavior={true} href="https://omni-x.gitbook.io/omni-x-nft-marketplace/"><a target="_blank" rel="noopener noreferrer"><Image src={Book} alt="book"></Image></a></Link></li>
              <li><Link legacyBehavior={true} href="https://discord.com/invite/omni-x"><a target="_blank" rel="noopener noreferrer"><Image src={Discord} alt="discord"></Image></a></Link></li>
              <li className={footerstyles.footerLinkedinLogo}><Link legacyBehavior={true} href="https://www.linkedin.com/company/omni-x-labs/"><a target="_blank" rel="noopener noreferrer"><Image src={LinkedIn} layout={'responsive'} alt="linkedin"></Image></a></Link></li>
              <li className={footerstyles.footerTwitterLogo}><Link legacyBehavior={true} href="https://twitter.com/OmniX_NFT"><a target="_blank" rel="noopener noreferrer"><Image src={Twitter} layout={'responsive'} alt="twitter"></Image></a></Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
