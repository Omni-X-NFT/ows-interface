import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// Components 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Xcarousel from '../components/XCarousel'
import Warcarousel from '../components/Warcarousel'


// Images 
import SecHeadArrowL from '../static/pinkArrow.png'
import SecHeadArrowR from '../static/blue-Arrow.png'
import BitScaleLogo from '../static/bitscale-logo.png'
import ChainLinkLogo from '../static/chainlink-logo.png'
import ImmuteableLogo from '../static/immuteable-logo.png'
import LotusLogo from '../static/lotus_white.png'
import BitcoinLogo from '../static/Bitcoincom.png'
import QuantstampLogo from '../static/quantstamp-logo.png'
import RoadmapBg from '../static/roadmap-bg.png'
import RoadmapBlueLine from '../static/roadmap-blue-line.png'
import RoadmapPinkLine from '../static/roadmap-pink-line.png'
import FeatureContenImg from '../static/feature-overview-bg.png'
// Carousels
import { Carousel } from '3d-react-carousal';
import NFT from '../static/Omni_x/nft.png'
import Liquidity from '../static/Omni_x/liquidity.png'
import Omni from '../static/Omni_x/omni.png'

import { Link } from 'react-scroll'

// StyleSheet 
import styles from '../styles/Home.module.css'
//
import { useState, useEffect,useRef } from 'react'

// let slides:Array<React.ReactNode> = []
// slides.push(<Image src={NFT} alt="NFT Ecosystem" />)
// slides.push(<Image src={Liquidity} alt="limitless and liquidity" />)
// slides.push(<Image src={Omni} alt="omni" />)
let slides = [
  <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
const quickNavbars:Array<string> = ["omniverse","overview","omniwars","roadmap","partner"]


const Home: NextPage = () => {
  const [navbarid, setNavbarID] = useState<number>(0)
  // const [wheel, setWheel] = useState<number>()
  const omniverseSection = useRef<HTMLDivElement | null>(null);
  const overviewSection = useRef<HTMLDivElement | null>(null);
  const omniwarsSection = useRef<HTMLDivElement | null>(null);
  const roadmapSection = useRef<HTMLDivElement | null>(null);
  const partnerSection = useRef<HTMLDivElement | null>(null);

  // useEffect(()=>{
  //   console.log(omniwarsSection.current?.scrollTop)
  //   console.log(omniverseSection.current?.offsetTop,overviewSection.current?.offsetTop,omniwarsSection.current?.offsetTop,roadmapSection.current?.offsetTop,partnerSection.current?.offsetTop)
  //   // if(wheel){
  //   //   if(wheel<Number(overviewSection.current?.clientHeight)){
  //   //     setNavbarID(0)
  //   //   } else if(wheel<Number(omniwarsSection.current?.offsetHeight)){
  //   //     setNavbarID(1)
  //   //   }else if(wheel<Number(roadmapSection.current?.offsetHeight)){
  //   //     setNavbarID(2)
  //   //   }else if(wheel<Number(partnerSection.current?.offsetHeight)){
  //   //     setNavbarID(3)
  //   //   }else {
  //   //     setNavbarID(4)
  //   //   }
  //   // }
  // },[wheel])
  return (
    <>
      <Head>
        <title>Omini Verse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
      </Head>
      {/* <div onWheel={(e) => {e?setWheel(e.pageY):null}}> */}
      <div>
        {/* Hero Section */}
        <div className={styles.navigationsWrap}>
          <ul>
            {
              quickNavbars.map(function(quickNavbar, idx){
                if(navbarid==idx){
                  return <li key={idx}><a className={styles.active}></a></li>
                } else {
                  return <li key={idx} >
                    <a href={quickNavbar}>
                      <Link
                        activeClass="active"
                        to={quickNavbar}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={()=>setNavbarID(idx)}
                      />
                    </a>
                  </li>
                }
              })
            }
          </ul>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.blackGradientBottom2}>
            <Navbar/>
            <section id="omniverse" ref={omniverseSection}>
              <div className={styles.heroContentWrap} >
                  <h1>Omniverse</h1>
                  <div className={styles.heroBtn}>
                    <Link
                        activeClass="active"
                        to="overview"
                        spy={true}
                        smooth={true}
                        duration={1500}
                    >
                        <button>Explore</button>
                    </Link>
                  </div>
              </div>
            </section>


            <div className={styles.featureContentWrap}>
              <div className={styles.featureImg}>
                <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
              </div>
              <section id="overview"  ref={overviewSection}>
                <div className={styles.ContentWrap}  >
                  <div className={styles.contentBody}>
                    <h3>OVERVIEW</h3>
                    <p>The Omniverse is an ecosystem of media, tools, and protocols unified by their development 
                    and interoperability via Layer Zero technology.</p>
                    <p>Built by the Omniverse DAO with an emphasis on superior user experience.</p>
                  </div>
                  <div className={styles.contentBody}>
                    <h3>VISION</h3>
                    <p>Creating a revolutionary game on groundbreaking interoperable blockchain technology will lead to us to developing a host of follow on products. There are no tools for this era of DAO run communities operating on multiple blockchains.</p>
                    <p>
                    With Omni X, we seek to change this. The first gaming DAO tool we are building is a multi-chain NFT marketplace framework. The Omni Wars game marketplace will be built on this framework, but we seek to open up this development to any other blockchain game looking to quickly bootstrap their own unique game specific NFT marketplace.
                    Built by the Omniverse DAO with an emphasis on superior user experience.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Home Page BackGround */}
        <div className={styles.HomePageBg}>
          {/* Feature Section */}
          {/* Slider Section */}
          <section ref={omniwarsSection} id="omniwars">
            <div className={styles.sliderRootContainer} >
              <div className={styles.secHeadingCon}>
                <div className={styles.secHeadingWrap}>
                  <div className={styles.secHeadImgL}>
                    <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                  </div>
                  <h3>Omni X</h3>
                  <div className={styles.secHeadImgR}>
                    <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                  </div>
                </div>
              </div>
              {/* <Carousel slides={slides} autoplay={true} interval={2000}/> */}
              <Xcarousel/>
              <div className={styles.secHeadingCon}>
                <div className={styles.secHeadingWrap}>
                  <div className={styles.secHeadImgL}>
                    <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                  </div>
                  <h3>Omni Wars</h3>
                  <div className={styles.secHeadImgR}>
                    <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                  </div>
                </div>
              </div>
              <Warcarousel/>
            </div>
          </section>
          {/* Roadmap Section */}
          <section ref={roadmapSection} id="roadmap">
            <div className={styles.roadmapSecHead} >
              <div className={styles.secHeadingCon}>
                <div className={styles.secHeadingWrap}>
                  <div className={styles.secHeadImgL}>
                    <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
                  </div>
                  <h3>Omniverse</h3>
                  <div className={styles.secHeadImgR}>
                    <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
                  </div>
                </div>
                <h1>RoadMap</h1>
              </div>
            </div>
          </section>

          <div className={styles.roadmapCon}>
            {/* First Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContL}>
                <h1 className={styles.purpletxt}>MAR 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>COMMUNITY &amp; CORE TEAM GROWTH</h3>
                    <p>LAUNCHED SOCIALS AND GITHUB LAUNCHED TO ESTABLISH FOSTER AND GROW COMMUNITY.</p>
                  </div>
                </div>
              </div>
              <div className={styles.ContR}>
                <div className={styles.roadlineImg}>
                  <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            {/* Second Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContR}>
                <div className={styles.roadlineBlue}>
                  <div className={styles.alignLine}>
                    <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              <div className={styles.ContL}>
                <h1>APR 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>CAPITAL RAISE</h3>
                    <p>EXPANDED TEAM AND ADDED CORE CONTRIBUTORS TO COLLABORATE ON DEVELOPMENT.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContL}>
                <h1>MAY 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>GREG</h3>
                    <p>LAUNCH WEBSITE SHOWCASING INTERCHAIN NFT ASSET TRANSFER.
                    GENESIS OMNIVERSE GREG OMNI-NFT COLLECTION. </p>
                  </div>
                </div>
              </div>
              <div className={styles.ContR}>
                <div className={styles.roadlineImg}>
                  <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            {/* Forth Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContR}>
                <div className={styles.roadlineBlue}>
                  <div className={styles.alignLine}>
                    <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              <div className={styles.ContL}>
                <h1>JUNE 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>Omni X BETA</h3>
                    <p>BETA NFT MARKETPLACE INFRASTRUCTURE RELEASE.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Fifth Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContL}>
                <h1>Q3 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>COMMUNITY GROWTH</h3>
                    <p>ENGAGEMENT COMPETITIONS REWARDS FOR WORLD BUILDING, FAN ART, AND LORE PRODUCTION. </p>
                  </div>
                </div>
              </div>
              <div className={styles.ContR}>
                <div className={styles.roadlineImg}>
                  <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            {/* Sixth Phase */}
            <div className={styles.roadmapWrap}>
              <div className={styles.ContR}>
                <div className={`${styles.roadlineBlue} ${styles.linehide}`}>
                  <div className={styles.alignLine}>
                    <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              <div className={styles.ContL}>
                <h1>Q4 2022</h1>
                <div className={styles.BgWrap}>
                  <div className={styles.BgImg}>
                    <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                  </div>
                  <div className={styles.roadmapTxt}>
                    <h3>OMNI X</h3>
                    <p>NFT MARKETPLACE MAINNET RELEASE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Home Page BackGround End*/}
        </div>
         {/* Home Page BackGround End*/}
        {/* Partners Section */}
        <section>
          <div className={styles.secHeadingCon} ref={partnerSection} id="partner">
            <div className={styles.secHeadingWrap}>
              <div className={styles.secHeadImgL}>
                <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
              </div>
              <h3>Omniverse</h3>
              <div className={styles.secHeadImgR}>
                <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
              </div>
            </div>
            <h1>Our Partners</h1>
          </div>
        </section>

        <div className={styles.partCompGrid}>
          <div className={styles.PartCompWrap}>
            <Image src={BitScaleLogo} alt="bitscale" width={200}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={ChainLinkLogo} alt="bitscale" width={240}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={ImmuteableLogo} alt="bitscale" width={350}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={LotusLogo} alt="bitscale" width={180}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={BitcoinLogo} alt="bitscale" width={280}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={QuantstampLogo} alt="bitscale" width={370}></Image>
          </div>
        </div>
      </div>
      <div className={styles.FooterAreaContain}>
        <div className={styles.hideBorder}/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
