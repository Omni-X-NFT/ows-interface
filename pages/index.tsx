import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const { isAuthenticated, authenticate } = useMoralis()
  const router = useRouter()
  
  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard')
  }, [isAuthenticated])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <Head>
        <title>Omni Wars Interface</title>
        <meta name="description" content="A basic interface for playing Omni Wars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        className="px-7 py-4 text-xl rounded-xl animate-pulse text-white"
        onClick={ () =>
          authenticate({ signingMessage: 'Authorize linking of your wallet' })
        }
      >
      Login using Metamask
      </button>
    </div>
  )
}
