import Head from 'next/head'
import { useEffect, useState } from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AdvancedONT from '../services/abis/AdvancedONT.json'

import { useActiveWeb3React } from '../hooks/useWeb3'
import { getContract } from '../utils/contracts.js'

import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { BigNumber, ethers } from 'ethers'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-toastify'

const chains = [4, 97, 43113, 80001, 421611, 4002, 69]

const injected = new InjectedConnector({
  supportedChainIds: chains
})
const addresses = {
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


export default function Greg() {
  const {chainId, activate,   account, active } = useWeb3React()

  const [mintNum, setMintNum] = useState(1)
  const [toChain, setToChain] = useState('4')
  const [netId, setNetId] = useState('4')

  const [ownToken, setOwnToken] = useState([])
  const [transferNFT, setTransferNFT] = useState()
  const [totalNFTCount, setTotalNFTCount] = useState(0)
  const [nextTokenId, setNextTokenId] = useState(0)
  const [ownTokenisLoading, setOwnTokenisLoading] = useState(true)
  const [estimateFee, setEstimateFee] = useState('')
  const [isMinting, setIsMinting] = useState(false)
  const [isTransferring, setIsTransferring] = useState(false)
  const [isSwitching, setIsSwitching] = useState(false)

  const { library } = useActiveWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      errorToast('connect error')
    }
  }

  // async function disconnect() {
  //   try {
  //     deactivate()
  //   } catch (ex) {
  //   }
  // }


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
        return item
      }
    })

    if(flag.length == 0) {
      errorToast('Please select correct Network!')
      return false
    }
    return true
  }

  useEffect(() => {
    if(chainId!=undefined){
      {
          switchNetwork()
      }
    }
  }, [netId])

  useEffect(()=>{
    if(isSwitching==true){
      if(account!=undefined){
        getInfo()
        setIsSwitching(false)
      }
    }
  },[isSwitching,account])

  useEffect (()=>{
    Aos.init({ duration: 1000 })
    if(chainId==undefined){
      switchNetwork()
    } 
  }, [])

  const switchNetwork = async () => {
    const provider = window.ethereum
    if(chainId!=netId){
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: `0x${Number(netId).toString(16)}`,
            }
          ]      
        })
        
        setTransferNFT()
        setIsSwitching(true)
      } catch (addError) {
        if(addError["code"]==4001){
          errorToast('User rejected the request to switch network')
          setNetId(chainId)
        } else{
          if(netId=='4'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x4',
                  chainName: 'Rinkeby Test Network',
                  nativeCurrency: {
                      name: 'rinkeby',
                      symbol: 'ETH',
                      decimals: 18
                },
                rpcUrls: ['https://rinkeby.infura.io/v3/'],
                blockExplorerUrls: ['https://rinkeby.etherscan.io']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } else if (netId=='97'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x61',
                  chainName: 'BNB Smart Chain Testnet',
                  nativeCurrency: {
                      name: 'Binance Coin',
                      symbol: 'tBNB',
                      decimals: 18
                },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                blockExplorerUrls: ['https://testnet.bscscan.com/']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } else if(netId=='43113'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0xA869',
                  chainName: 'Avalanche Testnet C-Chain',
                  nativeCurrency: {
                      name: 'Avalanche',
                      symbol: 'AVAX',
                      decimals: 18
                },
                rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                blockExplorerUrls: ['https://testnet.snowtrace.io/']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } else if(netId=='80001'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x13881',
                  chainName: 'Mumbai Testnet',
                  nativeCurrency: {
                      name: 'Mumbai',
                      symbol: 'MATIC',
                      decimals: 18
                },
                rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                blockExplorerUrls: ['https://polygonscan.com/']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } else if(netId=='421611'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x66EEB',
                  chainName: 'Arbitrum Rinkeby',
                  nativeCurrency: {
                      name: 'Arbitrum',
                      symbol: 'ETH',
                      decimals: 18
                },
                rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
                blockExplorerUrls: ['https://testnet.arbiscan.io/']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } 
          else if(netId=='4002'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0xFA2',
                  chainName: 'Fantom testnet',
                  nativeCurrency: {
                      name: 'Fantom',
                      symbol: 'MTF',
                      decimals: 18
                },
                rpcUrls: ['https://rpc.testnet.fantom.network/'],
                blockExplorerUrls: ['https://faucet.fantom.network/']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          } else if(netId=='69'){
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x45',
                  chainName: 'Optimistic Ethereum Testnet Kovan',
                  nativeCurrency: {
                      name: 'Kovan',
                      symbol: 'KOR',
                      decimals: 18
                },
                rpcUrls: ['https://kovan.optimism.io/'],
                blockExplorerUrls: ['']
                }
              ]
            })
            setTransferNFT()
            setIsSwitching(true)
          }else{
            setNetId(chainId)
            errorToast('Switching network error, please try again')
          }
        }
        
      }
    } else {
      setIsSwitching(true)
    }
  }

  const mint = async () => {
    if(!checkConnect()) return
    const tokenContract = getContract(addresses[chainId].address, AdvancedONT.abi, library, account)

    let mintResult
    setIsMinting(true)

    try {
      let publicmintFlag = await tokenContract._publicSaleStarted()
      let saleFlag = await tokenContract._saleStarted()

      if(saleFlag && publicmintFlag) {

        mintResult = await tokenContract.publicMint(mintNum, {value: ethers.utils.parseEther((addresses[chainId].price*mintNum).toString())})
        const receipt = await mintResult.wait()
        if(receipt!=null){
          setIsMinting(false)
          getInfo()
        }
        // add the the function to get the emit from the contract and call the getInfo()
      } else if (saleFlag) {
        mintResult = await tokenContract.mint(mintNum, {value: ethers.utils.parseEther((addresses[chainId].price*mintNum).toString())})
        // add the the function to get the emit from the contract and call the getInfo()
        const receipt = await mintResult.wait()
        if(receipt!=null){
          setIsMinting(false)
          getInfo()
        }
      } else {
        errorToast('Sale is not started yet')
        setIsMinting(false)
      }
    } catch (e) {
      if(e['code'] == 4001){
        errorToast(e['message'].split(':')[1])
      } else {
        errorToast('There is not enough fund to mint the NFT on '+ addresses[chainId].name)
      }
      setIsMinting(false)
    }
  }

  const sendNFT = async () => {
    if(!transferNFT){
      errorToast('Select NFT you want to transfer, please')
      return
    }
    try {
      if(!checkConnect()) return
      const tokenContract = getContract(addresses[chainId].address, AdvancedONT.abi, library, account)

      const estimateFee = await tokenContract.estimateFeesSendNFT(addresses[toChain].chainId, transferNFT)
      const currentBalance = await library.getBalance(account)

      if(Number(estimateFee) * 1.1 > Number(currentBalance)) {
        errorToast('You do not have enough balance for transfer')
        return
      }
      let gasFee = BigNumber.from(estimateFee)/Math.pow(10,18)*1.1*Math.pow(10,18)
      gasFee = gasFee - gasFee%1
      setIsTransferring(true)
      let mintResult = await tokenContract.sendNFT(addresses[toChain].chainId, transferNFT, {value: gasFee.toString()})
      // please add the function to get the emit from the contract and call the getInfo()
      const receipt = await mintResult.wait()
      if(receipt!=null){
        getInfo()
        setIsTransferring(false)
      }
      // add emit function after redploy the contract
      const destination_contract = getContract(addresses[toChain].address, AdvancedONT.abi, library, account)
      destination_contract.on('Transfer',(from , to , tokenID) => {
        if(to==account){
          toast.success(`${ addresses[chainId].name } sent greg#${ tokenID } to ${ addresses[toChain].name}`,{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            transition: Slide
          })
          setIsTransferring(false)
        }
      })

    } catch (e) {
      if(e['code'] == 4001){
        errorToast(e['message'].split(':')[1])
      } else {
        errorToast('Sending NFT error, Please try again')
      }
      setIsTransferring(false)
    }
    setTransferNFT()

  }

  const getInfo = async () => {
    if(addresses[netId]) 
    {
      setOwnTokenisLoading(true)
      try{
        const tokenContract = getContract(addresses[netId].address, AdvancedONT.abi, library, account)

        let result = await tokenContract.balanceOf(account)
        let token, tokenlist = []
        for (var i = 0 ;i < Number(result); i++) {
          token = await tokenContract.tokenOfOwnerByIndex(account, i)
          tokenlist.push(Number(token))
        }
  
        setOwnToken(tokenlist)
  
        let max_mint = await tokenContract.MAX_MINT()
        let nextId = await tokenContract.nextTokenId()
  
        setTotalNFTCount(Number(max_mint))
        setNextTokenId(Number(nextId))
      } catch(error){
        setNetId(chainId)
        errorToast('Getting NFT Error!!!, Please Check the Internet Connection!!!')
      }
      setOwnTokenisLoading(false)
    }
  }


  const loadingIcon = () => {
    return(
      <>
        <svg role='status' className='inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
          <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='#1C64F2'/>
        </svg>
      </>
    )
  }
  const errorToast = (error) =>{
    toast.error(error,{
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      transition: Slide
    })
  }
  const mintButton = () => {
    if(chainId == '4'){
      return(
        <>
          {isMinting?
            <button className='bg-[#8C8C8C] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#8C8C8C] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '97'){
      return(
        <>
          {isMinting?
            <button className='bg-[#F3BA2F] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#F3BA2F] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '43113'){
      return(
        <>
          {isMinting?
            <button className='bg-[#E84142] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#E84142] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '80001'){
      return(
        <>
          {isMinting?
            <button className='bg-[#8247E5] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#8247E5] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '421611'){
      return(
        <>
          {isMinting?
            <button className='bg-[#28A0F0] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#28A0F0] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '4002'){
      return(
        <>
          {isMinting?
            <button className='bg-[#13B5EC] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#13B5EC] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    } else if(chainId == '69'){
      return(
        <>
          {isMinting?
            <button className='bg-[#FF0320] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              {loadingIcon()}
                Minting...
            </button>
            :
            <button className='bg-[#FF0320] hover:opacity-80 w-[230px] h-[43px] px-[30px] py-[8px] rounded-[6px]' onClick={mint}>
              Mint
            </button>
          }
        </>
      )
    }
  }

  const transferButton = () => {
    if(toChain == '4'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#8C8C8C] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#8C8C8C] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '97'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#F3BA2F] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#F3BA2F] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '43113'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#E84142] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#E84142] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '80001'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#8247E5] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#8247E5] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '421611'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#28A0F0] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#28A0F0] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '4002'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#13B5EC] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#13B5EC] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    } else if(toChain == '69'){
      return(
        <>
          {isTransferring?
            <button className='bg-[#FF0320] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              {loadingIcon()}<span className='font-bold'>Transferring...</span>
            </button>
            :
            <button className='bg-[#FF0320] hover:opacity-80 px-[30px] py-[15px] rounded-[16px] text-center' onClick={sendNFT}>
              <span className='font-bold'>Transfer</span>
            </button>
          }
        </>
      )
    }
  }

  useEffect(() => {
    if(!active) {
      connect()
    }
  }, [])



  useEffect(() => {
    const calculateFee = async() => {
      try{
        if(transferNFT){
          const tokenContract = getContract(addresses[chainId].address, AdvancedONT.abi, library, account)
          const fee = await tokenContract.estimateFeesSendNFT(addresses[toChain].chainId, transferNFT)
          setEstimateFee((BigNumber.from(fee)/(BigNumber.from(10).pow(18))*1.1).toFixed(10)+addresses[chainId].unit)
        } else {
          setEstimateFee('')
        }
      } catch(error){
        if(chainId == toChain){
          errorToast(`${addresses[toChain].name} is currently unavailable for transfer`)
        } else {
          errorToast('Please Check the Internet Connection!!!')
        }

      }
    }
    calculateFee()
  },[toChain,transferNFT])

  return (
    <div className='w-full main raleway overflow-hidden'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav setNetId={setNetId} netId={netId} addresses={addresses} />
      <ToastContainer />
  


      <div className='pt-[200px] mb-[50px]' data-aos='fade-left'>
        <div className='rounded-[25px] bg-[#000207C9] w-5/6 max-w-[1200px] min-w-[320px] lg:px-[30px] px-0 mx-auto flex lg:flex-row flex-col'>
          <div className='py-[50px] lg:w-2/4 h-full  lg:px-[50px] px-[20px] flex justify-center'>
            <img src='../static/nft.png' />
          </div>
          <div className='py-[50px] lg:w-2/4 w-full lg:px-[50px] px-[20px]'>
            <p className='lg:text-[30px] text-[25px] lg:leading-[75px] leading-[50px] mt-0 font-bold'>(greg, greg)</p>
            <p className='text-[15px] leading-[25px]'>welcome to the omniverse</p>
            <p className='text-[15px] leading-[25px]'>greg is our genesis collection that represents our community and technological breakthroughs</p>
            <p className='text-[15px] leading-[25px]'>mint greg below from any chain you wish and transfer him to any other chain using the “Transfer” box below</p>
            <p className='text-[15px] leading-[25px]'>5 mints per wallet</p>
            <p className='text-[25px] leading-[25px] mt-[40px] font-bold'>{nextTokenId}/{totalNFTCount} Minted</p>
            <div className='mt-[20px] flex gap-[5px]'>
              {chainId?<>
                <p className='lg:text-[25px] text-[12px] leading-[25px] font-bold'>{addresses[chainId].price + ' ' + addresses[chainId].unit + ' each'}</p>
                <img src={addresses[chainId].image} className='h-[40px]' />
              </>
              :
              null
              }
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
              {mintButton()}
            </div>
          </div>
        </div>
      </div>

      <div  className='flex lg:flex-row flex-col w-5/6 max-w-[1200px] min-w-[320px] mx-auto gap-[50px] xl:pb-[220px] pb-[100px]'>
        <div data-aos='fade-right' className='rounded-[25px] lg:w-3/4 w-full bg-[#000207C9] p-[30px]' >
          <p className='text-[25px] leading-[30px] font-bold m-0 text-center'>Your NFTs</p>
          <div className='w-full gap-[20px] flex flex-col h-[600px] overflow-y-auto scroll-style'>
            {ownTokenisLoading? 
              <div className='ring'>Loading
                <span></span>
              </div>
              :
              ownToken.map(item => (
                <div className='w-full my-[20px] flex items-center justify-between' onClick={() => setTransferNFT(item)} key={item}>
                  <div className='flex items-center'>
                    <img src='../static/nft.png' className='w-[100px] h-[95px]' />
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
        <div data-aos='fade-up' className='rounded-[25px] lg:w-1/4 w-full bg-[#000207C9] p-[30px] h-[450px]  relative'>
          <p className='text-[25px] leading-[30px] font-bold m-0 text-center'>Transfer NFTs</p>

          {transferNFT? <div className='flex items-center justify-between mb-4 mt-4'>
            <div className='flex items-center'>
              <img className='rounded-full w-[50px] h-[47px] md:h-[47px] md:w-[50px]' src='../static/nft.png' alt='' />
              <div className='md:ml-2 ml-4'>
                <small className='text-[12px]'>Omniverse Greg</small>
                <span className='block '>greg #{transferNFT}</span>
              </div>
            </div>
            <div className='block mr-5'>
              <img src='../static/transfer-icon.png' alt='icon' />
            </div>
          </div> : null}
          

          <p className='text-[15px] leading-[18px] m-0 text-left mt-[20px]'>Destination Network</p>
          <div className='relative mt-[20px]'>
            <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-[6px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-state' value={toChain} onChange={(e) => setToChain(e.target.value)}>
              <option value='4'>Rinkeby</option>
              <option value='97'>Bscscan</option>
              <option value='43113'>FUJI</option>
              <option value='80001'>Mumbai</option>
              <option value='421611'>Arbitrum</option>
              <option value='4002'>Fantom</option>
              <option value='69'>Kovan</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/></svg>
            </div>
          </div>
          <div className='absolute flex flex-col bottom-[20px] transfer-bottom'>
            <div className='flex flex-row w-full justify-between'>
              <p className='text-[13px] leading-[15px]'>Fee</p>
              <p className='text-[13px] leading-[15px]'>{estimateFee}</p>
            </div>
            {transferButton()}
            <div className='flex flex-row w-full justify-between'>
              <p className='text-[13px] leading-[15px]'> Your item will show up  in your wallet on <b className='text-base'>{addresses[toChain].name }</b> . Unused gas will be refunded to your wallet.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
