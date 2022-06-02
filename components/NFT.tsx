import React from 'react'
import Image from 'next/image'
import NFTBg from '../static/NFTBg.png'
import NFTLogo from '../static/nftLogo.png'
import TransLogo from '../static/translogo.png'
import nftstyles from '../styles/NFT.module.css'

interface Props{
  mintedNFTs:Array<number>,
  transferNFT:number,
  setTransferNFT:(transferNFT: number) => void,
  toChain:string,
  setToChain:(toChain: string) => void,
  sendNFT:()=>void
}

const NFT : React.FC<Props> = (Props) => {
  return (
    <>
    <div className={nftstyles.nftcontainer}>
        <div className={nftstyles.nftmainWrap}>
          <div className={nftstyles.NFTbgImg}>
            <Image src={NFTBg} alt="nft background" layout='responsive' />
          </div>
          <div className={nftstyles.nftdataCon}>
            <div className={nftstyles.nftdataL}>
              {
                Props.mintedNFTs.map(function(nftId, idx){
                  if(nftId!=Props.transferNFT){
                    return(
                      <div key={idx} className={nftstyles.nftdataWrap}>
                        <div className={nftstyles.logo}>
                          <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                        </div>
                        <span className={nftstyles.nftdatatext}>greg #{nftId}</span>
                        <div className={nftstyles.nftselbtn}>
                          <button type='button' onClick={()=>Props.setTransferNFT(nftId)}>SELECT</button>
                        </div>
                      </div>
                    )
                  } else{
                    return(
                      <div key={idx} className={`${nftstyles.nftdataWrap} ${nftstyles.dataSelected}`}>
                        <div className={nftstyles.logo}>
                          <Image src={NFTLogo} width={50} height={50} alt="nft"></Image>
                        </div>
                        <span className={nftstyles.nftdatatext}>greg #{nftId}</span>
                        <div className={nftstyles.nftselbtn}>
                          <button className={nftstyles.activeBtn} type='button'>SELECTED</button>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
            <div className={nftstyles.nftdataR}>
              <h1 className={nftstyles.transferHeading}>Transfer  NFT</h1>
              {
                Props.transferNFT!=0?
                <div className={nftstyles.tranDataConT}>
                  <div className={nftstyles.tranDataWrapT}>
                    <div className={nftstyles.tranData}>
                      <p>Omniverse  Greg</p>
                      <h2>greg #{Props.transferNFT}</h2>
                    </div>
                    <Image src={TransLogo} width={30} height={30} alt="ikon"></Image>
                  </div>
                </div>
                :
                null
              }
              <div className={nftstyles.tranDataConB}>
                <p>Destination Network</p>
                <div className={nftstyles.transSelWrap}>
                  <select
                    onChange={(e) => {
                      Props.setToChain(e.target.value);
                    }}
                  >
                    <option value='4'>Rinkeby</option>
                    <option value='97'>Bscscan</option>
                    <option value='43113'>FUJI</option>
                    <option value='80001'>Mumbai</option>
                    <option value='421611'>Arbitrum</option>
                    <option value='4002'>Fantom</option>
                    <option value='69'>Kovan</option>
                  </select>
                </div>
                <div className={nftstyles.transbtn}>
                  <button onClick={()=>Props.sendNFT()}>TRANSFER</button>
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