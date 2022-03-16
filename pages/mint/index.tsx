import MainNav from '../../components/MainNav'
import Head from 'next/head'
import { ethers } from 'ethers'
import { useEffect } from 'react'

export default function Mint() {

  useEffect(() => {
    const connectToMetamask = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      console.log('Account:', await signer.getAddress())
    }
    connectToMetamask()
  },[])
  
  return(
    <div className='h-screen w-screen flex items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO Minting</title>
        <meta name='description' content='A minting page for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav/>
    </div>
  )
}