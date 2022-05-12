import Head from 'next/head'
import MainNav from '../../components/MainNav'

export default function Dashboard() {

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-black'>
      <Head>
        <title>Omniverse DAO - Dashboard</title>
      </Head>
      <MainNav/>
      <div className='text-white'>
        Dashboard
      </div>
    </div>
  )
}