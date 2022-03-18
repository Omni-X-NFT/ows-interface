import MainNav from '../../components/MainNav'
import Head from 'next/head'
import { ethers, Signer } from 'ethers'
import { useEffect, useState } from 'react'
import MintScreen from '../../components/MintScreen'

export default function Mint() {
  const [connectedSigner, setConnectedSigner] = useState<Signer>()

  useEffect(() => {
    const connectToMetamask = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      console.log('Account:', await signer.getAddress(), 'chain id:', await signer.getChainId())
      //listen to network change and reload the page
      provider.on('network', (newNetwork, oldNetwork) => {
        if (oldNetwork) {
          window.location.reload()
        }
      })
      setConnectedSigner(signer)
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
      <div className='tabletcorner'>
        <div className='tablet'>
          <div className='main-grid'>
            <MintScreen signer={connectedSigner}/>
          </div>
        </div>
      </div>
    </div>
  )
}