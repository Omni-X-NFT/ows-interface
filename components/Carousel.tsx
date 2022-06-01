import React from 'react'
import Image from 'next/image'
import SlideBg from '../static/slide-bg.png'
import SlideLogo2 from '../static/omniverse logo slide-2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper'

//Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

import sliderstyles from '../styles/Slider.module.css'

const Carousel : React.FC = () => {
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
                <span className={sliderstyles.slidetag2}>Omni Wars</span>
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
                <div className={sliderstyles.slideTxt}>
                  <h3>Compete-to-Earn &#40;C2E&#41; Multi-Blockchain Game</h3>
                  <p>a competitive strategy game with blockchain based factions in a rich universe of lore, art, and community</p>
                </div>
                <div className={sliderstyles.slideLogo}>
                <Image src={SlideLogo2} alt="slide logo"></Image>
                </div>
                <span className={sliderstyles.slidetag2}>Omni Wars</span>
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
                <div className={sliderstyles.slideTxt}>
                  <h3>Compete-to-Earn &#40;C2E&#41; Multi-Blockchain Game</h3>
                  <p>a competitive strategy game with blockchain based factions in a rich universe of lore, art, and community</p>
                </div>
                <div className={sliderstyles.slideLogo}>
                <Image src={SlideLogo2} alt="slide logo"></Image>
                </div>
                <span className={sliderstyles.slidetag2}>Omni Wars</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Carousel