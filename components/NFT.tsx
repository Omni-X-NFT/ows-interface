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
  chainName: string,
  isTransferring: boolean,
  setToChain:(toChain: string) => void,
  sendNFT:()=>void,
  estimateFee:string
}

interface selectOptionColor {
  color: string,
} 

interface selectOption {
  [key: string]: selectOptionColor;
}
const selectOptions:selectOption = {
  '1': {
    color:'#8C8C8C'
  },
  '56': {
    color:'#F3BA2F'
  },
  '43114': {
    color:'#E84142'
  },
  '137': {
    color:'#8247E5'
  },
  '42161': {
    color:'#28A0F0'
  },
  '250': {
    color:'#13B5EC'
  },
  '10': {
    color:'#FF0320'
  }
}

const NFT : React.FC<Props> = (Props) => {
  const transferNFTParts = () =>{
    return(
      <>
        {
          Props.mintedNFTs.map((nftId, idx)=>{
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
      </>
    )
  }
  return (
    <>
    <div className={nftstyles.nftcontainer}>
        <div className={nftstyles.nftmainWrap}>
          <div className={nftstyles.NFTbgImg}>
            <Image src={NFTBg} alt="nft background" layout='responsive' />
          </div>
          <div className={nftstyles.nftdataCon}>
            <div className={nftstyles.nftdataL}>
              {transferNFTParts()}
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
                <div className={nftstyles.transSelWrap} style={{"background":selectOptions[Props.toChain].color}}>
                  <select
                    onChange={(e) => {
                      Props.setToChain(e.target.value);
                    }}
                  >
                    <option value='4'>Rinkeby</option>
                    <option value='97'>BNB Chain</option>
                    <option value='43113'>FUJI</option>
                    <option value='80001'>Mumbai</option>
                    <option value='421611'>Arbitrum</option>
                    <option value='4002'>Fantom</option>
                    <option value='69'>Kovan</option>
                  </select>
                </div>
                <p>{Props.estimateFee}</p>  
                <div className={nftstyles.transbtn}>
                  {
                  Props.isTransferring?
                    <button onClick={()=>Props.sendNFT()}><i  className="fa fa-spinner fa-spin" style={{"letterSpacing":"normal"}}/>TRANSFER</button>
                    :
                    <button onClick={()=>Props.sendNFT()}>TRANSFER</button>
                  }
                </div>
                <p>Your item will show up in your wallet on {Props.chainName}. Unused gas will be refunded to your wallet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFT