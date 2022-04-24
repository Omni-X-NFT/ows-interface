import React, { useState } from 'react'
import { useRouter } from 'next/router'

const MainNav:React.FC = ({ setNetId, netId, addresses }) => {

  const router = useRouter()

  return(
    <div className='mainnavcorner h-[80px]'>
      <div className='mainnav relative'>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/')}>OMNIVERSE</button>
        </div>
        <div className='button-borders'>
          <button className='primary-button' onClick={() => router.push('/greg')}>GREG</button>
        </div>
        <div className='absolute flex w-[50px] right-[10px] h-full'>
          {
            netId && (addresses[netId] && <img src={addresses[netId].image} className='w-[50px]' />)
          }
          <select className="block absolute top-[15px] w-[50px] appearance-none text-gray-700 py-3 px-4 pr-8 bg-transparent rounded-[10px] leading-tight focus:outline-none focus:border-gray-500" id="grid-state" onChange={e => setNetId(e.target.value)} value={netId}>
            <option value='4' data-img_src='../static/logo/ethereum-eth-logo-1.svg'>Rinkeby</option>
            <option value='97' data-img_src='../static/logo/dbanner1_copy_1.svg'>Bscscan</option>
            <option value='43113' data-img_src='../static/logo/dbanner1_copy_2_1.svg'>Snowtrace</option>
            <option value='80001' data-img_src='../static/logo/dbanner1_copy_4_1.svg'>Polygonscan</option>
            <option value='421611' data-img_src='../static/logo/JtpX95Rt_400x400-1.svg'>Arbiscan</option>
            <option value='4002' data-img_src='../static/logo/dbanner1_copy_3_1.svg'>Ftmscan</option>
            <option value='69' data-img_src='../static/logo/fantom-ftm-logo-1.svg'>Kovan</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default MainNav