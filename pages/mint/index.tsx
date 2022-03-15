import MainNav from '../../components/MainNav'
import Head from 'next/head'

export default function Mint() {
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