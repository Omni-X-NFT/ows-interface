import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// Components 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Xcarousel from '../components/XCarousel'


// Images 
import RoadmapBg from '../static/roadmap-bg.png'
import RoadmapBlueLine from '../static/roadmap-blue-line.png'
import RoadmapPinkLine from '../static/roadmap-pink-line.png'
import FeatureContenImg from '../static/feature-overview-bg.png'
import RedPlanetImg from '../static/redplanet.png'
//Partnership
import Sneaky from '../static/partnership/Sneaky 1.svg'
import LayerZero from '../static/partnership/LayerZero_Logo_Full 1.svg'
import PolygonStudios from '../static/partnership/pstud 1.svg'
import AvaLabs from '../static/partnership/ava labs white 1.svg'
import BNBChain from '../static/partnership/bnb-chain 1.svg'
import TBA from '../static/partnership/TBA.svg'
import Galaxy from '../static/partnership/galaxy1.svg'
import Findora from '../static/partnership/Findora.jpg'


// Animation Gif

// Scroll
import { Link, } from 'react-scroll'

// StyleSheet 
import styles from '../styles/Home.module.css'
//animation
import * as starsanimation from "../services/animations/stars.json"
import * as blueearthanimation from "../services/animations/blue_earth.json"
import * as planethanimation from "../services/animations/planet.json"
import * as iceBerganimation from '../services/animations/iceberg.json'

import Lottie from 'react-lottie'

// import { Container, LottieWrapper } from "../components/animation/staranimation.styled";
//react
import { useState,useRef,useEffect } from 'react'
import useScrollPosition from "../components/useScrollPosition"


const animationStarsOptions = {
  loop: true,
  autoplay: true,
  animationData: starsanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationBlueEarthsOptions = {
  loop: true,
  autoplay: true,
  animationData: blueearthanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationPlanetOptions = {
  loop: true,
  autoplay: true,
  animationData: planethanimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationIceBergOptions = {
  loop: true,
  autoplay: true,
  animationData: iceBerganimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const quickNavbars:Array<string> = ["omniverse","overview","omniwars","roadmap","partner"]

// const scrollPosition = useScrollPosition();

const Home: NextPage = () => {

  const [navbarid, setNavbarID] = useState<number>(0)

  const omniverseSection = useRef<HTMLDivElement | null>(null)
  const overviewSection = useRef<HTMLDivElement | null>(null)
  const omniwarsSection = useRef<HTMLDivElement | null>(null)
  const roadmapSection = useRef<HTMLDivElement | null>(null)
  const partnerSection = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    if(window.pageYOffset<Number(overviewSection.current?.offsetTop)){
      setNavbarID(0)
    } else if(window.pageYOffset+200<Number(omniwarsSection.current?.offsetTop)){
      setNavbarID(1)
    }else if(window.pageYOffset+200<Number(roadmapSection.current?.offsetTop)){
      setNavbarID(2)
    }else if(window.pageYOffset+200<Number(partnerSection.current?.offsetTop)){
      setNavbarID(3)
    }else {
      setNavbarID(4)
    }
  },[window.pageYOffset]);
  
  return (
    <>
      <Head>
        <title>Omni X</title>
        <meta name="description" content="Omnix" />
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
      </Head>
      <Script src="../static/js/textanim.js"></Script>
      <Script src="//analytics.aweber.com/js/awt_analytics.js?id=X3co" />
      <div className={styles.body}>
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
                    <h1>Omni X</h1>
                    <div className={styles.heroBtn}>
                    <Link
                          activeClass="active"
                          to="overview"
                          spy={true}
                          smooth={true}
                          duration={1500}
                      >
                          <button onClick={()=>setNavbarID(1)}>Explore</button>
                      </Link>
                    </div>
                </div>
              </section>
            </div>
          </div>
          <div className={styles.heroContainerhidebar}></div>

          <section id="overview" className={styles.overview} ref={overviewSection}>
            <div className={styles.featureContentWrap}>
              <div className={styles.featureImg}>
                <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
              </div>
              <div className={styles.ContentWrap}  >
              <div className={styles.contentBody}>
                  <h3 id="version_head">Vision</h3>
                  <p id="version_text1">We at Omni X seek to enable the first true metaverse - where virtual worlds, users, and protocols deployed on  any blockchain are able to freely communicate and exchange value in a frictionless manner.</p>
                  <p id="version_text2">We are driven to create products that unlock the full potential of artists and communities to interact and prosper. Our emphasis on intuitive user experience, empowered by LayerZero technology, innovative tooling and social interactivity combines for a powerful and novel experience unlike any created before.</p>
                </div>

                <div className={styles.contentBody}>
                  <h3 id="overview_head">Overview</h3>
                  <p id="overview_text1">Omni X is our flagship endeavor into this initiative. Omni X is the first omnichain NFT platform. Beyond a simple marketplace, Omni X connects communities, creators, and enthusiasts on a level never before seen. Launch omnichain NFTs and gain access to unparalleled liquidity that allows users to buy and sell NFTs from any blockchain to any other blockchain.</p>
                  <p id="overview_text2">As our project grows, we will continue to build and push the boundaries of what blockchain technology allows, always with the ultimate goal in mind of creating the best possible experience for every type of user.</p>
                </div>

                
              </div>
            </div>
            <div className={styles.redPlanet}>
              <Image src={RedPlanetImg} layout="responsive" alt="bg"></Image>
            </div>
            <div className={styles.blueEarth}>
              <Lottie
                options={animationBlueEarthsOptions}
                isClickToPauseDisabled
              />
            </div>
          </section>

          <div className={styles.animStar}>
            <Lottie
              options={animationStarsOptions}
              isClickToPauseDisabled
            />
          </div>


          {/* Home Page BackGround */}
          <div className={styles.HomePageBg}>
            {/* Feature Section */}
            {/* Slider Section */}
            <section ref={omniwarsSection}  className={styles.omniwars} id="omniwars">
              <div className={styles.sliderRootContainer} >
                <div id="omnix" className={styles.secHeadingCon}>
                  <div className={styles.secHeadingWrap}>
                    <h2>FEATURES</h2>
                  </div>
                </div>
                <Xcarousel/>
              </div>
            </section>
            <div className={styles.blueEarthTwo}>
              <Lottie
                options={animationBlueEarthsOptions}
                isClickToPauseDisabled
              />
            </div>
            {/* Roadmap Section */}
            <section ref={roadmapSection} className={styles.roadmap} id="roadmap">
              <div className={styles.roadmapSecHead} id="roadmap">
                <div className={styles.secHeadingCon}>
                  <h1 id="roadmaphead">RoadMap</h1>
                </div>
              </div>
              <div className={styles.animStarTwo}>
                <Lottie
                  options={animationStarsOptions}
                  isClickToPauseDisabled
                />
              </div>
              <div className={styles.redPlanetTwo}>
                <Image src={RedPlanetImg} layout="responsive" alt="bg"></Image>
              </div>
            </section>


            <div className={styles.roadmapCon}>
              {/* First Phase */}
              <div className={styles.roadmapWrap} id="roadmap1">
                <div className={styles.ContL}>
                  <h1 className={styles.purpletxt} id="roadmap1title">MAR 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg} id="roadmap1image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3 id="roadmap1head">Community Core team Growth</h3>
                      <p id="roadmap1text">Launched Socials and github launched to establish, foster and grow community.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContRPlanet}>
                  <div className={styles.roadlineImg}  id="roadmap1line">
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                  <div className={styles.planet}>
                    <Lottie
                      options={animationPlanetOptions}
                      isClickToPauseDisabled
                    />
                  </div>
                </div>
              </div>
              {/* Second Phase */}
              <div className={styles.roadmapWrap} id="roadmap2">
                <div className={styles.ContR}>
                  <div className={styles.roadlineBlue}>
                    <div className={styles.alignLine} id="roadmap2line">
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>

                <div className={styles.ContL}>
                  <h1 id="roadmap2title">APR 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg} id="roadmap2image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt} >
                      <h3 id="roadmap2head">Capital Raise</h3>
                      <p id="roadmap2text">Expanded team and added core contributors to collaborate on development.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Third Phase */}
              <div className={styles.roadmapWrap} id="roadmap3">
                <div className={styles.ContL}>
                  <h1  id="roadmap3title">MAY 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg}  id="roadmap3image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3  id="roadmap3head">GREG</h3>
                      <p  id="roadmap3text">Launch Website showcasing interchain nft asset transfer. Genesis omniverse greg omni-nft collection.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContR}>
                  <div className={styles.roadlineImg}  id="roadmap3line">
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              {/* Forth Phase */}
              <div className={styles.roadmapWrap}  id="roadmap4">
                <div className={styles.ContR}>
                  <div className={styles.roadlineBlue}>
                    <div className={styles.alignLine} id="roadmap4line">
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>
                <div className={styles.ContL}>
                  <h1 id="roadmap4title">JUNE 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg} id="roadmap4image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3 id="roadmap4head">Omni X BETA</h3>
                      <p id="roadmap4text">Beta NFT marketplace infrastructure release</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fifth Phase */}
              <div className={styles.roadmapWrap} id="roadmap5">
                <div className={styles.ContL}>
                  <h1 id="roadmap5title">Q3 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg} id="roadmap5image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3 id="roadmap5head">Community Growth</h3>
                      <p id="roadmap5text">NFT PFP Collections: faction specific GENESIS collections. Engagement Competitions: rewards for world building, fan art, and lore production.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.ContR}>
                  <div className={styles.roadlineImg} id="roadmap5line">
                    <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
                  </div>
                </div>
              </div>
              {/* Sixth Phase */}
              <div className={styles.roadmapWrap} id="roadmap6">
                <div className={styles.ContR}>
                  <div className={`${styles.roadlineBlue} ${styles.linehide}`}>
                    <div className={styles.alignLine}>
                      <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                    </div>
                  </div>
                </div>
                <div className={styles.ContL}>
                  <h1 id="roadmap6title">Q4 2022</h1>
                  <div className={styles.BgWrap}>
                    <div className={styles.BgImg} id="roadmap6image">
                      <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                    </div>
                    <div className={styles.roadmapTxt}>
                      <h3 id="roadmap6head">OMNI X</h3>
                      <p id="roadmap6text">NFT Platform Mainnet Release</p>
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
              <h1>Our Partners</h1>
            </div>
          </section>
          <div className={styles.partCompGrid}>
            <div className={styles.PartCompWrapf}>
              <Image src={Sneaky} alt="Sneaky" width={200}></Image>
            </div>
            <div className={styles.PartCompWrapf}>
              <Image src={LayerZero} alt="LayerZero" width={240}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={PolygonStudios} alt="PolygonStudios" width={350}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={AvaLabs} alt="AvaLabs" width={180}></Image>
            </div>
            <div className={styles.PartCompWraps}>
              <Image src={BNBChain} alt="BNBChain" width={280}></Image>
            </div>
            <div className={styles.PartCompWrapf}>
              <Image src={Findora} alt="Findora" width={140} height={140}></Image>
            </div>
            <div className={styles.PartCompWrapf}>
              <Image src={Galaxy} alt="Galaxy" width={280} height={100} ></Image>
            </div>
            <div className={styles.PartCompWrapt}>
              <Image src={TBA} alt="TBA" width={370}></Image>
            </div>
          </div>

        </div>
        
        <div className={styles.FooterAreaContain}>
          <div className={styles.hideBorder}/>
          <div>
            <Lottie
              options={animationStarsOptions}
              isClickToPauseDisabled
            />
          </div>
          {/* <Footer/> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
