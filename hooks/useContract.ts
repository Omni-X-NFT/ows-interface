import {useMemo} from 'react'
import {Contract} from '@ethersproject/contracts'
import {getContract} from '../utils/contracts.js'
import {useActiveWeb3React} from './useWeb3'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify'

export const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): Contract | null => {
  const {library, account} = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null

    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined,
      );
    } catch (error) {
      toast.error("Failed to get contract",{
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        transition: Slide
      });
      // console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account])
};
