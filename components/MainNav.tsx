import React from 'react'
import { useRouter } from 'next/router'

const MainNav:React.FC = () => {
  
  const router = useRouter()

  return(
    <div className='mainnavcorner h-[80px]'>
      <div className='mainnav'>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/')}>OMNIVERSE</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>GREG</button>
        </div>
      </div>
    </div>
  )
}

export default MainNav