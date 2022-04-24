import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Image from 'next/image'
import omniLogo from '../static/omniverseLogoWhite.png'

import AdvancedONT from '../services/abis/AdvancedONT.json';

import { useActiveWeb3React } from '../hooks/useWeb3';
import { getContract } from '../utils/contracts';

import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [4, 97, 43113, 80001, 421611, 4002, 69]
})

const addresses = {
  '4': {
    address: '0x864ba3671b20c2fd3fe90788189e52ef6d98fb65',
    image: '../static/logo/ethereum-eth-logo-1.svg',
    price: '0.05 ETH'
  },
  '97': {
    address: '0x3A0EDdbAB2943C39B52D60e4871A034698dA5af0',
    image: '../static/logo/dbanner1_copy_1.svg',
    price: '108 MATIC'
  },
  '43113': {
    address: '0xc95252494ADd57CE68C1A7acB110A509E716aBf1',
    image: '../static/logo/dbanner1_copy_2_1.svg',
    price: '2 AVAX'
  },
  '80001': {
    address: '0x7EF144536Df082807612769Dd4F745e8E7f723c3',
    image: '../static/logo/dbanner1_copy_4_1.svg',
    price: '0.375 BNB'
  },
  '421611': {
    address: '0xBE9f85D85373A146D20d796Ea2dEC241aF42CB92',
    image: '../static/logo/JtpX95Rt_400x400-1.svg',
    price: '0.05 ETH'
  },
  '4002': {
    address: '0x21c513573d63e6e0C1B7c7cF4f00549F5865DeB7',
    image: '../static/logo/dbanner1_copy_3_1.svg',
    price: '130 FTM'
  },
  '69': {
    address: '0x21c513573d63e6e0C1B7c7cF4f00549F5865DeB7',
    image: '../static/logo/fantom-ftm-logo-1.svg',
    price: '0.05 ETH'
  }
}

export default function Greg({networkId}) {
  const { connector, chainId, activate, deactivate, error, account, active } = useWeb3React();

  const router = useRouter();
  const [mintNum, setMintNum] = useState(1);
  const [toChain, setToChain] = useState(1);
  const [selectedNFT, setSelectedNFT] = useState(addresses['4']);
  const [netId, setNetId] = useState(4);

  const { library } = useActiveWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  const accountEllipsis = account ? account : null;

  const decrease = () => {
    if(mintNum > 1) {
      setMintNum(mintNum - 1)
    }
  }

  const increase = () => {
    if(mintNum < 5) {
      setMintNum(mintNum + 1)
    }
  }

  const checkConnect = () => {
    if(!active) {
      connect();
    }

    // let enableChains = Object.keys(addresses);

    // let flag = enableChains.filter(num => Number(num) == chainId);

    // if(flag.length == 0) {
    //   window.alert('Please select correct Network!');
    //   return false;
    // }
  }

  useEffect(() => {
    checkConnect();
  }, [chainId, active])

  useEffect(() => {
    if(addresses[netId]) {
      setSelectedNFT(addresses[netId]);
    }
  }, [netId])

  const mint = async () => {
    const tokenContract = getContract(addresses[chainId].address, AdvancedONT, library, account);

    let name = await tokenContract.mint(mintNum);
  }

  const sendNFT = async () => {
    const tokenContract = getContract(addresses[chainId].address, AdvancedONT, library, account);

    let result = await tokenContract.sendNFT(Number(toChain), 0);
  }

  return (
    <div className='w-full main raleway'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav setNetId={setNetId} netId={netId} addresses={addresses} />

      <div className='pt-[200px] mb-[50px]'>
        <div className='rounded-[25px] bg-black w-5/6 max-w-[1200px] min-w-[320px] lg:px-[30px] px-0 mx-auto flex lg:flex-row flex-col'>
          <div className='py-[50px] lg:w-2/4 w-full lg:px-[50px] px-[20px] flex justify-center'>
            <img src='../static/nft.svg' />
          </div>
          <div className='py-[50px] lg:w-2/4 w-full lg:px-[50px] px-[20px]'>
            <p className='lg:text-[30px] text-[25px] lg:leading-[75px] leading-[50px] mt-0 font-bold'>(greg, greg)</p>
            <p className='text-[15px] leading-[25px]'>welcome to the omniverse</p>
            <p className='text-[15px] leading-[25px]'>greg is our genesis collection that represents our community and technological breakthroughs</p>
            <p className='text-[15px] leading-[25px]'>mint greg below from any chain you wish and transfer him to any other chain using the “Transfer” box below</p>
            <p className='text-[15px] leading-[25px]'>5 mints per wallet, and once you mint your greg will replace the default greg to the left</p>
            <p className='text-[25px] leading-[25px] mt-[40px] font-bold'>0/4444 Minted</p>
            <div className='mt-[20px] flex gap-[5px]'>
              <p className='lg:text-[25px] text-[12px] leading-[25px] font-bold'>{selectedNFT.price}</p>
              <img src={selectedNFT.image} className='h-[40px]' />
              <p className='lg:text-[25px] text-[12px] leading-[25px]'>each.  ~ 2.7 AVAX</p>
            </div>
            <div className='mt-[20px] flex lg:flex-row flex-col gap-[30px] justify-between items-center'>
              <div className='flex gap-[25px]'>
                <button onClick={decrease}>
                  <img src='../static/minus.svg' />
                </button>
                <p className='text-[30px] leading-[25px]'>{mintNum}</p>
                <button onClick={increase}>
                  <img src='../static/plus.svg' />
                </button>
              </div>
              <button className='bg-[#E84142] px-[30px] py-[8px] rounded-[5px]' onClick={mint}>
                Mint from Avalanche
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col w-5/6 max-w-[1200px] min-w-[320px] mx-auto gap-[50px] xl:pb-[220px] pb-[100px]'>
        <div className='rounded-[25px] lg:w-3/4 w-full bg-black p-[30px]'>
          <p className='text-[25px] leading-[30px] font-bold m-0'>Your gregs</p>
          <div className='w-full gap-[20px] flex md:flex-row flex-col'>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #1234</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #4120</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #0001</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #3123</p>
            </div>
          </div>
          <div className='w-full gap-[20px] flex md:flex-row flex-col'>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #1234</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #4120</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #0001</p>
            </div>
            <div className='md:w-1/4 w-full my-[20px] flex flex-col items-center'>
              <img src='../static/nft.svg' />
              <p className='font-medium text-[25px] leading-[30px] text-center'>greg #3123</p>
            </div>
          </div>
        </div>
        <div className='rounded-[25px] lg:w-1/4 w-full bg-black p-[30px] h-[400px] relative'>
          <p className='text-[25px] leading-[30px] font-bold m-0 text-center'>Transfer</p>
          <p className='text-[15px] leading-[18px] m-0 text-center mt-[20px]'>Select Destination</p>
          <div className="relative mt-[20px]">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-[10px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={toChain} onChange={(e) => setToChain(e.target.value)}>
              <option value='1'>Rinkeby</option>
              <option value='2'>Bscscan</option>
              <option value='3'>Snowtrace</option>
              <option value='4'>Polygonscan</option>
              <option value='5'>Arbiscan</option>
              <option value='6'>Ftmscan</option>
              <option value='7'>Kovan</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <div className='absolute flex flex-col bottom-[20px] transfer-bottom'>
            <div className='flex flex-row w-full justify-between'>
              <p className='text-[13px] leading-[15px]'>Fee</p>
              <p className='text-[13px] leading-[15px]'>.03 ETH ($30.07)</p>
            </div>
            <button className='bg-[#28A0F0] px-[30px] py-[15px] rounded-[20px] text-center' onClick={sendNFT}>
              Confirm Transfer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
