import {useWeb3React as useWeb3ReactCore} from '@web3-react/core';

export function useActiveWeb3React() {
  const context = useWeb3ReactCore()
  return context;
}