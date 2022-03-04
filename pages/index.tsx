import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainNav from '../components/MainNav'
import SideNav from '../components/SideNav'

export default function Home() {

  const router = useRouter()
  

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav/>
      <div className='tabletcorner'>
        <div className='tablet'>
          <SideNav/>
          sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
    </div>
  )
}
