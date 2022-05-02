import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Image from 'next/image'
import omniLogo from '../static/omniverseLogoWhite.png'

import AdvancedONT from '../services/abis/AdvancedONT.json'

import { useActiveWeb3React } from '../hooks/useWeb3'
import { getContract } from '../utils/contracts'

import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers'

const injected = new InjectedConnector({
  supportedChainIds: [4, 97, 43113, 80001, 421611, 4002, 69]
})

const addresses = {
  '4': {
    address: '0xe5B227D2b91225f37D742C44F1708FB8886Dc816',
    image: '../static/logo/ethereum-eth-logo-1.svg',
    name: 'rinkeby',
    price: 0.05,
    chainId: '10001',
    unit: 'ETH'
  },
  '97': {
    address: '0xe880C81E71acfc8d6f53b663A98676c52eec3Aa3',
    image: '../static/logo/dbanner1_copy_4_1.svg',
    name: 'bscscan',
    price: 0.375,
    chainId: '10002',
    unit: 'BNB'
  },
  '43113': {
    address: '0x2ce33635c398c5C4D2864Baa870Cbd7E36060b26',
    image: '../static/logo/dbanner1_copy_1.svg',
    name: 'FUJI',
    price: 2,
    chainId: '10006',
    unit: 'AVAX'
  },
  '80001': {
    address: '0x2E7D05Effb588EaFF8f3ae141B9462cef13cFddD',
    image: '../static/logo/dbanner1_copy_3_1.svg',
    name: 'Mumbai',
    price: 108,
    chainId: '10009',
    unit: 'MATIC'
  },
  '421611': {
    address: '0x580ce08aaD9e99cC2a124509F424795173fcB8FD',
    image: '../static/logo/dbanner1_copy_2_1.svg',
    name: 'Arbitrum',
    price: 0.05,
    chainId: '10010',
    unit: 'ETH'
  },
  '4002': {
    address: '0x8471371AeFDd6Ad7db1C93d97F07EeE2006b25E8',
    image: '../static/logo/fantom-ftm-logo-1.svg',
    name: 'Fantom',
    price: 130,
    chainId: '10012',
    unit: 'FTM'
  },
  '69': {
    address: '0xfF6D4F31096988056611Eba104dBb70474a3C250',
    image: '../static/logo/JtpX95Rt_400x400-1.svg',
    name: 'Kovan',
    price: 0.05,
    chainId: '10011',
    unit: 'ETH'
  }
}

export default function Greg() {
  const { connector, chainId, activate, deactivate, error, account, active } = useWeb3React()

  const router = useRouter()
  const [mintNum, setMintNum] = useState(1)
  const [toChain, setToChain] = useState('4')
  const [selectedNFT, setSelectedNFT] = useState(addresses['4'])
  const [selectedChainID, setSelectedChainID] = useState(addresses['4'])
  const [netId, setNetId] = useState('4')
  const [ownToken, setOwnToken] = useState([])
  const [transferNFT, setTransferNFT] = useState()
  const [totalNFTCount, setTotalNFTCount] = useState(0)
  const [nextTokenId, setNextTokenId] = useState(0)

  const { library } = useActiveWeb3React()

  async function connect() {
    try {
      await activate(injected)
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

  const accountEllipsis = account ? account : null

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
    let keys = Object.keys(addresses)
    let flag = keys.filter(item => {
      if(item == chainId) {
        return item;
      }
    })

    if(flag.length == 0) {
      window.alert('Please select correct Network!')
      return false
    }
    return true
  }

  useEffect(() => {
    let keys = Object.keys(addresses)
    let temp = '';
    let flag = keys.filter(item => {
      if(item == chainId) {
        temp = item;
        setSelectedChainID(item)
        return item;
      }
    })
    if(flag.length > 0) {
      setSelectedNFT(addresses[temp])
    }
    setNetId(chainId);
    getInfo();
  }, [chainId])

  const mint = async () => {
    if(!checkConnect()) return
    const tokenContract = getContract(addresses[selectedChainID].address, AdvancedONT, library, account)

    let mintResult;

    try {
      let publicmintFlag = await tokenContract._publicSaleStarted();
      let saleFlag = await tokenContract._saleStarted();

      if(saleFlag && publicmintFlag) {
        mintResult = await tokenContract.publicMint(mintNum, {value: ethers.utils.parseEther((addresses[selectedChainID].price*mintNum).toString())})

        getInfo();
      } else if (saleFlag) {
        mintResult = await tokenContract.mint(mintNum, {value: ethers.utils.parseEther((addresses[selectedChainID].price*mintNum).toString())})

        getInfo();
      } else {
        window.alert("Sale is not started yet.")
      }
    } catch (e) {
      console.log(e)
    }
  }

  const sendNFT = async () => {
    if(!transferNFT){
      window.alert("Select NFT you want to transfer, please.")
      return;
    }
    try {
      if(!checkConnect()) return
      const tokenContract = getContract(addresses[selectedChainID].address, AdvancedONT, library, account)

      const estimateFee = await tokenContract.estimateFeesSendNFT(addresses[toChain].chainId, transferNFT)
      const currentBalance = await library.getBalance(account);

      if(Number(estimateFee) > Number(currentBalance)) {
        window.alert("You don't have enough balance for transfer.");
        return;
      }

      let result = await tokenContract.sendNFT(addresses[toChain].chainId, transferNFT, {value: Number(estimateFee)})

      getInfo();
    } catch (e) {
      console.log(e)
    }
  }

  const getInfo = async () => {
    if(addresses[chainId]) {
      const tokenContract = getContract(addresses[chainId].address, AdvancedONT, library, account)

      let result = await tokenContract.balanceOf(account);
      let token, tokenlist = [];
      for (var i = 0; i < Number(result); i++) {
        token = await tokenContract.tokenOfOwnerByIndex(account, i);
        tokenlist.push(Number(token));
      }

      setOwnToken(tokenlist);

      let max_mint = await tokenContract.MAX_MINT();
      let nextId = await tokenContract.nextTokenId();

      setTotalNFTCount(Number(max_mint));
      setNextTokenId(Number(nextId));
    }
  }

  const switchNetwork = async () => {
    const provider = window.ethereum;
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${Number(netId).toString(16)}`,
          }
        ]      
      });
    } catch (addError) {
       console.log(addError);
    }
  }

  useEffect(() => {
    if(!active) {
      connect()
    }
  }, [])

  useEffect(() => {
    switchNetwork()
  }, [netId])

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
            <p className='text-[25px] leading-[25px] mt-[40px] font-bold'>{nextTokenId}/{totalNFTCount} Minted</p>
            <div className='mt-[20px] flex gap-[5px]'>
              <p className='lg:text-[25px] text-[12px] leading-[25px] font-bold'>{selectedNFT.price + ' ' + selectedNFT.unit}</p>
              <img src={selectedNFT.image} className='h-[40px]' />
              {/*<p className='lg:text-[25px] text-[12px] leading-[25px]'>each.  ~ 2.7 AVAX</p>*/}
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
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col w-5/6 max-w-[1200px] min-w-[320px] mx-auto gap-[50px] xl:pb-[220px] pb-[100px]'>
        <div className='rounded-[25px] lg:w-3/4 w-full bg-black p-[30px]'>
          <p className='text-[25px] leading-[30px] font-bold m-0 text-center'>Your NFTs</p>
          <div className='w-full gap-[20px] flex flex-col'>
            {
              ownToken.map(item => (
                <div className='w-full my-[20px] flex items-center justify-between' onClick={() => setTransferNFT(item)} key={item}>
                  <div className='flex items-center'>
                    <img src='../static/nft.svg' className='w-[100px]' />
                    <p className='font-medium text-[25px] leading-[30px] text-center'>greg #{item}</p>
                  </div>
                  {
                    transferNFT == item ?
                      <div className='w-[28px] h-[28px] relative flex items-center justify-center'>
                        <img src='../static/check.svg' className='absolute' />
                        <img src='../static/checked.svg' />
                      </div>
                    :
                      <div className='w-[28px] h-[28px] relative'>
                        <img src='../static/unchecked.svg' />
                      </div>
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='rounded-[25px] lg:w-1/4 w-full bg-black p-[30px] h-[400px] relative'>
          <p className='text-[25px] leading-[30px] font-bold m-0 text-center'>Transfer</p>
          <p className='text-[15px] leading-[18px] m-0 text-center mt-[20px]'>Select Destination</p>
          <div className="relative mt-[20px]">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-[10px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={toChain} onChange={(e) => setToChain(e.target.value)}>
              <option value='4'>Rinkeby</option>
              <option value='97'>Bscscan</option>
              <option value='43113'>Snowtrace</option>
              <option value='80001'>Polygonscan</option>
              <option value='421611'>Arbiscan</option>
              <option value='4002'>Ftmscan</option>
              <option value='69'>Kovan</option>
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
