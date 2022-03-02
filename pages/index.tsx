import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainNav from '../components/MainNav'

export default function Home() {

  const router = useRouter()
  

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO</title>
        <meta name='description' content='A homepage for Omniverse DAO'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <MainNav/>
        <div className='text-white'>Omniverse DAO</div>
        <button className='text-white' onClick={() => router.replace('/dashboard')}>Dashboard</button>
      </div>
    </div>
  )
}
