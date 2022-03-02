import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO - Dashboard</title>
      </Head>
      <div className='text-white'>
        Dashboard
      </div>
    </div>
  )
}