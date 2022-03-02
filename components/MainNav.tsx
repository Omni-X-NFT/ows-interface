import React from 'react'

const MainNav:React.FC = () => {
  return(
    <div className='mainnavcorner'>
      <div className='mainnav'>
        <div className='button-borders'>
          <button className='primary-button'>OMNIVERSE</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>OMNI WARS</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>OMNI X</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button'>CONNECT</button>
        </div>
      </div>
    </div>
  )
}

export default MainNav