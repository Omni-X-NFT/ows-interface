import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainNav from '../components/MainNav'
import SideNav from '../components/SideNav'
import Image from 'next/image'
import omniLogo from '../static/omniverseLogoWhite.png'

export default function Home() {

  const router = useRouter()
  

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav/>
      <div className='tabletcorner'>
        <div className='tablet'>
          <SideNav/>
          <div className='main-grid'>
            <div className='grid-header'>
              welcome, anon, to the
            </div>
            <div className='flex'>
              <Image src={omniLogo} width={200} height={200}/>
              <span className='grid-verse'>MNIVERSE</span>
            </div>
            <div className='flex mt-5'>
              <div className='left-bold'>
                <i>what is it?</i>
              </div>  
              <div className='right-text self-end'>
                The Omniverse is an ecosystem of media, tools, and protocols unified by their development and interoperability via Layer Zero technology and a emphasis on a superior UI/UX experience.
                <p>This ecosystem of products is run by the Omniverse DAO.</p>
              </div>
            </div>
            <div className='flex mt-5'>
              <div className='left-bold'>
                <i>what are we building?</i>
              </div>  
              <div className='right-text self-end'>
                Our flagship product and proof of concept for all our developed technologies and planned products is a compete to earn (C2E) game - Omni Wars.

                <p>Creating a revolutionary game on groundbreaking interoperable blockchain technology will lead to us to developing a host of follow on products. There are no tools for this era of DAO run communities operating on multiple blockchains.</p>

                <p>With Omni X, we seek to change this. The first gaming DAO tool we are building is a multi-chain NFT marketplace framework. The Omni Wars game marketplace will be built on this framework, but we seek to open up this development to any other blockchain game looking to quickly bootstrap their own unique game specific NFT marketplace.</p>
              </div>
            </div>
            <div className='flex mt-5'>
              <div className='left-bold'>
                <i>tell me more!</i>
              </div>  
              <div className='right-text self-end'>
                There are so many plans ahead - read on in our Roadmap in this section to get a sense of our timeline. Select the Omni Wars and Omni X tabs to learn more about these enterprises.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
