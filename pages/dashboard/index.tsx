import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis'

export default function Dashboard() {
  const { isAuthenticated, logout, account } = useMoralis()
  const router = useRouter()
    
  useEffect(() => {
    if (!isAuthenticated) router.replace('/')
  }, [isAuthenticated])

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-black'>
      <Head>
        <title>Omni Wars - Dashboard</title>
      </Head>
      <span className='text-white'>{account}</span>  
      <button
        onClick={logout}
        className='px-7 py-4 text-xl rounded-xl text-white'
      >
            Logout
      </button>
    </div>
  )
}