import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import distyles from '../styles/disclaimer.module.css'

import FeatureContenImg from '../static/feature-overview-bg.png'


import React, { useState , useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const disclaimer: NextPage = () => {

  return (
    <>
      <Head>
        <title>Omni X | Disclaimer</title>
        <meta name="description" content="Omnix Disclaimer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <ToastContainer />
      <div className={distyles.mintHero}> 
        <Navbar/>
        <div className={distyles.featureContentWrap}>
          <div className={distyles.featureImg}>
            <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
          </div>
          <div className={distyles.ContentWrap} >
            <div className={distyles.contentBody}>
              <h3>Disclaimer</h3>
              <p>The information contained on this website is not intended for individuals or entities who are ordinarily resident in the United States of America or Switzerland nor for residents of a geographic area that is subject to UN-, US-, EU- or Swiss sanctions or embargoes, including: Afghanistan, Albania, Belarus, Bosnia & Herzegovina, Burundi, Central African Republic, Cote d’Ivoire, Cuba, Democratic Republic of the Congo, Ethiopia, Guinea, Guinea-Bissau, Iran, Iraq, Lebanon, Liberia, Libya, Myanmar (Burma), North Korea, Republic of Macedonia (FYROM), Serbia, Somalia, South Sudan, Sri Lanka, Sudan, Syria, Thailand, Trinidad & Tobago, Tunisia, Ugand Uganda, Ukraine, Venezuela, Yemen, and Zimbabwe. By entering or using the website, you accept you represent and warrant that you are not resident in those countries. The company reserves the right to restrict the sale of the NFT token in any jurisdiction or to any individuals or entities at its discretion.</p>

              <p>The Company provides the website and its connected services “as is” and “as available,” without warranty of any kind. Without limiting this, we expressly disclaim all warranties, whether expressed, implied or statutory, regarding the website. Using applications on the blockchain is associated with a high degree of technological and/or other risks. Holders and/or purchaser of the NFT-Tokens and associated artwork are subject to the Terms and Conditions available on the website.</p>

              <p>The NFT-Token are non-fungible tokens representing ownership of a digital artwork only. Accordingly, no information on this website (or any other documents mentioned therein) is or may be considered to be advice or an invitation to enter into an agreement for any investment purpose. Further, as NFT-Token represent artwork, nothing on this websites qualifies or is intended to be an offering of securities in any jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or other financial product.</p>

              <p>Due to the artistic nature of the project, neither this document nor the NFT-Token have not been registered with or approved by any regulator in any jurisdiction. It remains in your responsibility to assure that the purchase of the NFT-Token and the associated art is in compliance with laws and regulations in your jurisdiction.</p>

              <p>We undertake no obligation to publicly update or revise any information or opinions published on the website. We reserve the right to amend the information at any time without prior notice.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default disclaimer
