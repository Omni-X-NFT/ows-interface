import React from 'react'
import Image from 'next/image'
import NFTBg from '../static/NFTBg.png'
import NFTLogo from '../static/nftLogo.png'
import TransLogo from '../static/translogo.png'
import nftstyles from '../styles/NFT.module.css'

const NFT : React.FC = () => {
     const [value, setValue] = React.useState("a");
  return (
    <>
    <div className={nftstyles.nftcontainer}>
        <div className={nftstyles.nftmainWrap}>
          <Image src={NFTBg} alt="nft background" layout='responsive' />
          <div className={nftstyles.nftdataCon}>
            <div className={nftstyles.nftdataL}>
              <div className={nftstyles.nftdataWrap}>
                <div className={nftstyles.logo}>
                  <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                </div>
                <span className={nftstyles.nftdatatext}>greg #1200</span>
                <div className={nftstyles.nftselbtn}>
                  <button type='button'>SELECT</button>
                </div>
              </div>
              <div className={`${nftstyles.nftdataWrap} ${nftstyles.dataSelected}`}>
                <div className={nftstyles.logo}>
                  <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                </div>
                <span className={nftstyles.nftdatatext}>greg #1200</span>
                <div className={nftstyles.nftselbtn}>
                  <button className={nftstyles.activeBtn} type='button'>SELECTED</button>
                </div>
              </div>
              <div className={`${nftstyles.nftdataWrap} ${nftstyles.dataSelected}`}>
                <div className={nftstyles.logo}>
                  <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                </div>
                <span className={nftstyles.nftdatatext}>greg #1200</span>
                <div className={nftstyles.nftselbtn}>
                  <button className={nftstyles.activeBtn} type='button'>SELECTED</button>
                </div>
              </div>
              <div className={nftstyles.nftdataWrap}>
                <div className={nftstyles.logo}>
                  <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                </div>
                <span className={nftstyles.nftdatatext}>greg #1200</span>
                <div className={nftstyles.nftselbtn}>
                  <button type='button'>SELECT</button>
                </div>
              </div>
              <div className={nftstyles.nftdataWrap}>
                <div className={nftstyles.logo}>
                  <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                </div>
                <span className={nftstyles.nftdatatext}>greg #1200</span>
                <div className={nftstyles.nftselbtn}>
                  <button type='button'>SELECT</button>
                </div>
              </div>
            </div>
            <div className={nftstyles.nftdataR}>
              <h1 className={nftstyles.transferHeading}>Transfer  NFTs</h1>
              <div className={nftstyles.tranDataConT}>
                <div className={nftstyles.tranDataWrapT}>
                  <div className={nftstyles.tranData}>
                    <p>Omniverse  Greg</p>
                    <h2>greg #1234</h2>
                  </div>
                  <Image src={TransLogo} width={30} height={30} alt="ikon"></Image>
                </div>
                <div className={nftstyles.tranDataWrapT}>
                  <div className={nftstyles.tranData}>
                    <p>Omniverse  Greg</p>
                    <h2>greg #1234</h2>
                  </div>
                  <Image src={TransLogo} width={30} height={30} alt="ikon"></Image>
                </div>
              </div>
              <div className={nftstyles.tranDataConB}>
                <p>Destination Network</p>
                <div className={nftstyles.transSelWrap}>
                  <select
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    <option value="a">Arbitrum</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                </div>
                <div className={nftstyles.transbtn}>
                  <button>TRANSFER</button>
                </div>
                <p>Your item will show up in your wallet on Arbitrum. Unused gas will be refunded to your wallet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFT