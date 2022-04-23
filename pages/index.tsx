import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Image from 'next/image'
import omniLogo from '../static/omniverseLogoWhite.png'

export default function Home() {

  const router = useRouter()

  return (
    <div className='w-full main'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      </Head>
      <MainNav/>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='m-0 text-[20px] leading-[23px]'>ENTER THE</p>
        <p className='m-0 text-[40px] md:text-[100px] leading-[120px]'>OMNIVERSE</p>
        <a href='#overview'>
          <button className='bg-white text-black w-[231px] h-[61px] mt-[23px]'>Explore</button>
        </a>
      </div>
      <div className='w-full items-center flex-col pt-[150px]' id='overview'>
        <div className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5'>
            <p className='m-0 text-[50px] leading-[80px] text-center lg:text-right'>OVERVIEW</p>
          </div>
          <div className='lg:w-3/5 w-full lg:px-6 px-4 lg:py-10 py-0'>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>The Omniverse is an ecosystem of media, tools, and protocols unified by their development and interoperability via Layer Zero technology.</p>
            <br/>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>Built by the Omniverse DAO with an emphasis on superior user experience.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5'>
            <p className='m-0 text-[50px] leading-[80px] text-center lg:text-right'>VISION</p>
          </div>
          <div className='lg:w-3/5 w-full lg:px-6 px-4 lg:py-10 py-0'>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>Creating a revolutionary game on groundbreaking interoperable blockchain technology will lead to us to developing a host of follow on products. There are no tools for this era of DAO run communities operating on multiple blockchains.</p>
            <br/>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>With Omni X, we seek to change this. The first gaming DAO tool we are building is a multi-chain NFT marketplace framework. The Omni Wars game marketplace will be built on this framework, but we seek to open up this development to any other blockchain game looking to quickly bootstrap their own unique game specific NFT marketplace.</p>
          </div>
        </div>
      </div>
      <div className='w-full items-center flex-col lg:pt-[150px] pt-[80px]'>
        <div className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto lg:pb-[180px] pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5 flex flex-col lg:items-end items-center'>
            <div className='w-[200px]'>
              <img src='../static/logo/omniverse-logo.svg' />
              <p className='m-0 mt-8 text-[30px] leading-[35px] text-center'>OmniX</p>
            </div>
          </div>
          <div className='lg:w-4/6 w-full lg:px-6 px-4 lg:py-16 py-0'>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>A protocol providing tools for creating omnichain NFT tokens and marketplaces.</p>
 
            <br/>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>Leveraging the power of sourcing both financial and social capital from multiple chains.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full lg:w-4/6 m-auto pb-20'>
          <div className='lg:w-2/6 w-full px-10 py-5 flex flex-col lg:items-end items-center'>
            <div className='w-[200px]'>
              <img src='../static/logo/omniwar-logo.svg' />
              <p className='m-0 mt-8 text-[30px] leading-[35px] text-center'>OmniWars</p>
            </div>
          </div>

          <div className='lg:w-4/6 w-full lg:px-6 px-4 lg:py-16 py-0'>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>An omnichain compete-to-earn (C2E) strategy game developed by Omniverse DAO and built on the LayerZero protocol. </p>
            <br/>
            <p className='text-[20px] m-0 leading-[23px] text-justify lg:text-left'>The C2E model puts maximum emphasis on the team work and strategic development rather than endless grind and randomized rewards.</p>
          </div>
        </div>
      </div>
      <div className='h-[380px] lg:block hidden'>
      </div>
      <div className='flex flex-col items-center'>
        <p className='lg:text-[50px] text-[25px] lg:leading-[120px] leading-[60px] m-0 mb-[30px] uppercase text-white color text-center'>OMNichain Powered by layerZERO</p>
        <div className='flex lg:flex-row flex-col gap-[40px] mb-[40px]'>
          <img src='../static/logo/ethereum-eth-logo-1.svg' />
          <img src='../static/logo/dbanner1_copy_1.svg' />
          <img src='../static/logo/dbanner1_copy_2_1.svg' />
          <img src='../static/logo/dbanner1_copy_4_1.svg' />
        </div>
        <div className='flex lg:flex-row flex-col gap-[40px]'>
          <img src='../static/logo/JtpX95Rt_400x400-1.svg' />
          <img src='../static/logo/dbanner1_copy_3_1.svg' />
          <img src='../static/logo/fantom-ftm-logo-1.svg' />
        </div>
      </div>
      <div className='h-[200px] lg:block hidden'>
      </div>
      <div className='xl:flex hidden flex-col items-center xl:pb-[220px] pb-[100px]'>
        <p className='lg:text-[50px] text-[25px] lg:leading-[120px] leading-[60px] m-0 text-white color text-center'>ROADMAP</p>
        <div className='lg:mt-[105px] mt-[20px] w-9/12 mx-auto'>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-white.svg' />
              <img src='../static/road_map/right-white.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] text-justify lg:text-right'>Capital Raise</p>
              <p className='text-[20px] m-0 leading-[30px] text-justify lg:text-right'>Expanded team and added core contributors to collaborate on development.</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[-120px]'>
              <p className='text-[30px] m-0 uppercase leading-[50px] text-justify lg:text-left'>Community & Core team Growth</p>
              <p className='text-[20px] m-0 leading-[30px] text-justify lg:text-left'>Launched Socials and github launched to establish, foster and grow community.</p>
              <p className='text-[30px] m-0 mr-[70px] leading-[50px] text-right'>Mar 2022</p>
            </div>
          </div>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-white.svg' />
              <img src='../static/road_map/right-white.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>APR 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-left'>GREG</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-left'>Launch Website showcasing interchain nft asset transfer. Genesis omniverse greg omni-nft colection. </p>
            </div>
          </div>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[20%]'>
              <p className='text-[30px] m-0 mr-[60px] leading-[50px] text-right'>Mar 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-right'>Omni X</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-right'>Alpha NFT marketplace infrastructure release</p>
            </div>
          </div>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>JUNE 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-left'>faction nfts</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-left'>NFT PFP Collections: faction specific GENESIS collections. Engagement Competitions: rewards for world building, fan art, and lore production.</p>
            </div>
          </div>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] left-[51%]' src='../static/road_map/line-right-grey.svg' />
              {/*<img className='absolute bottom-[2px] left-[78px]' src='../static/road_map/line-right.svg' />*/}
            </div>
            <div className='lg:w-[38%] w-4/5  absolute right-0 top-[20%]'>
              <p className='text-[30px] m-0 mr-[60px] leading-[50px] text-right'>Q3 2022</p>
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 bottom-0'>
              <p className='text-[30px] m-0 uppercase leading-[50px] lg:text-right'>Omni Wars</p>
              <p className='text-[20px] m-0 leading-[30px] lg:text-right'>Alpha gameplay launch</p>
            </div>
          </div>
          <div className='relative w-full h-[240px]'>
            <div className='lg:flex hidden justify-center left-[46%]'>
              <img src='../static/road_map/left-grey.svg' />
              <img src='../static/road_map/right-grey.svg' />
              <img className='absolute bottom-[5px] right-[51%]' src='../static/road_map/line-left-grey.svg' />
            </div>
            <div className='lg:w-[38%] w-4/5  absolute left-0 top-[20%]'>
              <p className='text-[30px] m-0 ml-[60px] uppercase leading-[50px] text-left'>Q4 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
