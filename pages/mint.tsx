import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NFT from '../components/NFT'
import MintImgBottom from '../static/mintImg-bg.png'
import PloyGoneImg from '../static/polygon logo.png'
import MinusSign from '../static/minus-sign.png'
import PlusSign from '../static/plus-sign.png'
import HeadingImg from '../static/head-img.png'
import mintstyles from '../styles/mint.module.css'
import WalletConnectProvider  from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import React, { useState , useEffect } from 'react'

const providerOptions  = {
	walletconnect: {
		package: WalletConnectProvider, 
		options: {
		infuraId: "https://rinkeby.infura.io/v3/12a4aa4f06fe4bc7b5d50d73da475e2a"
		}
	}
 }

 const networkParams:{[key:string]:object} = {
  "0x4": {
    chainId: "0x4",
    rpcUrls: ['https://rinkeby.infura.io/v3/'],
    chainName: 'Rinkeby Test Network',
    nativeCurrency: {
      name: 'rinkeby',
      symbol: 'ETH',
      decimals: 18
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io']
  },
  "0x61": {
    chainId: '0x61',
    chainName: 'BNB Smart Chain Testnet',
    nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'tBNB',
        decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
  "0xA869": {
    chainId: '0xA869',
    chainName: 'Avalanche Testnet C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
  },
  "0x13881": {
    chainId: '0x13881',
    chainName: 'Mumbai Testnet',
    nativeCurrency: {
        name: 'Mumbai',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  "0x66EEB": {
    chainName: 'Arbitrum Rinkeby',
    nativeCurrency: {
        name: 'Arbitrum',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://testnet.arbiscan.io/']
  },
  "0xFA2": {
    chainId: '0xFA2',
    chainName: 'Fantom testnet',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'MTF',
        decimals: 18
    },
    rpcUrls: ['https://rpc.testnet.fantom.network/'],
    blockExplorerUrls: ['https://faucet.fantom.network/']
  },
  "0x45": {
    chainId: '0x45',
    chainName: 'Optimistic Ethereum Testnet Kovan',
    nativeCurrency: {
        name: 'Kovan',
        symbol: 'KOR',
        decimals: 18
    },
    rpcUrls: ['https://kovan.optimism.io/'],
    blockExplorerUrls: ['']
  },
};

const addresses:{[key:string]:object} = {
  '4': {
    address: '0xC8759D18D5c96cce77074249330b9b41A618e51A',
    image: '../static/logo/ethereum-eth-logo-1.svg',
    name: 'rinkeby',
    price: 0.05,
    chainId: '10001',
    unit: 'ETH'
  },
  '97': {
    address: '0xCB3041291724B893E8BB3E876aC8f250D475685D',
    image: '../static/logo/dbanner1_copy_4_1.svg',
    name: 'bscscan',
    price: 0.375,
    chainId: '10002',
    unit: 'BNB'
  },
  '43113': {
    address: '0xd88af13d0f204156BFad1680E1199EbEd0487A07',
    image: '../static/logo/dbanner1_copy_1.svg',
    name: 'FUJI',
    price: 2,
    chainId: '10006',
    unit: 'AVAX'
  },
  '80001': {
    address: '0x864BA3671B20c2fD3Fe90788189e52Ef6D98fb65',
    image: '../static/logo/dbanner1_copy_3_1.svg',
    name: 'Mumbai',
    price: 108,
    chainId: '10009',
    unit: 'MATIC'
  },
  '421611': {
    address: '0x900501b343e8975b0ec4f1439f355f0bf15c7b9f',
    image: '../static/logo/dbanner1_copy_2_1.svg',
    name: 'Arbitrum',
    price: 0.05,
    chainId: '10010',
    unit: 'ETH'
  },
  '4002': {
    address: '0x484F40fC64D43fF7eECA7Ca51a801dB28A0F105d',
    image: '../static/logo/fantom-ftm-logo-1.svg',
    name: 'Fantom',
    price: 130,
    chainId: '10012',
    unit: 'FTM'
  },
  '69': {
    address: '0x5464Af1E4a6AF705920eD1CD0f4cb10638A89FD8',
    image: '../static/logo/JtpX95Rt_400x400-1.svg',
    name: 'Kovan',
    price: 0.05,
    chainId: '10011',
    unit: 'ETH'
  }
}


const mint: NextPage = () => {
  const [provider, setProvider] = useState<any>()
  const [library, setLibrary] = useState<any>()
  const [account, setAccount] = useState<any>()
  const [network, setNetwork] = useState<any>()
  const [chainId, setChainId] = useState<any>();

	const connect = async():Promise<void> =>{
		try {
      let web3Modal: Web3Modal | null
      if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
          network: 'mainnet', // optional
          cacheProvider: true,
          providerOptions, // required
        })
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();

        setProvider(provider);
        setLibrary(library);
        if (accounts) 
          setAccount(accounts[0]);
        setChainId(network.chainId);
      }
		} catch (error) {
			console.error(error);
		}
	}

  const handleNetwork = (e:any):void => {
    const id = e.target.value;
    setNetwork(Number(id));
  }

  const switchNetwork = async ():Promise<void> => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId:`0x${Number(network).toString(16)}` }]
      });
    } catch (switchError:any) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[`0x${Number(network).toString(16)}`]]
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts:any) => {
        setAccount(accounts[0]);
      };
  
      const handleChainChanged = (chainId:any) => {
        setChainId(chainId);
      };
  
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
  
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, [provider]);

  useEffect(()=>{
    connect()
  },[])

  return (
    <>
      <Head>
        <title>Omini Verse | Mint</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mintstyles.mintHero}> 
        <Navbar/>
        <div className={mintstyles.container}>
          <div className={mintstyles.mintImgWrap}>
            <div className={mintstyles.mintImgT}>
              {/* <Image src={MintMainImg} alt="mint" layout='responsive' /> */}
              <video
                style={{ objectFit: "cover" }}
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
              >
                <source src='../static/vid.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={mintstyles.mintImgB}>
              <Image src={MintImgBottom} alt="mint background" layout='responsive' />
              <div className={mintstyles.mintImgtext}>
                <h1>&#40;GREG, GREG&#41;</h1>
              </div>
            </div>
          </div>
          <div className={mintstyles.mintDesc}>
            <h1>Description</h1>
            <div className={mintstyles.mintDescSec}>
              <p>Welcome to the omniverse</p>
              <p>greg is our genesis collection that represents our community and technological breakthroughs</p>
              <p>mint greg below from any chain you wish and transfer him to any other chain using the “Transfer” box below</p>
              <p>5 mints per wallet</p>
            </div>
            <div className={mintstyles.mintDataGrid}>
              <div className={mintstyles.mintDataWrap}>
                <h5>MINTED</h5>
                <span>0/750</span>
              </div>
              <span className={mintstyles.line}></span>
              <div className={mintstyles.mintDataWrap}>
                <h5>PRICE</h5>
                <span>250 <Image src={PloyGoneImg} width={29.84} height={25.46} alt="ikon"></Image></span>
              </div>
              <span className={mintstyles.line}></span>
              <div className={mintstyles.mintDataWrap}>
                <h5>QUANTITY</h5>
                <div className={mintstyles.counterWrap}>
                  <button><Image src={MinusSign} alt="minus"></Image></button>
                  <span>1</span>
                  <button><Image src={PlusSign} alt="plus"></Image></button>
                </div>
              </div>
            </div>
            <div className={mintstyles.mintBtnWrap}>
              <button type='button'>MINT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className={mintstyles.mintSecBg}>
        <div className={mintstyles.mintheadingImg}>
            <div className={mintstyles.headImg}>
              <Image src={HeadingImg} alt='mint head' layout='responsive'></Image>
            </div>
            <h1>YOUR NFTS</h1>
          </div>
        <NFT/>
        <Footer/>
      </div>
    </>
  )
}

export default mint
