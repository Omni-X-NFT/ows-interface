import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import HomeNav from '../../components/HomeNav'

export default function Dashboard() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO - Dashboard</title>
      </Head>
      <HomeNav/>
      <div className='text-white'>
        Dashboard
      </div>
    </div>
  )
}