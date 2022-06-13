import React from 'react'
import Image from 'next/image'
import SlideBg from '../static/slide-bg.png'
import SlideLogo2 from '../static/omniverse logo slide-2.png'
import BuySlideLogo from '../static/buy-slide-log.png'
import BuySlideLogo2 from '../static/buy slide logo 2.png'
import SlideLogo3 from '../static/slide-logo-3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper'

//Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

import sliderstyles from '../styles/Slider.module.css'

const Warcarousel : React.FC = () => {
  return (
    <>
    <div className={sliderstyles.swiperRooterWrap}>
      <div className={sliderstyles.slideContainer}>
        <div className={sliderstyles.omniSlideWrap}>
          <div className={sliderstyles.slideBg}>
            <Image src={SlideBg} layout="responsive" alt="slide Bg"></Image>
          </div>
          <div className={sliderstyles.slideContent}>
            <div className={sliderstyles.slideTxt}>
              <h3>Compete-to-Earn &#40;C2E&#41; Multi-Blockchain Game</h3>
              <p>a competitive strategy game with blockchain based factions in a rich universe of lore, art, and community</p>
            </div>
            <div className={sliderstyles.slideLogo}>
            <Image src={SlideLogo2} alt="slide logo"></Image>
            </div>
            <span className={`${sliderstyles.slidetag2} ${sliderstyles.slidetagwar}`}>Omni Wars</span>
          </div>
        </div>
      </div>
      {/* <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation={true}
        slidesPerView={"auto"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: "auto",
            spaceBetween: 16,
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
                  <h3>Compete-to-Earn &#40;C2E&#41; Multi-Blockchain Game</h3>
                  <p>a competitive strategy game with blockchain based factions in a rich universe of lore, art, and community</p>
                </div>
                <div className={sliderstyles.slideLogo}>
                <Image src={SlideLogo2} alt="slide logo"></Image>
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
                  <p>omnichain native ORC-20 token</p>
                  <p>platform revenue redistribution in $OMNI &amp; ETH</p>
                  <p>reduced platform fees</p>
                  <ul>
                    <li>- for individuals transacting</li>
                    <li>- curve wars style gauge voting for largest holders</li>
                  </ul>
                  <p>governance</p>
                </div>
                <div className={sliderstyles.slidethreeR}>
                  <h4>$OMNI</h4>
                  <div className={sliderstyles.slidethreeLogo}>
                    <Image src={SlideLogo3} alt="slide logo"></Image>
                  </div>
                </div>
                <span className={sliderstyles.slidetag2}>Omni X</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
    </>
  )
}

export default Warcarousel