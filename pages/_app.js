import '../styles/globals.css'

import {createWeb3ReactRoot, Web3ReactProvider} from '@web3-react/core'

import {NetworkContextName} from '../utils/constants'
import {getLibrary} from '../utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

function MyApp({ Component, pageProps }) {
  return (
  	<Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
    		<Component {...pageProps} />
      </Web3ProviderNetwork>
  	</Web3ReactProvider>
  )
}

export default MyApp
