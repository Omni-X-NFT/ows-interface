import React, { useState } from 'react'
import { useRouter } from 'next/router'

const MainNav = ({ setNetId, netId, addresses = [] }) => {

  const router = useRouter()
  const [show, setShow] = useState(false)

  let keys = Object.keys(addresses)

  const toggleModal = () => setShow(!show)
  const selectItem = (item) => {
    setNetId(item)
    toggleModal()
  }

  return(
    <div className='mainnavcorner h-[80px] abel z-10'>
      <div className='mainnav relative'>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/')}>OMNIVERSE</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/greg')}>GREG</button>
        </div>
        <div className='absolute flex w-[50px] right-[10px] top-[70px] sm:top-[0px]  h-full'>
          <button onClick={toggleModal} className="text-white rounded-lg text-sm text-center inline-flex items-center">
            {
              netId && (addresses[netId] && <img src={addresses[netId].image} className='w-[50px]' />)
            }
          </button>

          {
            show &&
            <div id="dropdownBottom" className="z-10 w-44 absolute top-[80px]">
              <ul className="" aria-labelledby="dropdownBottomButton">
                {
                  keys.map(item => (
                    <li key={item} onClick={() => selectItem(item)} className="h-[70px] flex items-center">
                      <a href="#" className="block">
                        <img className="w-[50px]" src={addresses[item].image} />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MainNav