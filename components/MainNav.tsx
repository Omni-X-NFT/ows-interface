import React from 'react'
import { useRouter } from 'next/router'

const MainNav:React.FC = () => {
  
  const router = useRouter()

  return(
    <div className='mainnavcorner'>
      <div className='mainnav'>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/')}>OMNIVERSE</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>OMNI WARS</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>OMNI X</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('mint')}>MINT</button>
        </div>
      </div>
    </div>
  )
}

export default MainNav