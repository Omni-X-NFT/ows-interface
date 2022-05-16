import Head from 'next/head'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="main w-full">
      <Head>
        <title>Omniverse DAO</title>
        <meta name="description" content="A homepage for Omniverse DAO" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <MainNav />
      <div
        data-aos="fade-up"
        className="flex h-screen w-full flex-col items-center justify-center"
      >
        <p className="m-0 text-[20px] leading-[23px]">ENTER THE</p>
        <p className="m-0 text-[40px] leading-[120px] md:text-[100px]">
          OMNIVERSE
        </p>
        <a href="#overview">
          <div className="button-borders explorer h-[61px] w-[231px]">
            <button className="primary-button explorer-button h-full w-full">
              Explore
            </button>
          </div>
        </a>
      </div>
      <div className="w-full flex-col items-center pt-[150px]" id="overview">
        <div
          data-aos="fade-right"
          className="m-auto flex w-full flex-col pb-20 lg:w-4/6 lg:flex-row"
        >
          <div className="raleway w-full px-4 py-0 lg:px-6 lg:py-10">
            <p className="m-0 text-center text-[36px] font-medium leading-[42px] lg:text-center">
              The Omniverse is an ecosystem of truly interoperable media and
              protocols developed with&nbsp;
              <Link href="https://layerzero.network/">
                <a target="_blank" className="underline">Layer Zero</a>
              </Link>
              &nbsp;technology
            </p>
          </div>
        </div>
        <div  data-aos="fade-right" className="relative m-auto mb-20  h-[50px] w-[200px] sm:w-[500px]">
          <Image
            src="/static/separator.png"
            alt=""
            style={{ margin: 'auto', width: '100%' }}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div
          data-aos="fade-left"
          className="m-auto flex w-full flex-col pb-20 lg:w-4/6 lg:flex-row"
        >
          <div className="raleway w-full px-4 py-0 lg:px-6 lg:py-10">
            <p className="m-0  text-center text-[24px] font-medium leading-[28px] lg:text-center">
              We seek to develop products that push the bleeding edge of NFT
              technology on a multitude of blockchains where every product has a
              superior emphasis on user experience
            </p>
            <br />
            <br />
            <br />
            <p className="m-0  text-center text-[24px] font-medium leading-[28px] lg:text-center">
              From a groundbreaking natively interoperable NFT marketplace to a
              multi-blockchain domination style strategy game - we are building
              genuinely usefuland exciting products for everyone
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-col items-center pt-[80px] lg:pt-[150px]">
        <div
          data-aos="fade-right"
          className="m-auto flex w-full flex-col pb-20 lg:w-4/6 lg:flex-row lg:pb-[60px]"
        >
          <div className="flex w-full flex-col items-center px-10 py-5 lg:w-2/6 lg:items-end">
            <div className="w-[200px]">
              <img src="../static/logo/omniverse-logo.svg" />
              <p className="m-0 mt-8 text-center text-[30px] font-normal leading-[38px]">
                Omni-X
              </p>
            </div>
          </div>
          <div className="raleway w-full px-4 py-0 font-medium lg:w-4/6 lg:px-6 lg:py-16">
            <p className="m-0  text-justify text-[24px] leading-[25px] lg:text-left">
              An omnichain NFT marketplace, empowering creators and collectors
              to explore new frontier of omnichain liquidity and asset transfer
            </p>

            <br />
            <p className="m-0 text-justify text-[24px] leading-[25px] lg:text-left">
              Learn more about our innovative features &nbsp;
              <Link href="https://daniel-67.gitbook.io/omniverse-dao/omni-x/home/">
                <a target="_blank" className="underline">here</a>
              </Link>
               
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="m-auto flex w-full flex-col pb-20 lg:w-4/6 lg:flex-row"
        >
          <div className="flex w-full flex-col items-center px-10 py-5 lg:w-2/6 lg:items-end">
            <div className="w-[200px]">
              <img src="../static/logo/omniwar-logo.svg" />
              <p className="m-0 mt-8 text-center text-[30px] font-normal leading-[38px]">
                OmniWars
              </p>
            </div>
          </div>

          <div className="raleway w-full px-4 py-0 font-medium lg:w-4/6 lg:px-6 lg:py-16">
            <p className="m-0 text-justify text-[24px] leading-[25px] lg:text-left">
              A compete-to-earn (C2E) strategy game where blockchain factions
              battle in a multi-chain universe{' '}
            </p>
            <br />
            <p className="m-0 text-justify text-[24px] leading-[25px] lg:text-left">
              Our C2E model puts maximum emphasis on the team work and strategic
              development rather than endless grind and randomized rewards.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[200px]"></div>
      <div className="hidden flex-col items-center pb-[100px] uppercase xl:flex xl:pb-[220px]">
        <p
          data-aos="fade-down"
          className="color m-0 text-center text-[25px] leading-[60px] text-white lg:text-[50px] lg:leading-[120px]"
        >
          ROADMAP
        </p>
        <div className="mx-auto mt-[20px] w-9/12 text-[#c4c4c4] lg:mt-[105px]">
          <div className="relative h-[240px] w-full" data-aos="fade-left">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-white.svg" />
              <img src="../static/road_map/right-white.svg" />
              <img
                className="absolute bottom-[5px] left-[51%]"
                src="../static/road_map/line-right.svg"
              />
            </div>
            <div className="absolute left-0  bottom-0 w-4/5 lg:w-[38%]">
              <p className="m-0 text-justify text-[30px] uppercase leading-[50px] lg:text-right">
                Capital Raise
              </p>
              <p className="m-0 text-justify text-[20px] leading-[30px] lg:text-right">
                Expanded team and added core contributors to collaborate on
                development.
              </p>
            </div>
            <div className="absolute right-0  top-[-120px] w-4/5 lg:w-[38%]">
              <p className="m-0 text-justify text-[30px] uppercase leading-[50px] lg:text-left">
                Community & Core team Growth
              </p>
              <p className="m-0 text-justify text-[20px] leading-[30px] lg:text-left">
                Launched Socials and github launched to establish, foster and
                grow community.
              </p>
              <p className="m-0 mr-[70px] text-right text-[30px] leading-[50px]">
                Mar 2022
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="relative h-[240px] w-full">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-white.svg" />
              <img src="../static/road_map/right-white.svg" />
              <img
                className="absolute bottom-[5px] right-[51%]"
                src="../static/road_map/line-left.svg"
              />
            </div>
            <div className="absolute left-0  top-[20%] w-4/5 lg:w-[38%]">
              <p className="m-0 ml-[60px] text-left text-[30px] uppercase leading-[50px]">
                APR 2022
              </p>
            </div>
            <div className="absolute right-0  bottom-0 w-4/5 lg:w-[38%]">
              <p className="m-0 text-[30px] uppercase leading-[50px] lg:text-left">
                GREG
              </p>
              <p className="m-0 text-[20px] leading-[30px] lg:text-left">
                Launch Website showcasing interchain nft asset transfer. Genesis
                omniverse greg omni-nft colection.{' '}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="relative h-[240px] w-full">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-grey.svg" />
              <img src="../static/road_map/right-grey.svg" />
              <img
                className="absolute bottom-[5px] left-[51%]"
                src="../static/road_map/line-right-grey.svg"
              />
            </div>
            <div className="absolute right-0  top-[20%] w-4/5 lg:w-[38%]">
              <p className="m-0 mr-[60px] text-right text-[30px] leading-[50px]">
                May 2022
              </p>
            </div>
            <div className="absolute left-0  bottom-0 w-4/5 lg:w-[38%]">
              <p className="m-0 text-[30px] uppercase leading-[50px] lg:text-right">
                Omni X
              </p>
              <p className="m-0 text-[20px] leading-[30px] lg:text-right">
                Alpha NFT marketplace infrastructure release
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="relative h-[240px] w-full">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-grey.svg" />
              <img src="../static/road_map/right-grey.svg" />
              <img
                className="absolute bottom-[5px] right-[51%]"
                src="../static/road_map/line-left-grey.svg"
              />
            </div>
            <div className="absolute left-0  top-[20%] w-4/5 lg:w-[38%]">
              <p className="m-0 ml-[60px] text-left text-[30px] uppercase leading-[50px]">
                JUNE 2022
              </p>
            </div>
            <div className="absolute right-0  bottom-0 w-4/5 lg:w-[38%]">
              <p className="m-0 text-[30px] uppercase leading-[50px] lg:text-left">
                faction nfts
              </p>
              <p className="m-0 text-[20px] leading-[30px] lg:text-left">
                NFT PFP Collections: faction specific GENESIS collections.
                Engagement Competitions: rewards for world building, fan art,
                and lore production.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="relative h-[240px] w-full">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-grey.svg" />
              <img src="../static/road_map/right-grey.svg" />
              <img
                className="absolute bottom-[5px] left-[51%]"
                src="../static/road_map/line-right-grey.svg"
              />
              {/*<img className='absolute bottom-[2px] left-[78px]' src='../static/road_map/line-right.svg' />*/}
            </div>
            <div className="absolute right-0  top-[20%] w-4/5 lg:w-[38%]">
              <p className="m-0 mr-[60px] text-right text-[30px] leading-[50px]">
                Q3 2022
              </p>
            </div>
            <div className="absolute left-0  bottom-0 w-4/5 lg:w-[38%]">
              <p className="m-0 text-[30px] uppercase leading-[50px] lg:text-right">
                Omni Wars
              </p>
              <p className="m-0 text-[20px] leading-[30px] lg:text-right">
                Alpha gameplay launch
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="relative h-[240px] w-full">
            <div className="left-[46%] hidden justify-center lg:flex">
              <img src="../static/road_map/left-grey.svg" />
              <img src="../static/road_map/right-grey.svg" />
              <img
                className="absolute bottom-[5px] right-[51%]"
                src="../static/road_map/line-left-grey.svg"
              />
            </div>
            <div className="absolute left-0  top-[20%] w-4/5 lg:w-[38%]">
              <p className="m-0 ml-[60px] text-left text-[30px] uppercase leading-[50px]">
                Q4 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-col items-center pb-[100px] uppercase md:flex xl:hidden xl:pb-[220px]">
        <p className="color m-0 text-center text-[40px] leading-[60px] text-white lg:text-[50px] lg:leading-[120px]">
          ROADMAP
        </p>
        <div className="mx-auto mt-[250px] w-9/12">
          <div className="relative mb-[200px] h-full w-full">
            <div className="relative mb-[20px] flex justify-center gap-[10px]">
              <div className="absolute left-0 top-[-250px] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  Community & Core team Growth
                </p>
                <p className="text-[20px] leading-[30px]">
                  Launched Socials and github launched to establish, foster and
                  grow community.
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">Mar 2022</p>
              </div>
              <div className="absolute left-0 bottom-[0] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  Capital Raise
                </p>
                <p className="text-[20px] leading-[30px]">
                  Expanded team and added core contributors to collaborate on
                  development.
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">APR 2022</p>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[20deg] justify-end border-y-[1px] border-white">
                <div className="h-[450px] w-[15%] bg-white"></div>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[-20deg] justify-start">
                <div className="h-[450px] w-[15%] bg-white"></div>
              </div>
            </div>
            <div className="relative mb-[20px] flex justify-center gap-[10px]">
              <div className="absolute left-0 bottom-[0] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  GREG
                </p>
                <p className="text-[20px] leading-[30px]">
                  Launch Website showcasing interchain nft asset transfer.{' '}
                  <br /> Genesis omniverse greg omni-nft colection.
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">MAY 2022</p>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[20deg] justify-end border-b-[1px] border-white">
                <div className="h-[450px] w-[15%] bg-[#8C8C8C]"></div>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[-20deg] justify-start">
                <div className="h-[450px] w-[15%] bg-[#C4C4C4]"></div>
              </div>
            </div>
            <div className="relative mb-[20px] flex justify-center gap-[10px]">
              <div className="absolute left-0 bottom-[0] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  Omni X
                </p>
                <p className="text-[20px] leading-[30px]">
                  Alpha NFT marketplace infrastructure release
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">
                  JUNE 2022
                </p>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[20deg] justify-end border-b-[1px] border-white">
                <div className="h-[450px] w-[15%] bg-[#8C8C8C]"></div>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[-20deg] justify-start">
                <div className="h-[450px] w-[15%] bg-[#C4C4C4]"></div>
              </div>
            </div>
            <div className="relative mb-[20px] flex justify-center gap-[10px]">
              <div className="absolute left-0 bottom-[0] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  faction nfts
                </p>
                <p className="text-[20px] leading-[30px]">
                  NFT PFP Collections: faction specific GENESIS collections.{' '}
                  <br />
                  Engagement Competitions: rewards for world building, fan art,
                  and lore production.
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">Q3 2022</p>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[20deg] justify-end border-b-[1px] border-white">
                <div className="h-[450px] w-[15%] bg-[#8C8C8C]"></div>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[-20deg] justify-start">
                <div className="h-[450px] w-[15%] bg-[#C4C4C4]"></div>
              </div>
            </div>
            <div className="relative mb-[20px] flex justify-center gap-[10px]">
              <div className="absolute left-0 bottom-[0] w-2/5">
                <p className="ml-[15px] text-[30px] uppercase leading-[50px]">
                  Omni Wars
                </p>
                <p className="text-[20px] leading-[30px]">
                  Alpha gameplay launch
                </p>
                <p className="ml-[15px] text-[30px] leading-[50px]">Q4 2022</p>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[20deg] justify-end border-b-[1px] border-white">
                <div className="h-[450px] w-[15%] bg-[#8C8C8C]"></div>
              </div>
              <div className="flex h-[450px] w-1/4 skew-y-[-20deg] justify-start">
                <div className="h-[450px] w-[15%] bg-[#C4C4C4]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-[100px] uppercase md:hidden xl:pb-[220px]">
        <p className="color m-0 text-center text-[40px] leading-[60px] text-white lg:text-[50px] lg:leading-[120px]">
          ROADMAP
        </p>
        <div className="mx-auto mt-[250px] w-9/12">
          <div className="relative mb-[200px] h-full w-full">
            <div className="relative mb-[20px] flex gap-[10px]">
              <div className="order-2 flex w-1/6 gap-[10px]">
                <div className="flex h-[450px] w-2/4 skew-y-[20deg] justify-end">
                  <div className="h-[450px] w-full bg-white"></div>
                </div>
                <div className="flex h-[450px] w-2/4 skew-y-[-20deg] justify-start">
                  <div className="h-[450px] w-full bg-white"></div>
                </div>
              </div>
              <div className="right-0 bottom-[0] order-1 w-4/6">
                <div className="absolute left-0 top-[-200px] w-4/6 ">
                  <p className="text-[30px] uppercase leading-[50px]">
                    Community & Core team Growth
                  </p>
                  <p className="text-[20px] leading-[30px]">
                    Launched Socials and github launched to establish, foster
                    and grow community.
                  </p>
                  <p className="text-[30px] leading-[50px]">Mar 2022</p>
                </div>
                <div className="absolute left-0 bottom-[0] w-4/6 ">
                  <p className="text-[30px] uppercase leading-[50px]">
                    Capital Raise
                  </p>
                  <p className="text-[20px] leading-[30px]">
                    Expanded team and added core contributors to collaborate on
                    development.
                  </p>
                  <p className="text-[30px] leading-[50px]">APR 2022</p>
                </div>
              </div>
            </div>
            <div className="relative mb-[20px] flex gap-[10px]">
              <div className="order-2 flex w-1/6 gap-[10px]">
                <div className="flex h-[450px] w-2/4 skew-y-[20deg] justify-end">
                  <div className="h-[450px] w-full bg-[#8C8C8C]"></div>
                </div>
                <div className="flex h-[450px] w-2/4 skew-y-[-20deg] justify-start">
                  <div className="h-[450px] w-full bg-[#C4C4C4]"></div>
                </div>
              </div>
              <div className="right-0 bottom-[0] order-1 w-4/6 md:absolute">
                <p className="text-[30px] uppercase leading-[50px]">GREG</p>
                <p className="text-[20px] leading-[30px]">
                  Launch Website showcasing interchain nft asset transfer.{' '}
                  <br /> Genesis omniverse greg omni-nft colection.
                </p>
                <p className="text-[30px] leading-[50px]">MAY 2022</p>
              </div>
            </div>
            <div className="relative mb-[20px] flex gap-[10px]">
              <div className="order-2 flex w-1/6 gap-[10px]">
                <div className="flex h-[450px] w-2/4 skew-y-[20deg] justify-end">
                  <div className="h-[450px] w-full bg-[#8C8C8C]"></div>
                </div>
                <div className="flex h-[450px] w-2/4 skew-y-[-20deg] justify-start">
                  <div className="h-[450px] w-full bg-[#C4C4C4]"></div>
                </div>
              </div>
              <div className="right-0 bottom-[0] order-1 w-4/6 md:absolute">
                <p className="text-[30px] uppercase leading-[50px]">Omni X</p>
                <p className="text-[20px] leading-[30px]">
                  Alpha NFT marketplace infrastructure release
                </p>
                <p className="text-[30px] leading-[50px]">JUNE 2022</p>
              </div>
            </div>
            <div className="relative mb-[20px] flex gap-[10px]">
              <div className="order-2 flex w-1/6 gap-[10px]">
                <div className="flex h-[450px] w-2/4 skew-y-[20deg] justify-end">
                  <div className="h-[450px] w-full bg-[#8C8C8C]"></div>
                </div>
                <div className="flex h-[450px] w-2/4 skew-y-[-20deg] justify-start">
                  <div className="h-[450px] w-full bg-[#C4C4C4]"></div>
                </div>
              </div>
              <div className="right-0 bottom-[0] order-1 w-4/6 md:absolute">
                <p className="text-[30px] uppercase leading-[50px]">
                  faction nfts
                </p>
                <p className="text-[20px] leading-[30px]">
                  NFT PFP Collections: faction specific GENESIS collections.{' '}
                  <br />
                  Engagement Competitions: rewards for world building, fan art,
                  and lore production.
                </p>
                <p className="text-[30px] leading-[50px]">Q3 2022</p>
              </div>
            </div>
            <div className="relative mb-[20px] flex gap-[10px]">
              <div className="order-2 flex w-1/6 gap-[10px]">
                <div className="flex h-[450px] w-2/4 skew-y-[20deg] justify-end">
                  <div className="h-[450px] w-full bg-[#8C8C8C]"></div>
                </div>
                <div className="flex h-[450px] w-2/4 skew-y-[-20deg] justify-start">
                  <div className="h-[450px] w-full bg-[#C4C4C4]"></div>
                </div>
              </div>
              <div className="right-0 bottom-[0] order-1 w-4/6 md:absolute">
                <p className="text-[30px] uppercase leading-[50px]">
                  Omni Wars
                </p>
                <p className="text-[20px] leading-[30px]">
                  Alpha gameplay launch
                </p>
                <p className="text-[30px] leading-[50px]">Q4 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
