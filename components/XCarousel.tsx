import React from 'react'
import Image from 'next/image'
import SlideBg from '../static/slide-bg.png'
import BuySlideLogo from '../static/buy-slide-log.png'
import BuySlideLogo2 from '../static/buy slide logo 2.png'
import SlideLogo3 from '../static/slide-logo-3.png'
import SlideLogo from '../static/omniverse logo slide.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow, FreeMode } from 'swiper'

//Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

import sliderstyles from '../styles/Slider.module.css'

const Xcarousel : React.FC = () => {
  return (
    <>
    <div className={sliderstyles.swiperRooterWrap}>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation={true}
        slidesPerView={"auto"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop= {true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode:true,
            coverflowEffect:{
              depth: 0,
            }
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide>
        <div className={sliderstyles.slideContainer}>
          <div className={sliderstyles.omniSlideWrap}>
            <div className={sliderstyles.slideBg}>
                <Image src={SlideBg} layout="responsive" alt="slide Bg"></Image>
            </div>
            <div className={sliderstyles.slideContent}>
              <div className={sliderstyles.slideTxt}>
                <h3>NFT Ecosystem Hub</h3>
                <ul>
                    <li>Marketplace</li>
                    <li>Social Interactivity </li>
                    <li>Deep Analytics</li>
                    <li>Curated NFT Launches</li>
                    <li>Launches Gaming Integration</li>
                    <li>and so much more</li>
                </ul>
              </div>
              <div className={sliderstyles.slideLogo}>
              <Image src={SlideLogo} alt="slide logo"></Image>
              </div>
              <span className={sliderstyles.slidetag}>Omni X</span>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={sliderstyles.slideContainer}>
            <div className={sliderstyles.omniSlideWrap}>
              <div className={sliderstyles.slideBg}>
                <Image src={SlideBg} layout="responsive" alt="slide Bg"></Image>
              </div>
              <div className={sliderstyles.slideContent}>
                <div className={sliderstyles.slidetwoL}>
                  <div className={sliderstyles.slidetwowrap}>
                    <Image src={BuySlideLogo} layout='responsive' alt='buy'></Image>
                  </div>
                  <p>buy NFTs on any chain - from any chain</p>
                </div>
                <div className={sliderstyles.slidetwoR}>
                  <h4>limitless &amp; frictionless liquidity</h4>
                  <div className={sliderstyles.buyLogo2}>
                    <Image src={BuySlideLogo2} layout="responsive" alt="slide logo"></Image>
                  </div>
                  <p>recieve sales payment with your token of choice</p>
                </div>
                <span className={sliderstyles.slidetag2}>Omni X</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={sliderstyles.slideContainer}>
            <div className={sliderstyles.omniSlideWrap}>
              <div className={sliderstyles.slideBg}>
                <Image src={SlideBg} layout="responsive" alt="slide Bg"></Image>
              </div>
              <div className={sliderstyles.slideContent}>
                <div className={sliderstyles.slidethreeL}>
                  <p>omnichain native fungible (OFT-20) token</p>
                  <p>platform revenue redistribution in $OMNI &amp; USDC</p>
                  <p>reduced platform fees</p>
                  <ul>
                    <li>- for individuals transacting</li>
                    <li>- curve wars style rewards for largest holders</li>
                  </ul>
                </div>
                <div className={sliderstyles.slidethreeR}>
                  <h4>$OMNI</h4>
                  <div className={sliderstyles.slidethreeLogo}>
                    <Image src={SlideLogo3} alt="slide logo"></Image>
                  </div>
                </div>
                <span className={`${sliderstyles.slidetag2} ${sliderstyles.slidetag3}`}>Omni X</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Xcarousel