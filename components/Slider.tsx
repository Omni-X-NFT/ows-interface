import React from "react";
import Image from "next/image";
import SlideBg from "../static/slide-bg.png";
import SlideLogo from "../static/omniverse logo slide.png";
import sliderstyles from "../styles/Slider.module.css";

const Slider: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Slider;
